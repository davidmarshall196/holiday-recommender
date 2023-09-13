from typing import Optional
import boto3
import pandas as pd
from botocore.exceptions import (
    NoCredentialsError, 
    PartialCredentialsError, 
    ClientError
)
from PIL import Image
import io
import os

# import constants
from src import constants

def grab_data_s3(
    file_path: str, 
    bucket: str = constants.S3_BUCKET,
    profile_name: Optional[str] = 'david-gmail-acc'
) -> pd.DataFrame:
    """
    Retrieve data from an S3 bucket and return a DataFrame.

    :param bucket: Name of the S3 bucket.
    :type bucket: str
    :param file_path: Path to the file within the S3 bucket.
    :type file_path: str
    :param profile_name: AWS profile name (optional).
    :type profile_name: Optional[str]
    :return: DataFrame containing the data from the S3 file.
    :rtype: pd.DataFrame
    :raises NoCredentialsError: If credentials are missing.
    :raises PartialCredentialsError: If credentials are incomplete.
    """
    try:
        if constants.LOCAL_MODE:
            session = boto3.Session(profile_name='david-gmail-acc')
        else:
            session = boto3.Session(
                aws_access_key_id=os.getenv('AWS_ACCESS_KEY_ID'),
                aws_secret_access_key=os.getenv('AWS_SECRET_ACCESS_KEY'),
                region_name='eu-west-2'
            )
        s3 = session.client('s3')  # Create a connection to S3
        obj = s3.get_object(Bucket=bucket, Key=file_path)  # Get object and file from bucket
        airports = pd.read_csv(obj['Body'])
        return airports
    except NoCredentialsError:
        raise NoCredentialsError("Credentials not available. Make sure the profile name is correct and the credentials are set up properly.")
    except PartialCredentialsError:
        raise PartialCredentialsError("Incomplete credentials. Please check your AWS configuration.")
    except Exception as e:
        raise Exception(f"An unexpected error occurred: {str(e)}")

def grab_image_s3( 
    file_path: str, 
    bucket: str = constants.S3_BUCKET,
    profile_name: Optional[str] = 'david-gmail-acc'
) -> Image.Image:
    """
    Retrieve a JPEG image from an S3 bucket and return a PIL Image object.

    :param bucket: Name of the S3 bucket.
    :type bucket: str
    :param file_path: Path to the JPEG file within the S3 bucket.
    :type file_path: str
    :param profile_name: AWS profile name (optional).
    :type profile_name: Optional[str]
    :return: PIL Image object containing the JPEG image.
    :rtype: Image.Image
    :raises NoCredentialsError: If credentials are missing.
    :raises PartialCredentialsError: If credentials are incomplete.
    :raises Exception: If the file is not a JPEG or another unexpected error occurs.
    """
    try:
        if constants.LOCAL_MODE:
            session = boto3.Session(profile_name='david-gmail-acc')
        else:
            session = boto3.Session(
                aws_access_key_id=os.getenv('AWS_ACCESS_KEY_ID'),
                aws_secret_access_key=os.getenv('AWS_SECRET_ACCESS_KEY'),
                region_name='eu-west-2'
            )
        s3 = session.client('s3')  # Create a connection to S3
        obj = s3.get_object(Bucket=bucket, Key=file_path)  # Get object and file from bucket
        image_stream = io.BytesIO(obj['Body'].read())
        image = Image.open(image_stream)

        if image.format != 'JPEG':
            raise Exception("The provided file is not a JPEG image.")

        return image
    except NoCredentialsError:
        raise NoCredentialsError("Credentials not available. Make sure the profile name is correct and the credentials are set up properly.")
    except PartialCredentialsError:
        raise PartialCredentialsError("Incomplete credentials. Please check your AWS configuration.")
    except Exception as e:
        raise Exception(f"An unexpected error occurred: {str(e)}")

def save_image_s3(
    image: Image.Image, 
    file_path: str, 
    bucket: str = constants.S3_BUCKET,
    profile_name: Optional[str] = 'david-gmail-acc'
) -> None:
    """
    Save a JPEG image to an S3 bucket.

    :param image: PIL Image object to be saved.
    :type image: Image.Image
    :param bucket: Name of the S3 bucket.
    :type bucket: str
    :param file_path: Path to save the JPEG file within the S3 bucket.
    :type file_path: str
    :param profile_name: AWS profile name (optional).
    :type profile_name: Optional[str]
    :raises NoCredentialsError: If credentials are missing.
    :raises PartialCredentialsError: If credentials are incomplete.
    :raises Exception: If the image is not in JPEG format or another unexpected error occurs.
    """
    try:
        # Check if the image is in JPEG format
        if image.format != 'JPEG':
            raise Exception("The provided image is not in JPEG format.")

        # Convert the image to a byte stream
        image_stream = io.BytesIO()
        image.save(image_stream, format='JPEG')

        # Create a boto3 session and client for S3
        if constants.LOCAL_MODE:
            session = boto3.Session(profile_name='david-gmail-acc')
        else:
            session = boto3.Session(
                aws_access_key_id=os.getenv('AWS_ACCESS_KEY_ID'),
                aws_secret_access_key=os.getenv('AWS_SECRET_ACCESS_KEY'),
                region_name='eu-west-2'
            )
        s3 = session.client('s3')  # Create a connection to S3

        # Upload the image to the specified bucket and file path
        s3.put_object(
            Bucket=bucket, 
            Key=file_path, 
            Body=image_stream.getvalue(), 
            ContentType='image/jpeg'
        )
    except NoCredentialsError:
        raise NoCredentialsError("Credentials not available. Make sure the profile name is correct and the credentials are set up properly.")
    except PartialCredentialsError:
        raise PartialCredentialsError("Incomplete credentials. Please check your AWS configuration.")
    except Exception as e:
        raise Exception(f"An unexpected error occurred: {str(e)}")

def image_exists_in_s3(
    file_path: str, 
    bucket: str = constants.S3_BUCKET,
    profile_name: Optional[str] = 'david-gmail-acc'
) -> bool:
    """
    Check if an image exists in an S3 bucket.

    :param bucket: Name of the S3 bucket.
    :type bucket: str
    :param file_path: Path to the file within the S3 bucket.
    :type file_path: str
    :param profile_name: AWS profile name (optional).
    :type profile_name: Optional[str]
    :return: True if the image exists, False otherwise.
    :rtype: bool
    :raises NoCredentialsError: If credentials are missing.
    :raises PartialCredentialsError: If credentials are incomplete.
    """
    try:
        if constants.LOCAL_MODE:
            session = boto3.Session(profile_name='david-gmail-acc')
        else:
            session = boto3.Session(
                aws_access_key_id=os.getenv('AWS_ACCESS_KEY_ID'),
                aws_secret_access_key=os.getenv('AWS_SECRET_ACCESS_KEY'),
                region_name='eu-west-2'
            )
        s3 = session.client('s3')
        s3.head_object(Bucket=bucket, Key=file_path)
        return True
    except ClientError as e:
        if e.response['Error']['Code'] == '404':
            return False
        else:
            raise e
    except NoCredentialsError:
        raise NoCredentialsError("Credentials not available. Make sure the profile name is correct and the credentials are set up properly.")
    except PartialCredentialsError:
        raise PartialCredentialsError("Incomplete credentials. Please check your AWS configuration.")
