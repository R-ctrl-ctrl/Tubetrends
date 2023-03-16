import Search from "../../components/Search"
import React, {useState} from "react";

const videos = () => {
    const [embedLink, setEmbedLink] = useState('');
  const onSearch = (text) => {
    //write your code here
    console.log(text);
    setEmbedLink(`https://www.youtube.com/embed/${text.split('=')[1]}`);
  }
    return (
      <>
        <div>videos</div>
        <Search onSearch={onSearch} />
        <div>
        <iframe width="700" height="450" src={embedLink} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      </>
    )
}

export default videos