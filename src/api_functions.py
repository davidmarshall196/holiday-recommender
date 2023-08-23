from typing import Dict, Union, Any, Optional, List
from geopy.geocoders import Nominatim
import requests
import os
import openai
import re
import time
import sys
import math
import pandas as pd
from datetime import datetime
import constants
from amadeus import Client, ResponseError
import streamlit as st


def format_duration(duration):
    """
    Convert duration in the format 'PT3H40M' or 'PT3H' or 'PT40M' to 
    '3hr40m' or '3hr' or '40m'.
    """
    hours = 0
    minutes = 0

    if 'H' in duration:
        hours = int(duration.split('H')[0].split('T')[-1])
    if 'M' in duration:
        minutes_part = duration.split('H')[-1] if 'H' in duration else duration
        minutes = int(minutes_part.split('M')[0].split('T')[-1])
    
    if hours and minutes:
        return f"{hours}hr{minutes}m"
    elif hours:
        return f"{hours}hr"
    else:
        return f"{minutes}m"


# Define the extraction function
def extract_place_country(text: str) -> Dict[str, str]:
    """
    Extract place and country from the text formatted as "Place: [Place], [Country]".
    
    Parameters:
    - text (str): Text containing the place and country information.
    
    Returns:
    - dict: A dictionary containing the extracted place and country.
    """
    
    pattern = r"([\w\s]+), ([\w\s]+?)(?=\s*[\.\n])"
    match = re.search(pattern, text)
    country = text.split('.')[0].strip().split(' ')[-1].replace('.','')
    place = text.split('.')[0].strip().split(' ')[-2].replace(',','')

    
    if match:
        place, country = match.groups()
        country = country.replace(' for your holiday.','')
        country = country.replace('\n','').replace('\n','')
        place = place.replace('I suggest visiting ','')
        return {
            "Place": place,
            "Country": country
        }
    else:
        return {
            "Place": place,
            "Country": country
        }
        print("Check match correct.")

# Define the combined function
def fetch_and_extract_destination(
        weather: str, 
        activity: str, 
        food: str,
        price: str
) -> Dict[str, str]:
    """
    Fetch a holiday recommendation from OpenAI and extract the suggested place and country.
    
    Parameters:
    - weather (str): Preferred weather.
    - activity (str): Preferred activity.
    - food (str): Preferred type of food.
    - price (str): Budget preference.
    
    Returns:
    - dict: A dictionary containing the recommended place and country.
    """
    if constants.TESTING:
        text_content = """
I suggest you visit Rhodes, Greece for your holiday. Rhodes is known for its windy weather, making it an ideal destination for those who enjoy walking and outdoor activities. The island offers numerous scenic trails and coastal paths where you can explore its natural beauty. In addition to the great weather and walking opportunities, Rhodes is famous for its Mediterranean cuisine. You can indulge in delicious Greek dishes, including fresh seafood, moussaka, souvlaki, and tzatziki. Moreover, Rhodes offers affordable accommodations and dining options, making it a perfect choice for travelers on a budget.
        """
        
        place_country = {'Place': 'Rhodes', 'Country': 'Greece'}
    
    else:
        
        # Define the system and user messages
        system_msg = 'You are a helpful travel agent.'
        user_msg = (f"""
                Suggest to me a place for me to go on holiday, based on the following details:\n
                    1) Weather: {weather}\n
                    2) Activity: {activity}\n
                    3) Food: {food}\n
                    4) Price: {price}\n
                The first sentence of your response should be the place in the format 'Place, Country' and nothing else. You should then provide a brief description of why you have chosen this place. Provide a specific place rather than a region or country.
                  """)
    
        # Fetch the recommendation from OpenAI
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "system", "content": system_msg},
                  {"role": "user", "content": user_msg}],
            max_tokens=500)

        # Extract the response content
        text_content = response["choices"][0]["message"]["content"]
    
        # Grab place and country
        place_country = extract_place_country(text_content)
    
        # Extract place and country from the response content
    return text_content, place_country

previous_questions = []
previous_answers = []

while True:
    history = ""
    



def get_lat_lon(place: str, country: str) -> Optional[Dict[str, float]]:
    """
    Fetch the latitude and longitude of a given place and country using Nominatim.
    
    Parameters:
    - place (str): The name of the place.
    - country (str): The name of the country.
    
    Returns:
    - dict or None: A dictionary containing the latitude and longitude if found, otherwise None.
    """
    geolocator = Nominatim(user_agent="geoapiExercises")
    location = geolocator.geocode(f"{place}, {country}")
    
    if location:
        return {
            "Latitude": location.latitude,
            "Longitude": location.longitude
        }
    return None

