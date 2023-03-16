import Search from "../../components/Search"
import React, { useState } from "react";
import styles from '../styles/Home.module.css'
import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
const ytvideos = () => {
  const [embedLink, setEmbedLink] = useState('');
  const [idLink, setIdLink] = useState('');
  const [bool, setbool] = useState(false)
  const [data, setdata] = useState()
  const [loading, setloading] = useState(false)
  const onSearch = (text) => {
    setIdLink(text);
    setEmbedLink(`https://www.youtube.com/embed/${text.split('=')[1]}`);
    setbool(true)
  }

  function getId(url) {
    let id = url.split('v=')[1];
    return id;
  }

  const handleClick = async () => {
    setloading(true)
    let idlinks = getId(idLink);
    const resp = await fetch(`/videos_comments?id=${idlinks}`)
    const da = await resp.json()

    setdata(da)
    setloading(false)
  }



  return (
    <Box>
      <Search onSearch={onSearch} />
      <div className={styles.iframe1}>
        <iframe width="700" height="450" src={embedLink} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      {
        bool &&
        <Box display={"flex"} justifyContent="center" mt="3vh" >
          <Button isLoading={loading} onClick={handleClick} bg="green" color={"white"} border={"none"} p={7} borderRadius="10px" cursor={"pointer"} w="15%" h="5vh" fontSize={"18px"}>Analyze</Button>
        </Box>
      }
      <div>
        <Box>
          {
            data && 
            <fieldset class="flex flex-nowrap items-center max-w-xs space-x-2 dark:text-gray-100">

            <Box display={"flex"} alignItems="center">
              <Heading fontSize={"20px"} fontWeight="semibold" mr="2vw">Positive</Heading>
              <Input id="slider" type="range" value={data["result"][0]} w="50vw" />
            </Box>
            <Box display={"flex"} alignItems="center">
              <Heading fontSize={"20px"} fontWeight="semibold" mr="2vw">Negative</Heading>
              <Input id="slider" type="range" value={data["result"][1]} w="50vw" />
            </Box>
            <Box display={"flex"} alignItems="center">
              <Heading fontSize={"20px"} fontWeight="semibold" mr="2vw">Neutral</Heading>
              <Input id="slider" type="range" value={data["result"][2]} w="50vw" />
            </Box>

          </fieldset>
          }
        </Box>
      </div>


    </Box>
  )
}

export default ytvideos