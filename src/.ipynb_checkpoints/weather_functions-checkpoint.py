from typing import Union, Dict
import requests
from .constants import (
    FLIGHTS_SAMPLE_LOC,
    PLACE_IMAGE_PATH,
    HOTEL_DATA_PATH,
    AIRPORTS_DATA_PATH,
    AIRLINES_DATA_PATH,
    S3_BUCKET,
    RHODES_SATELLITE_NAME,
    RHODES_IMAGE,
    BOX_CONSTANT,
    SLOW_TEXT,
    TESTING,
    DROP_CARRIERS,
    TESTING_TEXT_CONTENT
)

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
    return icons.get(description, ":cloud:")  
        
        
