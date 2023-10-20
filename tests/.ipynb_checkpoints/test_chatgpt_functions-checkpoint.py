import pytest
from src.chatgpt_functions import (
    extract_place_country,
    fetch_and_extract_destination,
    get_lat_lon,
)
from geopy.geocoders import Nominatim


@pytest.mark.parametrize(
    "input_text, expected_output",
    [
        (
            "London, England. I suggest visiting London, England for your holiday.",
            {"Place": "London", "Country": "England"},
        ),
        (
            "New York, USA. I suggest visiting New York, USA for your holiday.",
            {"Place": "New York", "Country": "USA"},
        ),
        ("Tokyo, Japan.", {"Place": "Tokyo", "Country": "Japan"}),
    ],
)
def test_extract_place_country(input_text, expected_output):
    result = extract_place_country(input_text)
    assert result == expected_output


def test_fetch_and_extract_destination_testing_true(mocker):
    mocker.patch("src.constants.TESTING", True)
    mocker.patch("src.constants.TESTING_TEXT_CONTENT", "Some test content")

    result = fetch_and_extract_destination("Sunny", "Beach", "Seafood", "Budget")
    assert result == ("Some test content", {"Place": "Rhodes", "Country": "Greece"})


def test_fetch_and_extract_destination_testing_false(mocker):
    mocker.patch("src.constants.TESTING", False)
    mocker.patch("src.constants.GPT_MODEL", "gpt-3.5-turbo")
    mocker.patch(
        "src.chatgpt_functions.extract_place_country",
        return_value={"Place": "Rhodes", "Country": "Greece"},
    )

    fake_response = {"choices": [{"message": {"content": "Suggested content"}}]}

    mocker.patch("openai.ChatCompletion.create", return_value=fake_response)

    result = fetch_and_extract_destination("Sunny", "Beach", "Seafood", "Budget")
    assert result == ("Suggested content", {"Place": "Rhodes", "Country": "Greece"})


@pytest.mark.parametrize(
    "input_place, input_country, mock_location, expected_output",
    [
        ("London", "UK", None, None),
        (
            "New York",
            "USA",
            type("Location", (), {"latitude": 40.7128, "longitude": -74.0060})(),
            {"Latitude": 40.7128, "Longitude": -74.0060},
        ),
    ],
)
def test_get_lat_lon(
    mocker, input_place, input_country, mock_location, expected_output
):
    mock_geolocator = mocker.patch.object(
        Nominatim, "geocode", return_value=mock_location
    )
    mocker.patch("geopy.geocoders.Nominatim", return_value=mock_geolocator)

    result = get_lat_lon(input_place, input_country)

    assert result == expected_output
    mock_geolocator.assert_called_once_with(f"{input_place}, {input_country}")
