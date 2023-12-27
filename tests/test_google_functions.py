import requests
from src import constants, google_functions, s3_functions
from PIL import Image
import io


def create_test_image_bytes():
    # Create a small white image
    img = Image.new("RGB", (1, 1), color=(255, 255, 255))
    byte_arr = io.BytesIO()
    img.save(byte_arr, format="JPEG")
    return byte_arr.getvalue()


def test_get_photo_of_place(mocker):
    # Mock requests.get method
    mocked_get = mocker.patch.object(requests, "get")

    # Mock s3_functions methods
    mocked_image_exists_in_s3 = mocker.patch.object(
        s3_functions, "image_exists_in_s3", return_value=False
    )
    mocked_grab_image_s3 = mocker.patch.object(s3_functions, "grab_image_s3")
    mocked_save_image_s3 = mocker.patch.object(s3_functions, "save_image_s3")

    # Test the TESTING constant branch
    constants.TESTING = True
    assert (
        google_functions.get_photo_of_place("Eiffel Tower", "fake_api_key")
        == f"{constants.PLACE_IMAGE_PATH}/{constants.RHODES_IMAGE}"
    )
    constants.TESTING = False  # Reset the TESTING constant

    # Mock successful API responses
    mocked_response_places = mocker.Mock()
    mocked_response_places.json.return_value = {
        "candidates": [{"photos": [{"photo_reference": "fake_photo_reference"}]}]
    }
    mocked_get.side_effect = [mocked_response_places]

    mocked_response_photo = mocker.Mock()
    mocked_response_photo.status_code = 200
    mocked_response_photo.content = create_test_image_bytes()
    mocked_get.side_effect = [mocked_response_places, mocked_response_photo]

    # Test a successful photo fetch and save
    assert (
        google_functions.get_photo_of_place("Eiffel Tower", "fake_api_key") is not None
    )
    mocked_save_image_s3.assert_called_once()

    # Reset side effect to test unsuccessful scenarios
    mocked_get.side_effect = None

    # Test unsuccessful photo fetch
    mocked_response_photo.status_code = 404
    mocked_get.side_effect = [mocked_response_places, mocked_response_photo]
    assert google_functions.get_photo_of_place("Eiffel Tower", "fake_api_key") is None

    # Test unsuccessful place fetch
    mocked_response_places.json.return_value = {"candidates": []}
    mocked_get.side_effect = [mocked_response_places]
    assert google_functions.get_photo_of_place("Eiffel Tower", "fake_api_key") is None

    # Test when photo already exists
    mocked_image_exists_in_s3.return_value = True
    assert (
        google_functions.get_photo_of_place("Eiffel Tower", "fake_api_key") is not None
    )
    mocked_grab_image_s3.assert_called_once()
