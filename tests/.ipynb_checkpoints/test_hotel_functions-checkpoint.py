import pytest
import pandas as pd
from src import (
    hotel_functions,
    s3_functions
)
from pandas.testing import assert_frame_equal
import requests_mock

# Define some sample data for testing
sample_data_s3 = {
    "hotel1": {"price": 100, "location": "London"},
    "hotel2": {"price": 150, "location": "Paris"},
}

# Define sample arguments
arrival_date = "2023-10-01"
departure_date = "2023-10-10"
room_qty = 1
guest_qty = 2
children_qty = 0
currency = "USD"
latitude = 51.5074
longitude = -0.1278

# Mock for requests
with requests_mock.Mocker() as m:
    m.get('https://apidojo-booking-v1.p.rapidapi.com/properties/list-by-map', json={"some": "data"})

# Mock for create_hotel_dataframe
def mock_create_hotel_dataframe(response_json):
    return {"transformed": "data"}

# Mock constants and S3 data grabbing
@pytest.fixture
def mock_dependencies(mocker):
    mocker.patch('src.constants.HOTEL_DATA_PATH', 'some_path')
    mocker.patch(
        'src.s3_functions.grab_data_s3', 
        return_value=pd.DataFrame([{'some_column': 'some_value'}])) 

def test_create_hotel_dataframe(mock_dependencies):
    data = {
        'result': [
            {
                'hotel_name': 'Hotel1',
                'accommodation_type_name': 'Type1',
                'city_name_en': 'Area1',
                'review_score': '5',
                'review_score_word': 'Excellent',
                'min_total_price': '100',
                'url': 'some_url',
                'currency_code': 'USD'
            }
        ]
    }
    expected_df = pd.DataFrame([{
        'Name': 'Hotel1',
        'Type': 'Type1',
        'Area': 'Area1',
        'Score': '5: Excellent',
        'Price': 'USD 100',
        'url': 'some_url'
    }])
    actual_df = hotel_functions.create_hotel_dataframe(data)
    assert_frame_equal(expected_df, actual_df)

def test_fetch_hotels_by_location_with_testing_true(mocker):
    # Mock constants and s3_functions
    mocker.patch("src.constants.TESTING", True)
    mocker.patch("src.constants.HOTEL_DATA_PATH", "some/s3/path")
    mocker.patch("src.s3_functions.grab_data_s3", 
                 return_value=sample_data_s3)

    result = hotel_functions.fetch_hotels_by_location(
        arrival_date,
        departure_date,
        room_qty,
        guest_qty,
        children_qty,
        currency,
        latitude,
        longitude
    )

    assert result == sample_data_s3
    
def test_fetch_hotels_by_location_api_call(mocker):
    mocker.patch("src.constants.TESTING", False)
    mocker.patch("src.hotel_functions.create_hotel_dataframe", 
                 side_effect=mock_create_hotel_dataframe)  

    # Define sample arguments
    arrival_date = "2023-10-01"
    departure_date = "2023-10-10"
    room_qty = 1
    guest_qty = 2
    children_qty = 0
    currency = "USD"
    latitude = 51.5074
    longitude = -0.1278
    
    result = hotel_functions.fetch_hotels_by_location(
        arrival_date,
        departure_date,
        room_qty,
        guest_qty,
        children_qty,
        currency,
        latitude,
        longitude
    )

    assert result == {"transformed": "data"}