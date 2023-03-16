import React, {useState} from 'react'
import Analysis from './Analysis';
import Navbar from './Navbar'

const Main = () => {
  // console.log(props.onSearch);
  const [embedLink, setEmbedLink] = useState('');
  const onSearch = (text) => {
    //write your code here
    setEmbedLink(`https://www.youtube.com/embed/${text.split('=')[1]}`);
  }
  return (
    <>
      <div>
        <Navbar onSearch={onSearch}/>
        <iframe width="560" height="315" src={embedLink} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <div>
        <Analysis/>
      </div>
    </>
  )
}

export default Main