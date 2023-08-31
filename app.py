
import streamlit as st
import openai
import pydeck as pdk
import pandas as pd
from datetime import date, timedelta
import time
import textwrap
import os

# Import package
import pipeline
from src import (
    constants,
    config,
    s3_functions,
    weather_functions
)

# poetry run streamlit run /Users/david@inawisdom.com/Documents/Training/travel_app/app.py


openai.api_key = config.NEW_OPENAI_KEY

# Load flights
airports = s3_functions.grab_data_s3(constants.AIRPORTS_DATA_PATH)

# Load airlines
airlines = s3_functions.grab_data_s3(constants.AIRLINES_DATA_PATH)    

# Wide layout
st.set_page_config(layout="wide")

# Set constant testing
st.session_state.TESTING = constants.TESTING

# Define the custom CSS
custom_css = """
<style>
    .sidebar .sidebar-content {
        width: 600px;
    }

    .reportview-container .main .block-container {
        padding-top: {1}rem;    
        padding-bottom: {1}rem;  
        padding-left: {1}rem;  
        padding-right: {1}rem;  
    }
    .appview-container .main .block-container{{
        padding-top: {1}rem;    
        padding-bottom: {1}rem;  
        padding-left: {1}rem;  
        padding-right: {1}rem;  
    }}

</style>
"""

# Inject the custom CSS
st.markdown(custom_css, unsafe_allow_html=True)

# Title
st.title("ChatGPT Powered Holiday Destination Recommender")

# Sidebar for user input
st.sidebar.header("Preferences")

# Collecting user inputs from the sidebar
weather = st.sidebar.selectbox('Preferred Weather', 
                               ['Hot', 'Cold', 'Mild', 'Rainy', 'Snowy', 'Windy'])
activity = st.sidebar.text_input('Activity', 'e.g. Surfing')
food = st.sidebar.text_input('Food', 'e.g. Rice and Chicken')
price = st.sidebar.selectbox('Price', 
                    ['Affordable', 'Medium', 'Luxury', "Don't Mind"])


# Sidebar inputs for flight details
st.sidebar.header("Holiday Details")
departure_date = st.sidebar.date_input(
    "Departure Date", 
    date.today() + timedelta(days=1))
return_date = st.sidebar.date_input(
    "Return Date", 
    date.today() + timedelta(days=7))
if return_date <= departure_date:
    st.sidebar.markdown('**Return date must be after start date**')

if departure_date <= date.today():
    st.sidebar.markdown('**Departure date must not be in the past**')
    
adults = st.sidebar.selectbox('Adults', list(range(1,11)))
children = st.sidebar.selectbox('Children', list(range(1,11)))
rooms = st.sidebar.selectbox('Rooms', list(range(1,11)))

if rooms > (children + adults):
    st.sidebar.markdown('**Number of rooms cannot be greater than people**')

currency = st.sidebar.selectbox('Currency', 
                    ['GBP', 'EUR', 'USD'])
selected_airport = st.sidebar.selectbox(
    "Select a starting airport", list(airports['name'].unique()))


# Create two columns
col1, col2 = st.columns(2)

# Main action button
if return_date > departure_date and departure_date > date.today() and rooms <= (children + adults) and st.sidebar.button(
    'Go'):
    
    # Initialize a new TripPlanner object
    trip_planner = pipeline.TripPlanner(
        weather=weather, 
        activity=activity, 
        food=food, 
        price=price, 
        airports=airports,
        selected_airport=selected_airport, 
        departure_date=departure_date, 
        return_date=return_date, 
        airlines=airlines, 
        adults=adults, 
        children=children, 
        rooms=rooms, 
        currency=currency
    )

    # Execute methods on the trip_planner object
    trip_planner.fetch_and_plan_trip()
    
    # Col1
    with col1:
        # Display the recommended place
        st.subheader(
            f"Recommended Destination: {trip_planner.place_country['Place']}, {trip_planner.place_country['Country']}")
        
        # Display text
        st.write(trip_planner.text)

        # Display weather
        st.title("Weather Information")
        st.subheader(f"Current Weather: {trip_planner.weather_data['Weather Description'].capitalize()}")
    
        st.write(
            f"**Temperature:** {int(trip_planner.weather_data['Temperature'])}°C")
        st.write(
            f"**Feels Like:** {int(trip_planner.weather_data['Feels Like'])}°C")
        st.write(
            f"**Pressure:** {trip_planner.weather_data['Pressure']} hPa")
        st.write(
            f"**Humidity:** {trip_planner.weather_data['Humidity']}%")
        st.write(
            f"**Wind Speed:** {trip_planner.weather_data['Wind Speed']} m/s")
    
        # Flights
        st.title("Flight Details")
        
        # Sub heading
        if trip_planner.airport_type_out['type'] == 'medium':
            st.subheader(
                f"Outbound: {trip_planner.origin_city} to {trip_planner.destination_city_med}")
        else:
            st.subheader(
                f"Outbound: {trip_planner.origin_city} to {trip_planner.destination_city_large}")
        
        # Flight data
        st.write(f"**Starting Airport:** {trip_planner.selected_airport}")
        
        if trip_planner.airport_type_out['type'] == 'medium':
            st.write(f"**Destination Airport:** {trip_planner.nearest_airport_med}")
        else:
            st.write(f"**Destination Airport:** {trip_planner.nearest_airport_large}")
        
        if trip_planner.outbound_flight_df is not None:
            st.dataframe(trip_planner.outbound_flight_df)
        else:
            st.write(f"**No flights found. Please modify dates or airport.**")
        
        # Sub heading
        if trip_planner.airport_type_out['type'] == 'medium':
            st.subheader(
                f"Return: {trip_planner.destination_city_med} to {trip_planner.origin_city}")
        else:
            st.subheader(
                f"Return: {trip_planner.destination_city_large} to {trip_planner.origin_city}")

        # Flight data
        if trip_planner.airport_type_out['type'] == 'medium':
            st.write(f"**Starting Airport:** {trip_planner.nearest_airport_med}")
        else:
            st.write(f"**Starting Airport:** {trip_planner.nearest_airport_large}")
        st.write(f"**Destination Airport:** {trip_planner.selected_airport}")
        if trip_planner.return_flight_df is not None:
            st.dataframe(trip_planner.return_flight_df)
        else:
            st.write(f"**No flights found. Please modify dates or airport.")

    with col2:
        if trip_planner.place_image:
            if st.session_state.TESTING:
                image = s3_functions.grab_image_s3(trip_planner.place_image)
                st.image(image, use_column_width=True)
            else:
                st.image(trip_planner.place_image, use_column_width=True)
            #st.image(filename)
        # View on map
        if st.session_state.TESTING:
            image = s3_functions.grab_image_s3(
                f'{constants.PLACE_IMAGE_PATH}/{constants.RHODES_SATELLITE_NAME}'
            )
            st.image(image, use_column_width=True)
            print('Grabbing image from path')
        else:
            st.pydeck_chart(pdk.Deck(
                    map_style='mapbox://styles/mapbox/satellite-streets-v11',
                    initial_view_state=pdk.ViewState(
                        latitude=trip_planner.given_lat,
                        longitude=trip_planner.given_lon,
                        zoom=10
                    ),
            ))
            
        # Hotels
        st.title("Hotels")
        st.write(f"Popular hotels in {trip_planner.place_country['Place']}")
        st.dataframe(trip_planner.hotels)
