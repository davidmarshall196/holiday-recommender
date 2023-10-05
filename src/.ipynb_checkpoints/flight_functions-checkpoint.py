import math
from typing import List, Tuple, Union
from amadeus import Client, ResponseError
from datetime import datetime
import pandas as pd

from src import (
    s3_functions,
    constants,
    config
)
    

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

def haversine_distance(lat1: float, lon1: float, lat2: float, lon2: float) -> float:
    """
    Calculate the Haversine distance between two points on the earth specified in decimal degrees.
    
    :param lat1: Latitude of the first point.
    :type lat1: float
    :param lon1: Longitude of the first point.
    :type lon1: float
    :param lat2: Latitude of the second point.
    :type lat2: float
    :param lon2: Longitude of the second point.
    :type lon2: float
    
    :returns: Haversine distance in kilometers between the two points.
    :rtype: float
    """
    R = 6371  # Earth radius in kilometers

    lat1, lon1, lat2, lon2 = map(math.radians, [lat1, lon1, lat2, lon2])

    dlat = lat2 - lat1
    dlon = lon2 - lon1
    a = math.sin(dlat/2) * math.sin(dlat/2) + math.cos(lat1) * math.cos(lat2) * math.sin(dlon/2) * math.sin(dlon/2)
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1-a))
    distance = R * c

    return distance

def nearest_location(
    lat: float, 
    lon: float, 
    locations: List[Tuple[str, float, float]]
) -> Tuple[str, float, float]:
    """
    Find the nearest location to a given latitude and longitude.
    
    :param lat: Latitude for which to find the nearest location.
    :type lat: float
    :param lon: Longitude for which to find the nearest location.
    :type lon: float
    :param locations: A list of tuples where each tuple is (name, latitude, longitude).
    :type locations: List[Tuple[str, float, float]]
    
    :returns: A tuple containing the name and coordinates of the nearest location.
    :rtype: Tuple[str, float, float]
    """
    return min(
        locations, 
        key=lambda loc: haversine_distance(
            lat, lon, loc[1], loc[2]))

def find_nearest_airport(
    row: dict, 
    given_lat: float, 
    given_lon: float
) -> float:
    """
    Find the Haversine distance to the nearest airport from a given latitude and longitude.
    
    :param row: A dictionary containing the name, latitude and longitude of an airport.
    :type row: dict
    :param given_lat: Latitude for which to find the nearest airport.
    :type given_lat: float
    :param given_lon: Longitude for which to find the nearest airport.
    :type given_lon: float
    
    :returns: Haversine distance to the nearest airport.
    :rtype: float
    """
    _, lat, lon = nearest_location(
        given_lat, given_lon, [(
            row["name"], row["latitude_deg"], row["longitude_deg"])])
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
        
def grab_airport_code(
    data: pd.DataFrame,
    airport: str
) -> Union[str, None]:
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
    departure_date = datetime.strptime(grouped_df.iloc[0]['Departure Date'][0:10], "%d/%m/%Y")
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
        df = s3_functions.grab_data_s3(
            constants.FLIGHTS_SAMPLE_LOC)
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