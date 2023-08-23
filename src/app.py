
import streamlit as st
import api_functions
import openai
import constants
import config
import pydeck as pdk
import pandas as pd
from datetime import date, timedelta
import time
import textwrap

# poetry run streamlit run /Users/david@inawisdom.com/Documents/Training/travel_app/src/app.py

openai.api_key = config.NEW_OPENAI_KEY

# Load flights
airports = api_functions.grab_data_s3(constants.AIRPORTS_DATA_PATH)

# Load airlines
airlines = api_functions.grab_data_s3(constants.AIRLINES_DATA_PATH)    

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
    text, place_country = api_functions.fetch_and_extract_destination(
        weather, activity, food, price
    )
    print(text)
    print(place_country)
    
    # Extract lat, long
    lat_lon = api_functions.get_lat_lon(
          place_country['Place'],
          place_country['Country']
    )
    print(lat_lon)
    
    # Store the lat and lon in session state
    st.session_state.given_lat = lat_lon['Latitude']
    st.session_state.given_lon = lat_lon['Longitude']
    
    # Weather
    weather_data = api_functions.get_weather(
            st.session_state.given_lat, 
            st.session_state.given_lon, 
            config.WEATHER_API_KEY
    )
    print(weather_data)
    
    # Apply the function to the DataFrame
    airports["Distance"] = airports.apply(
        lambda row: api_functions.find_nearest_airport(
            row, 
            st.session_state.given_lat, 
            st.session_state.given_lon, 
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
        airlines,
        adults
    )
    
    # Flight info
    return_flight_df, airport_type_return = api_functions.get_flight_offers(
        destination_code_med, 
        destination_code_large, 
        origin_code_med, 
        origin_code_large,
        return_date,
        airlines,
        adults
    )
    
    # Image
    filename = api_functions.get_photo_of_place(
        f"{place_country['Place']}, {place_country['Country']}", 
        config.GOOGLE_API_KEY
    )
    
    # Hotels
    hotels = api_functions.fetch_hotels_by_location(
        arrival_date = departure_date,
        departure_date = return_date,
        room_qty = rooms,
        guest_qty = adults + children,
        children_qty = children,
        currency = currency,
        latitude = st.session_state.given_lat,
        longitude = st.session_state.given_lon
    )
    
    # Col1
    with col1:
        # Display the recommended place
        st.subheader(
            f"Recommended Destination: {place_country['Place']}, {place_country['Country']}")
        
        # Display text
        if constants.SLOW_TEXT:
            placeholder = st.empty()
            wrapped_text = textwrap.fill(text, width=50)
            displayed_text = ""
    
            for line in wrapped_text.split("\n"):
                for char in line:
                    displayed_text += char
                    placeholder.text(displayed_text)
                    time.sleep(0.02)
                displayed_text += "\n"
        else:
            st.write(text)

        # Display weather
        st.title("Weather Information")
        st.subheader("Current Weather")
    
        st.write(f"**Temperature:** {int(weather_data['Temperature'])}°C")
        st.write(f"**Feels Like:** {int(weather_data['Feels Like'])}°C")
        st.write(f"**Pressure:** {weather_data['Pressure']} hPa")
        st.write(f"**Humidity:** {weather_data['Humidity']}%")
        st.write(f"**Wind Speed:** {weather_data['Wind Speed']} m/s")
    
        # Displaying the weather icon based on the description
        icon = api_functions.weather_icon(
            weather_data['Weather Description'].lower())
        st.markdown(
            f"**Weather:** {weather_data['Weather Description'].capitalize()}")
        
        # Flights
        st.title("Flight Details")
        
        # Sub heading
        if airport_type_out['type'] == 'medium':
            st.subheader(f"Outbound: {origin_city} to {destination_city_med}")
        else:
            st.subheader(f"Outbound: {origin_city} to {destination_city_large}")
        
        # Flight data
        st.write(f"**Starting Airport:** {selected_airport}")
        
        if airport_type_out['type'] == 'medium':
            st.write(f"**Destination Airport:** {nearest_airport_med}")
        else:
            st.write(f"**Destination Airport:** {nearest_airport_large}")
        
        if outbound_flight_df is not None:
            st.dataframe(outbound_flight_df)
        else:
            st.write(f"**No flights found. Please modify dates or airport.**")
        
        # Sub heading
        if airport_type_out['type'] == 'medium':
            st.subheader(
                f"Return: {destination_city_med} to {origin_city}")
        else:
            st.subheader(
                f"Return: {destination_city_large} to {origin_city}")

        # Flight data
        if airport_type_out['type'] == 'medium':
            st.write(f"**Starting Airport:** {nearest_airport_med}")
        else:
            st.write(f"**Starting Airport:** {nearest_airport_large}")
        st.write(f"**Destination Airport:** {selected_airport}")
        if return_flight_df is not None:
            st.dataframe(return_flight_df)
        else:
            st.write(f"**No flights found. Please modify dates or airport.")

    with col2:
        if filename:
            st.image(f's3://{constants.S3_BUCKET}/{filename}')
            #st.image(filename)
        # View on map
        if st.session_state.TESTING:
            st.image(
                f'{constants.PLACE_IMAGE_PATH}/{constants.RHODES_SATELLITE_NAME}',
                     use_column_width=True)
            print('Grabbing image from path')
        else:
            print('Grabbing Map')
            st.pydeck_chart(pdk.Deck(
                map_style='mapbox://styles/mapbox/satellite-streets-v11',
                initial_view_state=pdk.ViewState(
                    latitude=st.session_state.given_lat,
                    longitude=st.session_state.given_lon,
                    zoom=10
                ),
            ))
            
        # Hotels
        st.title("Hotels")
        st.write(f"Popular hotels in {place_country['Place']}")
        st.dataframe(hotels)
        

        
        
        
        