def get_weather(
    lat: float,
    lon: float,
    weather_api_key: str
) -> Dict[str, Union[str, float]]:
    """
    Fetch weather information for a given city using OpenWeatherMap's API.
    
    Parameters:
    - city_name (str): The name of the city to fetch the weather for.
    - weather_api_key (str): The API key to access OpenWeatherMap's API.
    
    Returns:
    - dict: A dictionary containing temperature, pressure, humidity, and weather description.
    
    Raises:
    - requests.RequestException: If there's an issue with the API request.
    - ValueError: If the city is not found or the API responds with an unexpected status.
    """
    if constants.TESTING:
        weather_dict = {'Temperature': 27.49,
                        'Feels Like': 28.29, 
                        'Pressure': 1010, 
                        'Humidity': 55, 
                        'Wind Speed': 2.89,
                        'Weather Description': 'clear sky'}
        return weather_dict
        
    else:
        metric = 'metric'
        base_url = "https://api.openweathermap.org/data/2.5/weather?"
        complete_url = f"{base_url}lat={lat}&lon={lon}&units={metric}&appid={weather_api_key}"
    
        try:
            response = requests.get(complete_url)
            response.raise_for_status()  # Raise an exception for HTTP errors
        
            data = response.json()
        
            if data["cod"] == 200:
                main_data = data["main"]
                weather_data = data["weather"][0]
                wind = data['wind']
                weather_dict = {
                    "Temperature": main_data["temp"],
                    "Feels Like": main_data["feels_like"],
                    "Pressure": main_data["pressure"],
                    "Humidity": main_data["humidity"],
                    "Wind Speed":wind['speed'],
                    "Weather Description": weather_data["description"]
                }
            
                return weather_dict
            elif data["cod"] == "404":
                raise ValueError("City not found.")
            else:
                raise ValueError(
                    f"Unexpected response from API: {data.get('message', 'Unknown error')}")
        except requests.RequestException as e:
            raise e from None
        
        
def print_char_by_char(text: str, delay: float = 0.05) -> None:
    """
    Print the given text character by character with a specified delay.
    
    Parameters:
    - text (str): The text to be printed.
    - delay (float): Delay between each character in seconds.
    """
    for char in text:
        print(char, end='', flush=True)
        time.sleep(delay)
    print()
    
def simulate_typing_effect(text: str, delay: float = 0.05) -> None:
    buffer = ""
    for char in text:
        buffer += char
        st.text(buffer)
        time.sleep(delay)
        st.experimental_rerun()


def haversine_distance(lat1, lon1, lat2, lon2):
    """
    Calculate the Haversine distance between two points on the earth (specified in decimal degrees).
    """
    R = 6371  # Earth radius in kilometers

    # Convert decimal degrees to radians
    lat1, lon1, lat2, lon2 = map(math.radians, [lat1, lon1, lat2, lon2])

    # Haversine formula
    dlat = lat2 - lat1
    dlon = lon2 - lon1
    a = math.sin(dlat/2) * math.sin(
        dlat/2) + math.cos(lat1) * math.cos(
        lat2) * math.sin(dlon/2) * math.sin(dlon/2)
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1-a))
    distance = R * c

    return distance

def nearest_location(lat, lon, locations):
    """
    Find the nearest location to a given latitude and longitude.

    Parameters:
    - lat, lon: Coordinates for which to find the nearest location.
    - locations: A list of tuples where each tuple is (name, latitude, longitude).

    Returns:
    - tuple: Name and coordinates of the nearest location.
    """
    return min(locations, 
               key=lambda loc: haversine_distance(
                   lat, lon, loc[1], loc[2]))


def find_nearest_airport(row, given_lat, given_lon):
    _, lat, lon = nearest_location(
        given_lat, given_lon, [(row["name"], 
                                row["latitude_deg"], 
                                row["longitude_deg"])])
    return haversine_distance(given_lat, given_lon, lat, lon)


