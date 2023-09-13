
import boto3
import os

session = boto3.Session(
    aws_access_key_id=os.getenv('AWS_ACCESS_KEY_ID'),
    aws_secret_access_key=os.getenv('AWS_SECRET_ACCESS_KEY'),
    region_name='eu-west-2'
)

def get_parameter(parameter_name):
    ssm_client = session.client('ssm')
    response = ssm_client.get_parameter(Name=parameter_name, WithDecryption=True)
    return response['Parameter']['Value']

print('Grabbing API Keys')
OPENAI_KEY = get_parameter('OPENAI_KEY')
NEW_OPENAI_KEY = get_parameter('NEW_OPENAI_KEY')
WEATHER_API_KEY = get_parameter('WEATHER_API_KEY')
FLIGHTS_API_KEY = get_parameter('FLIGHTS_API_KEY')
FLIGHTS_API_SECRET = get_parameter('FLIGHTS_API_SECRET')
GOOGLE_API_KEY = get_parameter('GOOGLE_API_KEY')
RAPID_API_KEY = get_parameter('RAPID_API_KEY')






