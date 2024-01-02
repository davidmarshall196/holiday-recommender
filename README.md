# ChatGPT Powered Holiday Destination Recommender

## Introduction
This Streamlit application uses GPT-4 (ChatGPT) by OpenAI to recommend holiday destinations based on user preferences. The app also integrates with various data sources like flight information, airline data, and weather information to provide a comprehensive holiday planning experience.

## Features

- Uses GPT-4 to recommend holiday destinations based on weather, activities, and food preferences
- Flights and airlines data sourced from Amadeus
- Hotel information from Booking.com
- Images and maps from Google Places API
- Dynamic weather information from OpenWeather Map
- User-friendly date selection for departure and return
- Price filter
- Customisable number of adults, children, and rooms

## Deployment

The application is deployed at https://holiday-recommender.streamlit.app/

### Details
- Deployed via the [Streamlit Community Cloud](https://docs.streamlit.io/streamlit-community-cloud/deploy-your-app)
- Enforced minimum 70% coverage of unit tests
- Enforced Flake8 linting check

## Usage

1. **Sidebar Preferences**: Choose your preferred weather, activity, and food type.
2. **Holiday Details**: Choose the number of adults, children, rooms, and the currency you'd like to use.
3. **Select Airport**: Choose your starting airport.
4. **Go Button**: Once all preferences are set, click the "Go" button for destination suggestions.
