import pytest
import pandas as pd
from src import (
    hotel_functions,
    s3_functions
)
from pandas.testing import assert_frame_equal

# Mock constants and S3 data grabbing
@pytest.fixture
def mock_dependencies(mocker):
    mocker.patch('your_module.constants.HOTEL_DATA_PATH', 'some_path')
    mocker.patch(
        'your_module.grab_data_s3', 
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
    actual_df = create_hotel_dataframe(data)
    assert_frame_equal(expected_df, actual_df)

