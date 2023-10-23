import pytest
from src import flight_functions, s3_functions, constants
import pandas as pd
import amadeus


def test_format_duration():
    # Test various input formats
    assert flight_functions.format_duration("PT3H40M") == "3hr40m"
    assert flight_functions.format_duration("PT3H") == "3hr"
    assert flight_functions.format_duration("PT40M") == "40m"
    assert flight_functions.format_duration("PT0H40M") == "40m"
    assert flight_functions.format_duration("PT3H0M") == "3hr"
    assert flight_functions.format_duration("PT0H0M") == "0m"
    assert flight_functions.format_duration("PT1H1M") == "1hr1m"
    assert flight_functions.format_duration("PT") == "0m"


def test_haversine_distance():
    # Test some known distances
    assert (
        flight_functions.haversine_distance(52.5200, 13.4050, 48.8566, 2.3522)
        == pytest.approx(878, 1)
    )  # Berlin to Paris
    assert (
        flight_functions.haversine_distance(34.0522, -118.2437, 36.7783, -119.4179)
        == pytest.approx(329, 1)
    )  # LA to Fresno
    assert (
        flight_functions.haversine_distance(40.7128, -74.0060, 34.0522, -118.2437)
        == pytest.approx(3940, 1)
    )  # NYC to LA
    assert (
        flight_functions.haversine_distance(37.7749, -122.4194, 34.0522, -118.2437)
        == pytest.approx(559, 1)
    )  # SF to LA

    # Test zero distance (same point)
    assert (
        flight_functions.haversine_distance(52.5200, 13.4050, 52.5200, 13.4050)
        == 0.0
    )

    # Test negative coordinates
    assert (
        flight_functions.haversine_distance(-34.6037, -58.3816, -33.8688, 151.2093)
        == pytest.approx(11520, 20)
    )  # Buenos Aires to Sydney

    # Test large distance (almost antipodal points)
    assert (
        flight_functions.haversine_distance(37.7749, -122.4194, -37.8136, 144.9631)
        == pytest.approx(12658, 20)
    )  # SF to Melbourne


def test_nearest_location():
    locations = [
        ("Berlin", 52.5200, 13.4050),
        ("Paris", 48.8566, 2.3522),
        ("LA", 34.0522, -118.2437),
        ("NYC", 40.7128, -74.0060),
        ("SF", 37.7749, -122.4194),
    ]

    # Test from Berlin
    assert flight_functions.nearest_location(52.5200, 13.4050, locations) == (
        "Berlin",
        52.5200,
        13.4050,
    )

    # Test from Paris
    assert flight_functions.nearest_location(48.8566, 2.3522, locations) == (
        "Paris",
        48.8566,
        2.3522,
    )

    # Test from somewhere in the Atlantic Ocean
    assert flight_functions.nearest_location(40.0, -40.0, locations) == (
        "NYC",
        40.7128,
        -74.0060,
    )

    # Test from somewhere in the Pacific Ocean
    assert flight_functions.nearest_location(37.0, -130.0, locations) == (
        "SF",
        37.7749,
        -122.4194,
    )

    # Test with empty locations list
    with pytest.raises(ValueError):
        flight_functions.nearest_location(52.5200, 13.4050, [])


def test_find_nearest_airport():
    # Define an airport row
    airport_row = {
        "name": "Berlin Tegel Airport",
        "latitude_deg": 52.559722,
        "longitude_deg": 13.287778,
    }

    assert flight_functions.find_nearest_airport(
        airport_row, 52.5200, 13.4050
    ) == pytest.approx(9.1, 0.1)

    assert flight_functions.find_nearest_airport(
        airport_row, 48.8566, 2.3522
    ) == pytest.approx(1050, 1)

    assert flight_functions.find_nearest_airport(
        airport_row, 40.7128, -74.0060
    ) == pytest.approx(6370, 10)