def amadeus_to_dataframe(response, airline_data):
    """
    Convert the Amadeus API response to a DataFrame.

    Parameters:
    - response (list): The response from Amadeus API.
    - airline_data (DataFrame): Dataframe of airline carriers.

    Returns:
    - pd.DataFrame: The converted DataFrame.
    """
    
    # List to store flight details
    flight_data = []

    for flight in response:
        flight_id = flight['id']
        source = flight['source']
        for itinerary in flight['itineraries']:
            for segment in itinerary['segments']:
                flight_detail = {
                    'ID': flight_id,
                    'Source': source,
                    'Departure Date': datetime.strptime(
                        segment['departure'][
                            'at'], '%Y-%m-%dT%H:%M:%S').strftime('%d/%m/%Y'),
                    'Departure Terminal': segment[
                        'departure'].get('terminal', None),
                    'Departure IATA Code': segment[
                        'departure']['iataCode'],
                    'Arrival Date': datetime.strptime(
                        segment['arrival'][
                            'at'], '%Y-%m-%dT%H:%M:%S').strftime('%d/%m/%Y'),
                    'Arrival IATA Code': segment['arrival']['iataCode'],
                    'Carrier Code': segment['carrierCode'],
                    'Flight Number': segment['number'],
                    'Aircraft Code': segment['aircraft']['code'],
                    'Duration': format_duration(segment['duration']),
                    'Price Currency': flight['price']['currency'],
                    'Total Price': flight['price']['total'],
                    'Base Price': flight['price']['base']
                }
                flight_data.append(flight_detail)
    
    # Convert to DataFrame
    df = pd.DataFrame(flight_data)
    
    # Merge airlines
    df = pd.merge(df, airline_data, on=['Carrier Code'], how='left')
    
    return df
        
def grab_airport_code(data: pd.DataFrame, airport: str) -> Union[str, None]:
    """
    Retrieve the IATA code for a given airport name from a DataFrame.

    Parameters:
    - data (pd.DataFrame): A DataFrame containing airport information.
    - airport (str): The name of the airport for which the IATA code is to be fetched.

    Returns:
    - str: The IATA code of the given airport if found. 
    - None: If the airport name is not present in the DataFrame.

    Raises:
    - ValueError: If the provided data does not have the required columns.
    """
    
    if not set(['name', 'iata_code']).issubset(data.columns):
        raise ValueError(
            "The provided DF must contain 'name' and 'iata_code' columns.")
    
    iata_codes = data[data['name'] == airport]['iata_code'].unique()

    if len(iata_codes) == 0:
        return None
    
    return iata_codes[0]

def grab_city(
        data: pd.DataFrame, 
        airport_code: str
    ) -> Union[str, None]:
    """
    Retrieve the City name for a given airport code from a DataFrame.

    Parameters:
    - data (pd.DataFrame): A DataFrame containing airport information.
    - airport (str): The name of the airport for which the IATA code is to be fetched.

    Returns:
    - str: The IATA code of the given airport if found. 
    - None: If the airport name is not present in the DataFrame.

    Raises:
    - ValueError: If the provided data does not have the required columns.
    """
    
    if not set(['iata_code', 'municipality']).issubset(data.columns):
        raise ValueError(
            "The provided DF must contain 'name' and 'iata_code' columns.")
    
    cities = data[data[
        'iata_code'] == airport_code]['municipality'].unique()

    if len(cities) == 0:
        return None
    
    return cities[0]

def weather_icon(description: str) -> str:
    """
    Maps a weather description to a corresponding font-awesome icon.

    Args:
    - description (str): Description of the weather.

    Returns:
    - str: font-awesome icon name.
    """
    icons = {
        "clear sky": ":sunny:",
        "few clouds": ":white_sun_small_cloud:",
        "scattered clouds": ":white_sun_cloud:",
        "broken clouds": ":cloud:",
        "shower rain": ":cloud_with_rain:",
        "rain": ":cloud_with_rain:",
        "thunderstorm": ":thunder_cloud_and_rain:",
        "snow": ":snowflake:",
        "mist": ":foggy:",
        "overcast clouds": ":cloud:"
    }
    return icons.get(description, ":cloud:")  # Default to cloud icon

def parse_duration(duration_str):
    """
    Parse the flight duration string and return the total duration in minutes.
    """
    hours, minutes = 0, 0
    
    # Extract hours and minutes from the duration string
    if 'hr' in duration_str and 'm' in duration_str:
        hours = int(duration_str.split('hr')[0])
        minutes = int(duration_str.split('hr')[1].replace('m', '').strip())
    elif 'hr' in duration_str:
        hours = int(duration_str.split('hr')[0])
    elif 'm' in duration_str:
        minutes = int(duration_str.replace('m', '').strip())
        
    return hours * 60 + minutes

