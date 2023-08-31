
from typing import Dict, Optional
import re
import openai
from geopy.geocoders import Nominatim

from src import constants
    

# Define the extraction function
def extract_place_country(text: str) -> Dict[str, str]:
    """
    Extract place and country from the text formatted as "Place: [Place], [Country]".
    
    Parameters:
    - text (str): Text containing the place and country information.
    
    Returns:
    - dict: A dictionary containing the extracted place and country.
    """
    
    pattern = r"([\w\s]+), ([\w\s]+?)(?=\s*[\.\n])"
    match = re.search(pattern, text)
    country = text.split('.')[0].strip().split(' ')[-1].replace('.','')
    place = text.split('.')[0].strip().split(' ')[-2].replace(',','')

    
    if match:
        place, country = match.groups()
        country = country.replace(' for your holiday.','')
        country = country.replace('\n','').replace('\n','')
        place = place.replace('I suggest visiting ','')
        return {
            "Place": place,
            "Country": country
        }
    else:
        return {
            "Place": place,
            "Country": country
        }
        print("Check match correct.")

# Define the combined function
def fetch_and_extract_destination(
        weather: str, 
        activity: str, 
        food: str,
        price: str
) -> Dict[str, str]:
    """
    Fetch a holiday recommendation from OpenAI and extract the suggested place and country.
    
    Parameters:
    - weather (str): Preferred weather.
    - activity (str): Preferred activity.
    - food (str): Preferred type of food.
    - price (str): Budget preference.
    
    Returns:
    - dict: A dictionary containing the recommended place and country.
    """
    if constants.TESTING:
        text_content = constants.TESTING_TEXT_CONTENT
        
        place_country = {'Place': 'Rhodes', 'Country': 'Greece'}
    
    else:
        
        # Define the system and user messages
        system_msg = 'You are a helpful travel agent.'
        user_msg = (f"""
                Suggest to me a place for me to go on holiday, based on the following details:\n
                    1) Weather: {weather}\n
                    2) Activity: {activity}\n
                    3) Food: {food}\n
                    4) Price: {price}\n
                The first sentence of your response should be the place in the format 'Place, Country' and nothing else. You should then provide a brief description of why you have chosen this place. Provide a specific place rather than a region or country.
                  """)
    
        # Fetch the recommendation from OpenAI
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "system", "content": system_msg},
                  {"role": "user", "content": user_msg}],
            max_tokens=500)

        # Extract the response content
        text_content = response["choices"][0]["message"]["content"]
    
        # Grab place and country
        place_country = extract_place_country(text_content)
    
        # Extract place and country from the response content
    return text_content, place_country

def get_lat_lon(place: str, country: str) -> Optional[Dict[str, float]]:
    """
    Fetch the latitude and longitude of a given place and country using Nominatim.
    
    Parameters:
    - place (str): The name of the place.
    - country (str): The name of the country.
    
    Returns:
    - dict or None: A dictionary containing the latitude and longitude if found, otherwise None.
    """
    geolocator = Nominatim(user_agent="geoapiExercises")
    location = geolocator.geocode(f"{place}, {country}")
    
    if location:
        return {
            "Latitude": location.latitude,
            "Longitude": location.longitude
        }
    return None