def test_grab_airport_code():
    # Create a DataFrame with airport data
    airport_data = pd.DataFrame(
        {
            "name": [
                "John F. Kennedy International Airport",
                "Los Angeles International Airport",
            ],
            "iata_code": ["JFK", "LAX"],
        }
    )
    # Test valid airport names
    assert (
        flight_functions.grab_airport_code(
            airport_data, "John F. Kennedy International Airport"
        ) == "JFK"
    )
    assert (
        flight_functions.grab_airport_code(
            airport_data, "Los Angeles International Airport"
        ) == "LAX"
    )
    # Test an invalid airport name
    assert flight_functions.grab_airport_code(airport_data, "Invalid Airport") is None

    # Test DataFrame without required columns
    invalid_data = pd.DataFrame(
        {
            "airport_name": [
                "John F. Kennedy International Airport",
                "Los Angeles International Airport",
            ],
            "code": ["JFK", "LAX"],
        }
    )
    with pytest.raises(ValueError) as exc_info:
        flight_functions.grab_airport_code(
            invalid_data, "John F. Kennedy International Airport"
        )
    assert (
        str(
            exc_info.value
        ) == "The provided DF must contain 'name' and 'iata_code' columns."
    )
    # Test empty DataFrame
    empty_data = pd.DataFrame()
    with pytest.raises(ValueError) as exc_info:
        flight_functions.grab_airport_code(
            empty_data, "John F. Kennedy International Airport"
        )
    assert (
        str(exc_info.value)
        == "The provided DF must contain 'name' and 'iata_code' columns."
    )


def test_grab_city():
    # Create a DataFrame with airport data
    airport_data = pd.DataFrame(
        {"iata_code": ["JFK", "LAX"], "municipality": ["New York", "Los Angeles"]}
    )

    # Test valid airport codes
    assert flight_functions.grab_city(airport_data, "JFK") == "New York"
    assert flight_functions.grab_city(airport_data, "LAX") == "Los Angeles"

    # Test an invalid airport code
    assert flight_functions.grab_city(airport_data, "INVALID") is None

    # Test DataFrame without required columns
    invalid_data = pd.DataFrame(
        {"airport_code": ["JFK", "LAX"], "city": ["New York", "Los Angeles"]}
    )
    with pytest.raises(ValueError) as exc_info:
        flight_functions.grab_city(invalid_data, "JFK")
    assert (
        str(exc_info.value)
        == "The provided DF must contain 'name' and 'iata_code' columns."
    )

    # Test empty DataFrame
    empty_data = pd.DataFrame()
    with pytest.raises(ValueError) as exc_info:
        flight_functions.grab_city(empty_data, "JFK")
    assert (
        str(exc_info.value)
        == "The provided DF must contain 'name' and 'iata_code' columns."
    )


def test_parse_duration():
    # Test duration strings with both hours and minutes
    assert flight_functions.parse_duration("5hr 30m") == 330
    assert flight_functions.parse_duration("2hr 15m") == 135

    # Test duration strings with only hours
    assert flight_functions.parse_duration("5hr") == 300
    assert flight_functions.parse_duration("2hr") == 120

    # Test duration strings with only minutes
    assert flight_functions.parse_duration("30m") == 30
    assert flight_functions.parse_duration("15m") == 15

    # Test with leading/trailing whitespace
    assert flight_functions.parse_duration(" 5hr 30m ") == 330
    assert flight_functions.parse_duration(" 2hr ") == 120
    assert flight_functions.parse_duration(" 30m ") == 30

    # Test with different formatting
    assert flight_functions.parse_duration("5hr30m") == 330
    assert flight_functions.parse_duration("2hr15m") == 135


