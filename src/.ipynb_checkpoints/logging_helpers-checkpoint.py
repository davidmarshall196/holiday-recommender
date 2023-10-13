import streamlit as st
import boto3
import json
from datetime import datetime
from src import constants

if constants.LOCAL_MODE:
    session = boto3.Session(profile_name='david-gmail-acc')
else:
    session = boto3.Session(
        aws_access_key_id=os.getenv('AWS_ACCESS_KEY_ID'),
        aws_secret_access_key=os.getenv('AWS_SECRET_ACCESS_KEY'),
        region_name='eu-west-2'
    )

# Configure the S3 client
s3 = session.client('s3')

def log_event(event_type: str, event_data: dict) -> None:
    """
    Logs a custom event to Amazon S3.

    Parameters:
    - event_type (str): The type of event being logged.
    - event_data (dict): Additional data associated with the event.

    Returns:
    - None
    """
    # Create a timestamped event
    event = {
        'timestamp': datetime.utcnow().isoformat(),
        'type': event_type,
        'data': event_data
    }

    # Convert the event to a JSON string
    event_json = json.dumps(event)

    # Create a unique object key for this event
    object_key = f'events/{datetime.utcnow().strftime("%Y-%m-%d")}/{event["timestamp"]}.json'

    # Upload the event to S3
    s3.put_object(
        Bucket=constants.LOGGING_BUCKET,
        Key=object_key,
        Body=event_json
    )
