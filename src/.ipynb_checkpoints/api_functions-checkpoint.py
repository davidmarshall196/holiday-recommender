from typing import Dict, Union, Any, Optional, List, Tuple
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
import config
from amadeus import Client, ResponseError
import streamlit as st
import boto3
import pandas as pd
from botocore.exceptions import (
    NoCredentialsError, 
    PartialCredentialsError, 
    ClientError
)
from PIL import Image
import boto3
import io

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
            client_id=config.FLIGHTS_API_KEY,
            client_secret=config.FLIGHTS_API_SECRET
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
    if image_exists_in_s3(filepath):
        print(f"Photo for {place_name} already exists as {filepath}")
        image = grab_image_s3(filepath)
        return image

    # Step 1: Use the Places API to search for the place and get its photo_reference
    places_endpoint = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json"
    params = {
        "input": place_name,
        "inputtype": "textquery",
        "fields": "photos",
        "key": config.GOOGLE_API_KEY
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
        "key": config.GOOGLE_API_KEY
    }

    response = requests.get(photo_endpoint, params=photo_params)
    if response.status_code == 200:
        image = Image.open(io.BytesIO(response.content))
        image.format = 'JPEG' 
        save_image_s3(image, filepath)
        print(f"Photo saved as {filepath}")
    else:
        print("Error fetching the photo")
        return None
    
    return image

def create_hotel_dataframe(
    data: Dict[str, Union[List[Dict], None]]
) -> pd.DataFrame:
    """
    Create a DataFrame containing hotel details from a given data dictionary.

    :param data: Dictionary containing the hotel details.
    :type data: Dict[str, Union[List[Dict], None]]
    
    :returns: DataFrame containing the extracted hotel details.
    :rtype: pd.DataFrame

    :raises: None, falls back to reading from a constants.HOTEL_DATA_PATH CSV if DataFrame creation fails.
    """
    
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
        "x-rapidapi-key": config.RAPID_API_KEY  
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




