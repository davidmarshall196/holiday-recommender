import re
from typing import Optional
import requests
from PIL import Image
import io

# Import package
from src import constants, config, s3_functions


def get_photo_of_place(
    place_name: str, api_key: str, max_width: int = 400
) -> Optional[str]:
    """
    Fetch and save a photo of a specified place using Google Places API.

    Parameters:
    - place_name (str): Name of the place for which photo is required.
    - api_key (str): Google Places API key.
    - max_width (int, optional): Desired width of the photo. Default is 400 pixels.

    Returns:
    - str: Filename of the saved photo if successful, otherwise None.

    Example:
    >>> get_photo_of_place("Eiffel Tower", "YOUR_API_KEY")
    'Eiffel_Tower.jpg'
    """
    # Create a valid filename by replacing non-alphanumeric characters with underscores
    filename = re.sub(r"\W+", "_", place_name) + ".jpg"
    filepath = f"{constants.PLACE_IMAGE_PATH}/{filename}"

    if constants.TESTING:
        return f"{constants.PLACE_IMAGE_PATH}/{constants.RHODES_IMAGE}"

    # Check if the file already exists
    if s3_functions.image_exists_in_s3(filepath):
        print(f"Photo for {place_name} already exists as {filepath}")
        image = s3_functions.grab_image_s3(filepath)
        return image

    # Step 1: Use the Places API to search for the place and get its photo_reference
    places_endpoint = (
        "https://maps.googleapis.com/maps/api/place/findplacefromtext/json"
    )
    params = {
        "input": place_name,
        "inputtype": "textquery",
        "fields": "photos",
        "key": config.GOOGLE_API_KEY,
    }

    response = requests.get(places_endpoint, params=params)
    result = response.json()

    # Ensure we have a result and extract the photo_reference
    if not result.get("candidates") or "photos" not in result["candidates"][0]:
        print(f"No photo found for {place_name}")
        return None

    photo_reference = result["candidates"][0]["photos"][0]["photo_reference"]

    # Step 2: Use the photo_reference to get the actual photo
    photo_endpoint = "https://maps.googleapis.com/maps/api/place/photo"
    photo_params = {
        "maxwidth": str(max_width),
        "photoreference": photo_reference,
        "key": config.GOOGLE_API_KEY,
    }

    response = requests.get(photo_endpoint, params=photo_params)
    if response.status_code == 200:
        image = Image.open(io.BytesIO(response.content))
        image.format = "JPEG"
        s3_functions.save_image_s3(image, filepath)
        print(f"Photo saved as {filepath}")
    else:
        print("Error fetching the photo")
        return None

    return image
