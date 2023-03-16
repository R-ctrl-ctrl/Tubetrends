import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import { extractAudioFromVideoLink } from './utils';
import styles from '../styles/Home.module.css'
const audiofile = () => {
  // const [searchText, setSearchText] = useState('')

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   // console.log(searchText);
  //   props.onSearch(searchText)
  // }
    return (
      <>
          

        <iframe id="buttonApi" src="https://convert2mp3s.com/api/button/mp3?url=https://www.youtube.com/watch?v=pRpeEdMmmQ0" width="100%" height="100%" allowtransparency="true" scrolling="no" style="border:none"></iframe>
      </>
    )
  }
  
  export default audiofile