from flask import Flask,request,jsonify
from googleapiclient.discovery import build
import pandas as pd
from flask_cors import CORS,cross_origin
api_key = 'AIzaSyCxpeTUSUN2mkaIcKokuOMuMvUaoYEpAPc'
youtube = build('youtube','v3',developerKey=api_key)



app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    return jsonify({"temp":"hdsjkjdsjk"})




def get_channels_details(youtube,channel_id):
    request = youtube.channels().list(
        part="statistics",
        id=channel_id
    )
    response = request.execute()
    return response['items'][0]['statistics']


@app.route('/channels')
def channels():
    id = request.args.get('id')
    resp = get_channels_details(youtube,id)
    return resp



app.run(debug=True)