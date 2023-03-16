# from googleapiclient.discovery import build
# import pandas as pd

# api_key = 'AIzaSyCxpeTUSUN2mkaIcKokuOMuMvUaoYEpAPc'
# youtube = build('youtube','v3',developerKey=api_key)

# def get_channels_details(youtube,channel_id):
#     request = youtube.channels().list(
#         part="statistics",
#         forUsername="GoogleDevelopers"
#     )
#     response = request.execute()
#     return response['items'][0]['statistics']

# print(get_channels_details(youtube,"xyz"))

# import requests


# url = "https://text-analysis12.p.rapidapi.com/sentiment-analysis/api/v1.1"

# payload = {
# 	"language": "english",
# 	"text": "Falcon 9’s first stage has landed on the Of Course I Still Love You droneship – the 9th landing of this booster"
# }
# headers = {
# 	"content-type": "application/json",
# 	"X-RapidAPI-Key": "4a7bc899ffmsh33136d145f6bb0ap1619afjsnfc14bdac8bc7",
# 	"X-RapidAPI-Host": "text-analysis12.p.rapidapi.com"
# }

# response = requests.request("POST", url, json=payload, headers=headers)

# print(response.text)

# from pytube import YouTube
# import os

# yt = YouTube('https://www.youtube.com/watch?v=9bZkp7q19f0')

# video = yt.streams.filter(only_audio=True).first()

# out_file = video.download(output_path=".")

# base, ext = os.path.splitext(out_file)
# new_file = base + '.mp3'
# os.rename(out_file, new_file)



mysp=__import__("my-voice-analysis")               
p="Wav_868kb" # Audio File title
c=r"C:\Users\91892\Desktop\tubetrends\Backend" # Path to the Audio_File directory (Python 3.7)
mysp.mysppron(p,c)



