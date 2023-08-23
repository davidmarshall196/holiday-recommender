
import sys
sys.path.append('../src')

import api_functions
import constants

import importlib
import os
import openai
import pandas as pd

openai.api_key = constants.NEW_OPENAI_KEY

importlib.reload(constants)
importlib.reload(api_functions)

pd.set_option('display.max_columns', None)
pd.set_option('display.max_rows', None)
pd.set_option('display.expand_frame_repr', False)
pd.set_option('max_colwidth', 9999)

# Load flights
airports = pd.read_csv('../data/large_airports.csv')

# Load airlines
airlines = pd.read_csv('../data/airlines_small.csv')

# Examples
weather = "hot"
activity = "surfing"
food = "rice and chicken"
price = "cheap"

weather = "cold"
activity = "skiing"
food = "pizza"
price = "don't mind"

weather = "cold"
activity = "site seeing"
food = "Bratwurst"
price = "upmarket"

weather = "hot"
activity = "visiting castles"
food = "meat based stew"
price = "cheap"

weather = "warm"
activity = "climbing"
food = "cheese"
price = "luxury"

weather = "cold"
activity = "seeing santa"
food = "meat"
price = "luxury"

weather = "warm"
activity = "scuba diving"
food = "rum"
price = "cheap"

weather = "cold"
activity = "hiking"
food = "burgers"
price = "luxury"

weather = "rainy"
activity = "sailing"
food = "pastries"
price = "cheap"

weather = "hot"
activity = "Swimming"
food = "Fish"
price = "Medium"

weather = "windy"
activity = "walking"
food = "mediteranian"
price = "cheap"

weather = "rainy"
activity = "fishing"
food = "fish"
price = "don't mind"

# call holiday helper
text_content, place_country = api_functions.fetch_and_extract_destination(
    weather = weather,
    activity = activity,
    food = food,
    price = price,
)
print(text_content)
print(place_country)

# Get lat and long
lat_lon = api_functions.get_lat_lon(
    place_country['Place'],
    place_country['Country']
)

# Given latitude and longitude
given_lat = lat_lon['Latitude']
given_lon = lat_lon['Longitude']

# Get weather
weather = api_functions.get_weather(
    lat_lon['Latitude'], 
    lat_lon['Longitude'], 
    constants.WEATHER_API_KEY
)
print(weather)

# Apply the function to the DataFrame
airports["Distance"] = airports.apply(
    lambda row: api_functions.find_nearest_airport(
        row, given_lat, given_lon), axis=1)

# Sort the DataFrame based on the distance to find the nearest airport
nearest_airport = airports.sort_values(by="Distance").iloc[0]
print(nearest_airport)
destination_code = airports.sort_values(by="Distance")['iata_code'].unique()[0]

# Call api
date = "2023-10-02"
airport = 'Leeds Bradford Airport'

df = api_functions.get_flight_offers(
    api_functions.grab_airport_code(data, airport), 
    destination_code, 
    date,
    airlines
)
df.head(10)
df = pd.read_csv('/Users/david@inawisdom.com/Documents/Training/travel_app/data/flights_sample.csv')

weather['Temperature']

airports.head()

airports[airports['iso_country'] == 'GB']

import os
os.getcwd()

df.head()

import api_functions
import importlib
importlib.reload(api_functions)

# Group by ID and apply the formatting function
formatted_flights = df.groupby('ID').apply(api_functions.format_flight_row)
formatted_flights = formatted_flights.reset_index(drop=True)
formatted_flights = pd.DataFrame(
    list(formatted_flights)).drop_duplicates(
    subset=['Date', 'Carriers', 'Price']).reset_index(drop=True)
formatted_flights

# Usage
place_name = "Rhodes, Greece"

import requests

url = "https://apidojo-booking-v1.p.rapidapi.com/properties/list-by-map"

querystring = {"arrival_date":"2023-10-01","departure_date":"2023-10-08","room_qty":"1","guest_qty":"1","bbox":"14.291283,14.948423,120.755688,121.136864","search_id":"none","children_age":"11,5","price_filter_currencycode":"USD","categories_filter":"class::1,class::2,class::3","languagecode":"en-us","travel_purpose":"leisure","children_qty":"2","order_by":"popularity"}

headers = {
	"X-RapidAPI-Key": "0352880adbmshdd982fa19f87c97p12948djsn735a6b2b8176",
	"X-RapidAPI-Host": "apidojo-booking-v1.p.rapidapi.com"
}

response = requests.get(url, headers=headers, params=querystring)

print(response.json())

importlib.reload(api_functions)
importlib.reload(constants)


data = api_functions.fetch_hotels_by_location(
    arrival_date = '2023-10-01',
    departure_date = '2023-10-08',
    room_qty = 1,
    guest_qty = 2,
    children_qty = 1,
    children_age = '8',
    currency = 'GBP',
    latitude = given_lat ,
    longitude = given_lon)
    


df['Score'].unique()
df = create_dataframe(data)
df

#####################################################################
#####################################################################
#####################################################################

import api_functions
importlib.reload(api_functions)

#text, place_country = api_functions.fetch_and_extract_destination(
#    weather, activity, food, price
#)
selected_airport = 'London Gatwick Airport'
departure_date = '2023-08-23'
return_date = '2023-09-27'
rooms = 1
adults = 1
children = 1
currency = 'GBP'

place_country = {'Place': 'Bangkok', 'Country': 'Thailand'}


# Extract lat, long
lat_lon = api_functions.get_lat_lon(
      place_country['Place'],
      place_country['Country']
)
print(lat_lon)

# Store the lat and lon in session state
given_lat = lat_lon['Latitude']
given_lon = lat_lon['Longitude']

