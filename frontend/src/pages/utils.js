import React from 'react'

const extractAudioFromVideoLink = link => {
    // implementation to extract audio from video link
    const audioData = fetch(link)
        .then(response => response.blob())
        .then(blob => URL.createObjectURL(blob));
    return audioData;
};

export { extractAudioFromVideoLink };