def format_flight_row(grouped_df):
    """
    Format the flight information for a single trip.
    """
    
    # Get the departure and arrival times from the first and last segments
    departure_date = datetime.strptime(grouped_df.iloc[0]['Departure Date'], "%d/%m/%Y")
    departure_time = grouped_df.iloc[0]['Departure Date'].split()[-1]
    arrival_time = grouped_df.iloc[-1]['Arrival Date'].split()[-1]
    
    # Date in "Mon, 2 Oct" format
    formatted_date = departure_date.strftime("%a, %d %b")
    
    # Carriers involved in the trip
    carriers = ", ".join(grouped_df['Airline'].unique())
    
    # Total trip duration
    duration = sum([parse_duration(time) for time in grouped_df['Duration']]) # in minutes
    formatted_duration = f"{duration // 60} hrs {duration % 60} mins"
    
    # Departure and arrival IATA codes
    departure_iata = grouped_df.iloc[0]['Departure IATA Code']
    arrival_iata = grouped_df.iloc[-1]['Arrival IATA Code']
    
    # Stops
    stops = grouped_df['Arrival IATA Code'].tolist()[:-1]
    
    # Price
    price = f"{grouped_df.iloc[0]['Price Currency']} {grouped_df.iloc[0]['Base Price']}"
    
    
    return {
        'Date': formatted_date,
        'Carriers': carriers,
        'Duration': formatted_duration,
        'Route': f"{departure_iata}–{arrival_iata}",
        'Stops': ', '.join(stops),
        'Price': price
    }

def format_flights(
        data,
        drop_carriers=constants.DROP_CARRIERS):
    data = data.copy()
    data['Airline'] = data['Airline'].fillna('Unknown Airline')
    data['Carrier Code'] = data['Carrier Code'].fillna('NA')
    #data = data.sort_values(by = ['Base Price'])
    formatted_flights = data.groupby('ID').apply(format_flight_row)
    formatted_flights = formatted_flights.reset_index(drop=True)
    formatted_flights = pd.DataFrame(
        list(formatted_flights)).drop_duplicates(
        subset=['Date', 'Carriers', 'Price']).reset_index(drop=True)
    if drop_carriers:
        formatted_flights = formatted_flights.drop(
            'Carriers', axis=1)
    return formatted_flights
    
def get_flight_offers(
    origin_code_med: str, 
    origin_code_large: str, 
    destination_code_med: str, 
    destination_code_large: str,
    date: str, 
    airlines: pd.DataFrame,
    adults: str
) -> dict:
    """
    Get flight offers for a given origin, destination, and month using the Amadeus Flight Offers Search API.

    Parameters:
    - origin_code (str): Airport code for the origin.
    - destination_lat (float): Latitude for the destination.
    - destination_lon (float): Longitude for the destination.
    - month (str): Desired month for travel.
    - api_key (str): Amadeus API key.

    Returns:
    - dict: Flight offers.
    """
    if isinstance(adults, int):
        adults = str(adults)
    
    if constants.TESTING:
        airport_type = {}
        airport_type['type'] = 'medium'
        df = pd.read_csv(constants.FLIGHTS_SAMPLE_LOC)
        return format_flights(df), airport_type
    
    else:
        amadeus = Client(
            client_id=constants.FLIGHTS_API_KEY,
            client_secret=constants.FLIGHTS_API_SECRET
        )

        try:
            airport_type = {}
            try:
                response = amadeus.shopping.flight_offers_search.get(
                    originLocationCode=origin_code_med,
                    destinationLocationCode=destination_code_med,
                    departureDate=date,
                    adults=adults
                )
                try:
                    df = amadeus_to_dataframe(
                        response.data, airlines
                    )
                except:
                    pass
                formatted_flights = format_flights(df)
                airport_type['type'] = 'medium'
            except:
                response = amadeus.shopping.flight_offers_search.get(
                    originLocationCode=origin_code_large,
                    destinationLocationCode=destination_code_large,
                    departureDate=date,
                    adults=adults
                )
                df = amadeus_to_dataframe(
                    response.data, airlines
                )
                try:
                    formatted_flights = format_flights(df)
                    airport_type['type'] = 'large'   
                except:
                    return pd.DataFrame({'Details':['No Flights Found']})
            return formatted_flights, airport_type
        except ResponseError as error:
            print(error)


