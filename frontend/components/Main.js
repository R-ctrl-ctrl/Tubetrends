import React, {useState} from 'react'
import Navbar from './Navbar'

const Main = (props) => {
  // console.log(props.onSearch);
  const [embedLink, setEmbedLink] = useState('');
  const onSearch = (text) => {
    //write your code here
    console.log(text);
    setEmbedLink(`https://www.youtube.com/embed/${text.split('=')[1]}`);
  }
  return (
    <>
      <div>
        <Navbar onSearch={onSearch}/>
        <iframe width="560" height="315" src={embedLink} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </>
  )
}

export default Main