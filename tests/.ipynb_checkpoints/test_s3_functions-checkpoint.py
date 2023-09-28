import pytest
import pandas as pd
import boto3
from botocore.exceptions import (
    NoCredentialsError, PartialCredentialsError, ClientError)
from src.s3_functions import (
    grab_data_s3,
    grab_image_s3,
    save_image_s3,
    image_exists_in_s3
)
from io import StringIO
import io
from PIL import Image

@pytest.mark.parametrize(
    "input_file_path, input_bucket, mock_csv, expected_output",
    [
        ("some/file/path.csv", "some-bucket", "col1,col2\n1,2\n3,4\n", pd.DataFrame({"col1": [1, 3], "col2": [2, 4]})),
    ],
)
def test_grab_data_s3(mocker, input_file_path, input_bucket, mock_csv, expected_output):
    # Mocking boto3 Session
    mock_session = mocker.patch.object(boto3, "Session")
    mock_s3_client = mock_session.return_value.client.return_value
    
    # Mocking get_object to return a mock CSV
    mock_s3_client.get_object.return_value = {'Body': StringIO(mock_csv)}

    # Mocking pandas read_csv
    mock_read_csv = mocker.patch("pandas.read_csv", side_effect=pd.read_csv)

    # Execute the function and get the result
    result = grab_data_s3(input_file_path, input_bucket)

    # Validate the result
    pd.testing.assert_frame_equal(result, expected_output)

    # Assert calls were made as expected
    mock_session.assert_called_once()
    mock_s3_client.get_object.assert_called_once_with(Bucket=input_bucket, Key=input_file_path)
    mock_read_csv.assert_called_once()
    
@pytest.mark.parametrize(
    "input_file_path, input_bucket, mock_image_format, mock_image_stream",
    [
        ("some/image/path.jpg", "some-bucket", "JPEG", io.BytesIO(b"mock_binary_data")),
    ],
)
def test_grab_image_s3(mocker, input_file_path, input_bucket, mock_image_format, mock_image_stream):
    # Mocking boto3 Session
    mock_session = mocker.patch.object(boto3, "Session")
    mock_s3_client = mock_session.return_value.client.return_value

    # Mocking get_object to return mock image stream
    mock_s3_client.get_object.return_value = {'Body': mock_image_stream}

    # Mocking PIL Image.open
    mock_image = mocker.MagicMock(spec=Image.Image)
    mock_image.format = mock_image_format
    mocker.patch("PIL.Image.open", return_value=mock_image)

    # Execute the function and get the result
    result = grab_image_s3(input_file_path, input_bucket)

    # Validate the result (here, we check the image format)
    assert result.format == mock_image_format

    # Assert calls were made as expected
    mock_session.assert_called_once()
    mock_s3_client.get_object.assert_called_once_with(Bucket=input_bucket, Key=input_file_path)
    Image.open.assert_called_once()

@pytest.mark.parametrize(
    "input_image_format, input_file_path, input_bucket, expected_exception",
    [
        ("JPEG", "some/image/path.jpg", "some-bucket", None),
        ("PNG", "some/image/path.jpg", "some-bucket", Exception),
    ],
)
def test_save_image_s3(mocker, input_image_format, input_file_path, input_bucket, expected_exception):
    # Mocking boto3 Session
    mock_session = mocker.patch.object(boto3, "Session")
    mock_s3_client = mock_session.return_value.client.return_value

    # Mocking PIL Image.save
    mocker.patch("PIL.Image.Image.save")

    # Create mock Image object with a specific format
    mock_image = mocker.MagicMock(spec=Image.Image)
    mock_image.format = input_image_format

    if expected_exception:
        with pytest.raises(expected_exception):
            save_image_s3(mock_image, input_file_path, input_bucket)
    else:
        save_image_s3(mock_image, input_file_path, input_bucket)

        # Assert boto3 session and S3 client were initialized
        mock_session.assert_called_once()
        mock_s3_client.put_object.assert_called_once()

        # Validate the parameters passed to put_object
        _, kwargs = mock_s3_client.put_object.call_args
        assert kwargs["Bucket"] == input_bucket
        assert kwargs["Key"] == input_file_path
        assert kwargs["ContentType"] == "image/jpeg"

@pytest.mark.parametrize(
    "exception_code, expected_result",
    [
        (None, True),
        ("404", False),
        ("403", ClientError),
    ],
)
def test_image_exists_in_s3(mocker, exception_code, expected_result):
    # Mock boto3 Session
    mock_session = mocker.patch.object(boto3, "Session")
    mock_s3_client = mock_session.return_value.client.return_value

    # Mock ClientError if applicable
    if exception_code:
        error_response = {'Error': {'Code': exception_code}}
        mock_s3_client.head_object.side_effect = ClientError(error_response, 'head_object')

    # Run the function and check results
    if expected_result == ClientError:
        with pytest.raises(ClientError):
            image_exists_in_s3("some/image/path.jpg", "some-bucket")
    else:
        result = image_exists_in_s3("some/image/path.jpg", "some-bucket")
        assert result == expected_result

    # Assert boto3 session and S3 client were initialized
    mock_session.assert_called_once()


