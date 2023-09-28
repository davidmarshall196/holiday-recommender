import pandas as pd
from typing import Dict, List, Union
import requests

# Import package
from src import (
    s3_functions,
    constants,
    config
)

def create_hotel_dataframe(
    data: Dict[str, Union[List[Dict], None]]
) -> pd.DataFrame:
    """
    Create a DataFrame containing hotel details from a given data dictionary.

    :param data: Dictionary containing the hotel details.
    :type data: Dict[str, Union[List[Dict], None]]
    
    :returns: DataFrame containing the extracted hotel details.
    :rtype: pd.DataFrame

    :raises: None, falls back to reading from a constants.HOTEL_DATA_PATH CSV if DataFrame creation fails.
    """
    
    # Extract main details
    details = []
    for entry in data.get('result', []):
        hotel_detail = {
            'Name': entry.get('hotel_name', None),
            'Type': entry.get('accommodation_type_name', None),
            'Area': entry.get('city_name_en', None),
            'Score': entry.get('review_score', None),
            'review_score_word': entry.get('review_score_word', None),
            'Price': entry.get('min_total_price', None),
            'url': entry.get('url', None),
            'currency_code' : entry.get('currency_code', None),
        }
        details.append(hotel_detail)

    # Create DataFrame
    df = pd.DataFrame(details)
    print(df.columns)
    try:
        df['Score'] = df['Score'].astype(
            str) + ': ' + df[
            'review_score_word'].astype(str) 
        df['Price'] = df['currency_code'] + ' ' + df['Price'].astype(str)
        df = df[['Name', 'Type','Area', 'Score', 'Price', 'url']]
        df['Score'] = df['Score'].replace('nan: ', '')
        return df
    except:
        data = s3_functions.grab_data_s3(constants.HOTEL_DATA_PATH)
        return data

def fetch_hotels_by_location(
    arrival_date: str, 
    departure_date: str, 
    room_qty: int, 
    guest_qty: int, 
    children_qty: int, 
    currency: str, 
    latitude: float, 
    longitude: float
) -> Dict:
    """
    Fetches hotel details using RapidAPI for the given parameters.

    Parameters:
    - arrival_date (str): Arrival date in the format 'YYYY-MM-DD'
    - departure_date (str): Departure date in the format 'YYYY-MM-DD'
    - room_qty (int): Number of rooms required
    - guest_qty (int): Number of guests
    - children_qty (int): Number of children
    - currency (str): Preferred currency code
    - latitude (float): Latitude of the center location
    - longitude (float): Longitude of the center location

    Returns:
    - dict: Response dictionary containing hotel details
    """
    
    if constants.TESTING:
        data = s3_functions.grab_data_s3(constants.HOTEL_DATA_PATH)
        return data
    
    bc = constants.BOX_CONSTANT
    
    # Define a rough bounding box
    bbox = f"{latitude-bc},{latitude+bc},{longitude-bc},{longitude+bc}"

    url = "https://apidojo-booking-v1.p.rapidapi.com/properties/list-by-map"
    headers = {
        "x-rapidapi-host": "apidojo-booking-v1.p.rapidapi.com",
        "x-rapidapi-key": config.RAPID_API_KEY  
    }

    querystring = {
        "arrival_date": arrival_date,
        "departure_date": departure_date,
        "room_qty": str(room_qty),
        "guest_qty": str(guest_qty),
        "children_qty": str(children_qty),
        "price_filter_currencycode": currency,
        "categories_filter": "class::1,class::2,class::3",
        "languagecode": "en-us",
        "travel_purpose": "leisure",
        "bbox": bbox,
        "search_id": "none",
        "order_by": "popularity"
    }

    response = requests.get(url, headers=headers, params=querystring)
    response_json = response.json()
    data = create_hotel_dataframe(response_json)
    return data

