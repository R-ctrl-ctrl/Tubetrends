from flask import Flask, request, jsonify
from googleapiclient.discovery import build
import requests
import pandas as pd
from flask_cors import CORS, cross_origin
api_key = 'AIzaSyCxpeTUSUN2mkaIcKokuOMuMvUaoYEpAPc'
youtube = build('youtube', 'v3', developerKey=api_key)
senti_url = "https://text-analysis12.p.rapidapi.com/sentiment-analysis/api/v1.1"
import ast
import json


app = Flask(__name__)
CORS(app)

def senti_analysis(text):
    payload = {
        "language": "english",
        "text": text
    }
    headers = {
        "content-type": "application/json",
        "X-RapidAPI-Key": "4a7bc899ffmsh33136d145f6bb0ap1619afjsnfc14bdac8bc7",
        "X-RapidAPI-Host": "text-analysis12.p.rapidapi.com"
    }

    response = requests.request("POST", senti_url, json=payload, headers=headers)
    return response.text


@app.route('/')
def hello_world():
    return jsonify({"temp": "hdsjkjdsjk"})


def get_channels_details(youtube, channel_id):
    request = youtube.channels().list(
        part="statistics",
        id=channel_id
    )
    response = request.execute()
    return response['items'][0]['statistics']


@app.route('/channels')
def channels():
    id = request.args.get('id')
    resp = get_channels_details(youtube, id)
    return resp


# @app.route('/videos')
# def videos():
#     id = request.args.get('id')
#     basic = 'https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=100&order=relevance&videoId='
#     key = '&key=AIzaSyDXhz_36TvSNJr_1z3I2Zz2DQ0V_mIpJ1c'
#     response = requests.get(f"{basic}{id}{key}")
#     print(response)
#     return jsonify({"resp",response.json()})

@app.route("/videos_comments/<video_id>")
def comm(video_id):
    basic = 'https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=100&order=relevance&videoId='
    key = '&key=AIzaSyDXhz_36TvSNJr_1z3I2Zz2DQ0V_mIpJ1c'
    response = requests.get(f"{basic}{video_id}{key}")
    resp = response.json()
    lis = []
    for i in range(len(resp["items"])):
        lis.append(resp["items"][i]["snippet"]
                   ["topLevelComment"]["snippet"]["textOriginal"])
        if(i == 25):
            break

    # sentiment analysis
    positive = 0
    negative = 0
    neutral = 0
    for i in range(len(lis)):
        result = senti_analysis(lis[i])
        d = json.loads(result)
        if(d["sentiment"] == "neutral"):
            neutral += 1
        elif(d["sentiment"] == "negative"):
            negative += 1
        else:
            positive += 1
    return jsonify({"result":[positive,negative,neutral]})


app.run(debug=True)
