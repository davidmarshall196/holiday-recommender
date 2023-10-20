import pytest
import requests
from src import weather_functions, constants


def test_get_weather(mocker):
    # Mock requests.get method
    mocked_get = mocker.patch.object(requests, "get")

    # Mock successful API response
    mocked_response = mocker.Mock()
    mocked_response.raise_for_status.return_value = None
    mocked_response.json.return_value = {
        "cod": 200,
        "main": {"temp": 27.5, "feels_like": 28.3, "pressure": 1010, "humidity": 55},
        "weather": [{"description": "clear sky"}],
        "wind": {"speed": 2.89},
    }
    mocked_get.return_value = mocked_response

    # Test a successful API response
    weather_dict = weather_functions.get_weather(51.5074, -0.1278, "your_api_key_here")
    assert weather_dict == {
        "Temperature": 27.5,
        "Feels Like": 28.3,
        "Pressure": 1010,
        "Humidity": 55,
        "Wind Speed": 2.89,
        "Weather Description": "clear sky",
    }

    # Mock 404 API response
    mocked_response.json.return_value = {"cod": "404", "message": "city not found"}
    with pytest.raises(ValueError, match="City not found."):
        weather_functions.get_weather(51.5074, -0.1278, "your_api_key_here")

    # Mock unexpected API response
    mocked_response.json.return_value = {
        "cod": "500",
        "message": "internal server error",
    }
    with pytest.raises(
        ValueError, match="Unexpected response from API: internal server error"
    ):
        weather_functions.get_weather(51.5074, -0.1278, "your_api_key_here")

    # Mock requests.RequestException
    mocked_get.side_effect = requests.RequestException("An error occurred.")
    with pytest.raises(requests.RequestException, match="An error occurred."):
        weather_functions.get_weather(51.5074, -0.1278, "your_api_key_here")

    # Test the TESTING constant branch
    constants.TESTING = True
    weather_dict = weather_functions.get_weather(51.5074, -0.1278, "your_api_key_here")
    assert weather_dict == {
        "Temperature": 27.49,
        "Feels Like": 28.29,
        "Pressure": 1010,
        "Humidity": 55,
        "Wind Speed": 2.89,
        "Weather Description": "clear sky",
    }
    constants.TESTING = False


def test_weather_icon():
    # Test each icon mapping
    assert weather_functions.weather_icon("clear sky") == ":sunny:"
    assert weather_functions.weather_icon("few clouds") == ":white_sun_small_cloud:"
    assert weather_functions.weather_icon("scattered clouds") == ":white_sun_cloud:"
    assert weather_functions.weather_icon("broken clouds") == ":cloud:"
    assert weather_functions.weather_icon("shower rain") == ":cloud_with_rain:"
    assert weather_functions.weather_icon("rain") == ":cloud_with_rain:"
    assert weather_functions.weather_icon("thunderstorm") == ":thunder_cloud_and_rain:"
    assert weather_functions.weather_icon("snow") == ":snowflake:"
    assert weather_functions.weather_icon("mist") == ":foggy:"
    assert weather_functions.weather_icon("overcast clouds") == ":cloud:"

    # Test default icon
    assert weather_functions.weather_icon("unknown description") == ":cloud:"
    assert weather_functions.weather_icon("") == ":cloud:"
