
import boto3

session = boto3.Session(profile_name='david-gmail-acc')

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





