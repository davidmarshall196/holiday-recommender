import pandas as pd
from typing import Dict, Any, List
from src import (
    chatgpt_functions,
    flight_functions,
    google_functions,
    hotel_functions,
    s3_functions,
    weather_functions,
    constants,
    config
)
    
class TripPlanner:
    """
    A class for planning trips based on various parameters like weather, activity, food, etc.
    """
    
    def __init__(self, 
                 weather: str, 
                 activity: str, 
                 food: str, 
                 price: float, 
                 airports: Any,  # Replace Any with the actual type
                 selected_airport: str, 
                 departure_date: str, 
                 return_date: str, 
                 airlines: List[str], 
                 adults: int, 
                 children: int, 
                 rooms: int, 
                 currency: str
                ) -> None:
        """
        Initializes the TripPlanner object with various parameters.
        
        :param weather: Desired weather conditions for the trip.
        :param activity: Desired activities for the trip.
        :param food: Desired food options for the trip.
        :param price: Budget or price considerations for the trip.
        """
        self.weather = weather
        self.activity = activity
        self.food = food
        self.price = price
        self.airports = airports
        self.selected_airport = selected_airport
        self.departure_date = departure_date
        self.return_date = return_date
        self.airlines = airlines
        self.adults = adults
        self.children = children
        self.rooms = rooms
        self.currency = currency
    
    def fetch_and_plan_trip(self) -> None:
        """
        Fetches and plans the trip based on the parameters given
        during initialization.
        """
        # Fetch and extract destination
        self.text, self.place_country = chatgpt_functions.fetch_and_extract_destination(
            self.weather, self.activity, self.food, self.price
        )
        print(self.text)
        print(self.place_country)
    
        # Extract lat, long
        self.lat_lon = chatgpt_functions.get_lat_lon(
              self.place_country['Place'],
              self.place_country['Country']
        )
        print(self.lat_lon)
    
        # Store the lat and lon in session state
        self.given_lat = self.lat_lon['Latitude']
        self.given_lon = self.lat_lon['Longitude']
    
        # Weather
        self.weather_data = weather_functions.get_weather(
            self.given_lat, 
            self.given_lon, 
            config.WEATHER_API_KEY
        )
        print(self.weather_data)
    
        # Apply the function to the DataFrame
        self.airports["Distance"] = self.airports.apply(
            lambda row: flight_functions.find_nearest_airport(
                row, 
                self.given_lat, 
                self.given_lon, 
            ), axis=1)
    
        # Origin code
        self.origin_code = flight_functions.grab_airport_code(
            self.airports, self.selected_airport)
    
        # Sort the DataFrame based on the distance to find the nearest airport
        self.nearest_airport_med = self.airports.sort_values(
            by="Distance")['name'].iloc[0]
        self.nearest_airport_large = self.airports[
            self.airports['type'] == 'large_airport'].sort_values(
            by="Distance")['name'].iloc[0]
        self.destination_code_med = self.airports.sort_values(
            by="Distance")['iata_code'].unique()[0]
        self.destination_code_large = self.airports[
            self.airports['type'] == 'large_airport'].sort_values(
            by="Distance")['iata_code'].unique()[0]
        self.origin_city = flight_functions.grab_city(
            self.airports, self.origin_code)
        self.destination_city_med = flight_functions.grab_city(
            self.airports, self.destination_code_med)
        self.destination_city_large = flight_functions.grab_city(
            self.airports, self.destination_code_large)
        self.origin_code_med = flight_functions.grab_airport_code(
            self.airports, self.selected_airport)
        self.origin_airport_lat = self.airports[
            self.airports['iata_code'] == self.origin_code_med][
                'latitude_deg'].unique()[0]
        self.origin_airport_lon = self.airports[
            self.airports['iata_code'] == self.origin_code_med][
                'longitude_deg'].unique()[0]
        self.airports["Distance"] = self.airports.apply(
            lambda row: flight_functions.find_nearest_airport(
            row, 
            self.origin_airport_lat, 
            self.origin_airport_lon, 
            ), axis=1)
        self.origin_code_large = self.airports[
            self.airports['type'] == 'large_airport'].sort_values(
            by="Distance")['iata_code'].iloc[0]
    
        # Flight info
        try:
            self.outbound_flight_df, self.airport_type_out = flight_functions.get_flight_offers(
                self.origin_code_med, 
                self.origin_code_large,
                self.destination_code_med, 
                self.destination_code_large, 
                self.departure_date,
                self.airlines,
                self.adults
            )
        except Exception:
            self.outbound_flight_df, self.airport_type_out = pd.DataFrame(), None
        
        # Flight info
        try:
            self.return_flight_df, self.airport_type_return = flight_functions.get_flight_offers(
                self.destination_code_med, 
                self.destination_code_large, 
                self.origin_code_med, 
                self.origin_code_large,
                self.return_date,
                self.airlines,
                self.adults
            )
        except Exception:
            self.return_flight_df, self.airport_type_return = pd.DataFrame(), None
        
    
        # Image
        self.place_image = google_functions.get_photo_of_place(
            f"{self.place_country['Place']}, {self.place_country['Country']}", 
            config.GOOGLE_API_KEY
        )
        
        # Hotels
        self.hotels = hotel_functions.fetch_hotels_by_location(
            arrival_date = self.departure_date,
            departure_date = self.return_date,
            room_qty = self.rooms,
            guest_qty = self.adults + self.children,
            children_qty = self.children,
            currency = self.currency,
            latitude = self.given_lat,
            longitude = self.given_lon
        )