# Weather
weather_data = api_functions.get_weather(
        given_lat, 
        given_lon, 
        constants.WEATHER_API_KEY
)
print(weather_data)

# Apply the function to the DataFrame
airports["Distance"] = airports.apply(
        lambda row: api_functions.find_nearest_airport(
            row, 
            given_lat, 
            given_lon, 
        ), axis=1)
    
# Origin code
origin_code = api_functions.grab_airport_code(
    airports, selected_airport)

# Sort the DataFrame based on the distance to find the nearest airport
nearest_airport_med = airports.sort_values(
    by="Distance")['name'].iloc[0]
nearest_airport_large = airports[
    airports['type'] == 'large_airport'].sort_values(
    by="Distance")['name'].iloc[0]
destination_code_med = airports.sort_values(
    by="Distance")['iata_code'].unique()[0]
destination_code_large = airports[
    airports['type'] == 'large_airport'].sort_values(
    by="Distance")['iata_code'].unique()[0]
origin_city = api_functions.grab_city(
    airports, origin_code)
destination_city_med = api_functions.grab_city(
    airports, destination_code_med)
destination_city_large = api_functions.grab_city(
    airports, destination_code_large)
origin_code_med = api_functions.grab_airport_code(
    airports, selected_airport)
origin_airport_lat = airports[
    airports['iata_code'] == origin_code_med][
    'latitude_deg'].unique()[0]
origin_airport_lon = airports[
    airports['iata_code'] == origin_code_med][
    'longitude_deg'].unique()[0]
airports["Distance"] = airports.apply(
    lambda row: api_functions.find_nearest_airport(
        row, 
        origin_airport_lat, 
        origin_airport_lon, 
    ), axis=1)
origin_code_large = airports[
    airports['type'] == 'large_airport'].sort_values(
    by="Distance")['iata_code'].iloc[0]

# Flight info
outbound_flight_df, airport_type_out = api_functions.get_flight_offers(
    origin_code_med, 
    origin_code_large,
    destination_code_med, 
    destination_code_large, 
    departure_date,
    airlines
)

# Flight info
return_flight_df, airport_type_return = api_functions.get_flight_offers(
    destination_code_med, 
    destination_code_large, 
    origin_code_med, 
    origin_code_large,
    return_date,
    airlines
)

# Image
filename = api_functions.get_photo_of_place(
    f"{place_country['Place']}, {place_country['Country']}", 
    constants.GOOGLE_API_KEY
)

# Hotels
hotels = api_functions.fetch_hotels_by_location(
    arrival_date = departure_date,
    departure_date = return_date,
    room_qty = rooms,
    guest_qty = adults + children,
    children_qty = children,
    currency = currency,
    latitude = given_lat,
    longitude = given_lon
)

bc = 0.05

# Define a rough bounding box
bbox = f"{given_lat-bc},{given_lon-bc},{given_lat+bc},{given_lon+bc}"


url = "https://apidojo-booking-v1.p.rapidapi.com/properties/list-by-map"
headers = {
    "x-rapidapi-host": "apidojo-booking-v1.p.rapidapi.com",
    "x-rapidapi-key": constants.RAPID_API_KEY  
    # Replace with your RapidAPI key
}

given_lat
given_lon
querystring = {
    "arrival_date": '2024-01-23',
    "departure_date": '2024-02-23',
    "room_qty": str(rooms),
    "guest_qty": str(adults),
    "children_qty": str(0),
    "price_filter_currencycode": currency,
    "categories_filter": "class::1,class::2,class::3,class::4,class::5",
    "languagecode": "en-us",
    "travel_purpose": "leisure",
    "bbox": bbox,
    "search_id": "none",
    "order_by": "popularity"
}

response = requests.get(url, headers=headers, params=querystring)
response_json = response.json()
data = create_hotel_dataframe(response_json)

import boto3

session = boto3.Session(profile_name='david-gmail-acc')
ssm_client = session.client('ssm')

# Name of the parameter you want to retrieve
parameter_name = "FLIGHTS_API_KEY"

# Call the get_parameter method
response = ssm_client.get_parameter(
    Name=parameter_name,
    WithDecryption=False
)

# Extract the parameter value
FLIGHTS_API_KEY = response['Parameter']['Value']


# Load flights
airports = pd.read_csv(
    '/Users/david@inawisdom.com/Documents/Training/travel_app/data/large_airports.csv')

# Load airlines
airlines = pd.read_csv(
    '/Users/david@inawisdom.com/Documents/Training/travel_app/data/airlines_small.csv')

import pandas as pd
airports = pd.read_csv('s3://holiday-recommender-app/data/large_airports.csv')


import pandas as pd
import boto3
import api_functions


airports = api_functions.grab_data_s3(constants.AIRPORTS_DATA_PATH)
airlines = api_functions.grab_data_s3(constants.AIRLINES_DATA_PATH)    

bucket = "holiday-recommender-app"
file_name = "data/large_airports.csv"
session = boto3.Session(profile_name='david-gmail-acc')

import importlib
importlib.reload(constants)
import constants

def save_image_s3(
    image: Image.Image, 
    file_path: str, 
    bucket: str = constants.S3_BUCKET,
    profile_name: Optional[str] = 'david-gmail-acc'

def grab_image_s3( 
    file_path: str, 
    bucket: str = constants.S3_BUCKET,
    profile_name: Optional[str] = 'david-gmail-acc'

def grab_data_s3(
    file_path: str, 
    bucket: str = constants.S3_BUCKET,
    profile_name: Optional[str] = 'david-gmail-acc'
    
    
    
    
