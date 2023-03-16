from nltk.sentiment import SentimentIntensityAnalyzer
import nltk
import json
import ast
from flask import Flask, request, jsonify
from googleapiclient.discovery import build
import requests
import pandas as pd
from flask_cors import CORS, cross_origin
api_key = 'AIzaSyCxpeTUSUN2mkaIcKokuOMuMvUaoYEpAPc'
youtube = build('youtube', 'v3', developerKey=api_key)
senti_url = "https://text-analysis12.p.rapidapi.com/sentiment-analysis/api/v1.1"


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

    response = requests.request(
        "POST", senti_url, json=payload, headers=headers)
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
#     print(response.text)
#     return "hello world"


@app.route("/videos_comments")
def videos_comments():
    video_id = request.args.get('id')
    basic = 'https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=100&order=relevance&videoId='
    key = '&key=AIzaSyDXhz_36TvSNJr_1z3I2Zz2DQ0V_mIpJ1c'
    response = requests.get(f"{basic}{video_id}{key}")
    resp = response.json()
    lis = []
    for i in range(len(resp["items"])):
        lis.append(resp["items"][i]["snippet"]
                   ["topLevelComment"]["snippet"]["textOriginal"])

    # sentiment analysis
    positive = 0
    negative = 0
    neutral = 0
    sia = SentimentIntensityAnalyzer()
    for i in range(len(lis)):
        scores = sia.polarity_scores(lis[i])
        if(scores["compound"] < -0.5):
            negative += 1
        elif(scores["compound"] >0.5):
            positive += 1
        else:
            neutral += 1
    
    return jsonify({"result": [positive, negative, neutral]})


@app.route("/trend_suggestion")
def sugest():
    que = request.args.get('id')
    url = "https://ytube-videos.p.rapidapi.com/sugestions"
    
    querystring = {"q":que,"lang":"EN"}
    headers = {
	    "X-RapidAPI-Key": "278e27e095msh46f48e2f327416dp199cc5jsn0c9aef95a792",
	    "X-RapidAPI-Host": "ytube-videos.p.rapidapi.com"
    }

    response = requests.request("GET", url, headers=headers, params=querystring)
    result = json.loads(response.text)
    return jsonify({"suggestion":result})


app.run(debug=True)
