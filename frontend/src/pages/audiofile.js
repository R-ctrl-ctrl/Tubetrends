import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import axios from 'axios';
import { saveAs } from 'file-saver';

const audiofile = () => {
    const [embedLink, setEmbedLink] = useState('')
    const [audioFile, setAudioFile] = useState('')
  
    const onSearch = (searchText) => {
      setEmbedLink(searchText)
    }
    
    const fetchAudioFile = async () => {
      const response = await axios.get(embedLink, {
        responseType: 'blob'
      });
      const audioFile = new Blob([response.data], { type: 'audio/mpeg' });
      setAudioFile(audioFile);
    }

    const saveAudioFile = () => {
      saveAs(audiofiles, 'Audiofile.mp3');
    }
    
    console.log(embedLink);
    console.log(audioFile);
    return (
      <>
          <Navbar onSearch={onSearch}/>
          <button onClick={fetchAudioFile}>Fetch Audio File</button>
          <button onClick={saveAudioFile}>Save Audio File</button>
      </>
    )
  }
  
  export default audiofile