def get_photo_of_place(
    place_name: str, 
    api_key: str,
    max_width: int = 400
) -> Optional[str]:
    """
    Fetch and save a photo of a specified place using Google Places API.

    Parameters:
    - place_name (str): Name of the place for which photo is required.
    - api_key (str): Google Places API key.
    - max_width (int, optional): Desired width of the photo. Default is 400 pixels.

    Returns:
    - str: Filename of the saved photo if successful, otherwise None.
    
    Example:
    >>> get_photo_of_place("Eiffel Tower", "YOUR_API_KEY")
    'Eiffel_Tower.jpg'
    """
    # Create a valid filename by replacing non-alphanumeric characters with underscores
    filename = re.sub(r'\W+', '_', place_name) + ".jpg"
    filepath = f'{constants.PLACE_IMAGE_PATH}/{filename}'
    
    if constants.TESTING:
        return f'{constants.PLACE_IMAGE_PATH}/{constants.RHODES_IMAGE}'
    
    # Check if the file already exists
    if os.path.exists(filepath):
        print(f"Photo for {place_name} already exists as {filepath}")
        return filepath

    # Step 1: Use the Places API to search for the place and get its photo_reference
    places_endpoint = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json"
    params = {
        "input": place_name,
        "inputtype": "textquery",
        "fields": "photos",
        "key": constants.GOOGLE_API_KEY
    }
    
    response = requests.get(places_endpoint, params=params)
    result = response.json()

    # Ensure we have a result and extract the photo_reference
    if not result.get('candidates') or \
       not 'photos' in result['candidates'][0]:
        print(f"No photo found for {place_name}")
        return None

    photo_reference = result['candidates'][0]['photos'][0]['photo_reference']

    # Step 2: Use the photo_reference to get the actual photo
    photo_endpoint = "https://maps.googleapis.com/maps/api/place/photo"
    photo_params = {
        "maxwidth": str(max_width),
        "photoreference": photo_reference,
        "key": api_key
    }

    response = requests.get(photo_endpoint, params=photo_params)
    if response.status_code == 200:
        with open(filepath, "wb") as f:
            f.write(response.content)
        print(f"Photo saved as {filepath}")
    else:
        print("Error fetching the photo")
        return None
    
    return filepath

def create_hotel_dataframe(data):
    # Extract main details
    details = []
    for entry in data.get('result', []):
        hotel_detail = {
            'Name': entry.get('hotel_name', None),
            'Type': entry.get('accommodation_type_name', None),
            'Area': entry.get('city_name_en', None),
            'Score': entry.get('review_score', None),
            'review_score_word': entry.get('review_score_word', None),
            'Price': entry.get('min_total_price', None),
            'url': entry.get('url', None),
            'currency_code' : entry.get('currency_code', None),
        }
        details.append(hotel_detail)

    # Create DataFrame
    df = pd.DataFrame(details)
    print(df.columns)
    try:
        df['Score'] = df['Score'].astype(
            str) + ': ' + df[
            'review_score_word'].astype(str) 
        df['Price'] = df['currency_code'] + ' ' + df['Price'].astype(str)
        df = df[['Name', 'Type','Area', 'Score', 'Price', 'url']]
        df['Score'] = df['Score'].replace('nan: ', '')
        return df
    except:
        data = pd.read_csv(constants.HOTEL_DATA_PATH)
        return data

def fetch_hotels_by_location(
    arrival_date: str, 
    departure_date: str, 
    room_qty: int, 
    guest_qty: int, 
    children_qty: int, 
    currency: str, 
    latitude: float, 
    longitude: float
) -> dict:
    """
    Fetches hotel details using RapidAPI for the given parameters.

    Parameters:
    - arrival_date (str): Arrival date in the format 'YYYY-MM-DD'
    - departure_date (str): Departure date in the format 'YYYY-MM-DD'
    - room_qty (int): Number of rooms required
    - guest_qty (int): Number of guests
    - children_qty (int): Number of children
    - currency (str): Preferred currency code
    - latitude (float): Latitude of the center location
    - longitude (float): Longitude of the center location

    Returns:
    - dict: Response dictionary containing hotel details
    """
    
    if constants.TESTING:
        data = pd.read_csv(constants.HOTEL_DATA_PATH)
        return data
    
    bc = constants.BOX_CONSTANT
    
    # Define a rough bounding box
    bbox = f"{latitude-bc},{latitude+bc},{longitude-bc},{longitude+bc}"

    url = "https://apidojo-booking-v1.p.rapidapi.com/properties/list-by-map"
    headers = {
        "x-rapidapi-host": "apidojo-booking-v1.p.rapidapi.com",
        "x-rapidapi-key": constants.RAPID_API_KEY  
        # Replace with your RapidAPI key
    }

    querystring = {
        "arrival_date": arrival_date,
        "departure_date": departure_date,
        "room_qty": str(room_qty),
        "guest_qty": str(guest_qty),
        "children_qty": str(children_qty),
        "price_filter_currencycode": currency,
        "categories_filter": "class::1,class::2,class::3",
        "languagecode": "en-us",
        "travel_purpose": "leisure",
        "bbox": bbox,
        "search_id": "none",
        "order_by": "popularity"
    }

    response = requests.get(url, headers=headers, params=querystring)
    response_json = response.json()
    data = create_hotel_dataframe(response_json)
    return data




