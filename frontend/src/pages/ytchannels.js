import { Box, Button, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const ytchannels = () => {
    const [inp,setinp] = useState("")
    const [data,setdata] = useState([])
    const fetchdata = async ()=>{
        if(!inp){
            alert("Input is empty")
            return;
        }
        const resp = await fetch(`/channels?id=${inp}`)
        const da = await resp.json()
        console.log(da)
        setdata(da)
    }



  return (
    <Box w="100vw" h="100vh">
        <Box>
            <Input onChange={(e)=>setinp(e.target.value)} placeholder='Enter youtube channel id'/>
            <Button onClick={fetchdata}>Submit</Button>
        </Box>        
        <Box>
            {data && <Text>Subscriber count:{data.subscriberCount}</Text>}
            {data && <Text> Video Count:{data.videoCount}</Text>}
            {data && <Text> View Count:{data.viewCount}</Text>}
            {data && <Text>Subscrbers hidden:{data.hiddenSubscriberCount}</Text>}

        </Box>
    </Box>
  )
}

export default ytchannels
