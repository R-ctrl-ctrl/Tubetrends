from googleapiclient.discovery import build
import pandas as pd

api_key = 'AIzaSyCxpeTUSUN2mkaIcKokuOMuMvUaoYEpAPc'
youtube = build('youtube','v3',developerKey=api_key)

def get_channels_details(youtube,channel_id):
    request = youtube.channels().list(
        part="statistics",
        forUsername="GoogleDevelopers"
    )
    response = request.execute()
    return response['items'][0]['statistics']

print(get_channels_details(youtube,"xyz"))