def test_format_flight_row():
    # Create a DataFrame with some example flight data
    flight_data = pd.DataFrame(
        {
            "Departure Date": ["01/10/2023 08:00", "01/10/2023 12:00"],
            "Arrival Date": ["01/10/2023 10:00", "01/10/2023 14:00"],
            "Airline": ["Airline A", "Airline B"],
            "Duration": ["2hr", "2hr"],
            "Departure IATA Code": ["JFK", "LAX"],
            "Arrival IATA Code": ["LAX", "SFO"],
            "Price Currency": ["USD", "USD"],
            "Base Price": ["200", "200"],
        }
    )

    # Call the function with the flight data
    formatted_row = flight_functions.format_flight_row(flight_data)

    # Check the formatted flight row
    assert formatted_row == {
        "Date": "Sun, 01 Oct",
        "Carriers": "Airline A, Airline B",
        "Duration": "4 hrs 0 mins",
        "Route": "JFK–SFO",
        "Stops": "LAX",
        "Price": "USD 200",
    }


# Mock format_flight_row function
def mock_format_flight_row(group):
    return {
        "Date": "Mock Date",
        "Carriers": "Mock Carriers",
        "Duration": "Mock Duration",
        "Route": "Mock Route",
        "Stops": "Mock Stops",
        "Price": "Mock Price",
    }


def test_format_flights(mocker):
    # Mocking the format_flight_row function
    mocker.patch(
        "src.flight_functions.format_flight_row", side_effect=mock_format_flight_row
    )

    # Create a DataFrame with some example flight data
    flight_data = pd.DataFrame(
        {
            "ID": [1, 1, 2, 2],
            "Airline": ["Airline A", "Airline B", "Airline A", "Airline B"],
            "Carrier Code": ["AA", "BB", "AA", "BB"],
        }
    )

    # Call the format_flights function with the flight data
    formatted_flights = flight_functions.format_flights(flight_data)

    # Check the formatted flights DataFrame
    expected_df = pd.DataFrame(
        [
            {
                "Date": "Mock Date",
                "Duration": "Mock Duration",
                "Route": "Mock Route",
                "Stops": "Mock Stops",
                "Price": "Mock Price",
            }
        ]
    )
    expected_df.reset_index(drop=True, inplace=True)
    print(formatted_flights)
    print(expected_df)
    pd.testing.assert_frame_equal(formatted_flights, expected_df)


# Mock data
mock_airlines_df = pd.DataFrame(
    {"Carrier Code": ["AA"], "Airline": ["American Airlines"]}
)

mock_amadeus_response = {"data": []}


def mock_amadeus_to_dataframe(response, airlines):
    # Mock dataframe conversion
    return pd.DataFrame({"ID": [1], "Airline": ["Mock Airline"]})


def mock_format_flights(data, drop_carriers=None):
    # Mock flight formatting
    return pd.DataFrame({"Details": ["Mock Flight"]})


def mock_grab_data_s3(path):
    # Mock data fetching from S3
    return pd.DataFrame({"Details": ["Mock S3 Data"]})


def test_get_flight_offers(mocker):
    # Mock the Client class, amadeus_to_dataframe, format_flights, and grab_data_s3
    mocker.patch.object(amadeus, "Client", autospec=True)
    mocker.patch.object(
        flight_functions, "amadeus_to_dataframe", side_effect=mock_amadeus_to_dataframe
    )
    mocker.patch.object(
        flight_functions, "format_flights", side_effect=mock_format_flights
    )
    mocker.patch.object(s3_functions, "grab_data_s3", side_effect=mock_grab_data_s3)

    # Set TESTING constant to True for this test
    mocker.patch.object(constants, "TESTING", True)

    # Call the function with mock data
    result, airport_type = flight_functions.get_flight_offers(
        "MED", "LAR", "MED", "LAR", "2023-10-10", mock_airlines_df, "2"
    )

    # Create the expected DataFrames
    expected_result = pd.DataFrame({"Details": ["Mock Flight"]})
    expected_airport_type = {"type": "medium"}

    # Check the result
    pd.testing.assert_frame_equal(result, expected_result)
    assert airport_type == expected_airport_type
