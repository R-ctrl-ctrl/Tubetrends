import { Box, Button, FormControl, FormLabel, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'


const ytchannels = () => {
    const [inp, setinp] = useState("")
    const [inp2, setinp2] = useState("")
    const [loading, setloading] = useState(false)
    const [data, setdata] = useState()
    const [data2,setdata2] = useState()
    const fetchdata = async () => {
        setloading(true)
        if (!inp) {
            alert("Input is empty")
            setloading(false)
            return;
        }
        const resp = await fetch(`/channels?id=${inp}`)
        const da = await resp.json()
        console.log(da)
        setdata(da)
        setloading(false)
    }

    const getSuggestions = async()=>{
        if(!inp2){
            alert("Input is empty")
            return;
        }
        const resp = await fetch(`/trend_suggestion?id=${inp2}`)
        const da = await resp.json()
        console.log(da)
        setdata2(da)

    }


    return (
        <Box w="100%" >
            <FormControl>
                <FormLabel fontSize={"20px"} mb="1vh">Enter Youtube Channel Id:</FormLabel>
                <Box w="full" display={"flex"} justifyContent="space-between" alignItems={"center"}>
                    <Input p={7} fontSize='18px' borderRadius={"10px"} onChange={(e) => setinp(e.target.value)} w="60%" placeholder='Enter youtube channel id' borderWidth={"1px"} borderColor="black" />
                    <Button cursor={"pointer"} isLoading={loading} onClick={fetchdata} w="20%" fontSize={"20px"} bg="green" color="white" p={7} borderRadius="10px" outline={"none"} border="none" fontWeight={"bold"} >Submit</Button>
                </Box>
            </FormControl>
            {
                data &&
                <Box mt="10vh" display={"flex"} justifyContent="space-between">
                    <Box Box w="25%" h="16vh" borderRadius={"10px"} bg="orange" display={"flex"} flexDir="column" justifyContent="center" alignItems={"center"}>
                        <Text textColor={"white"} fontSize="20px" fontWeight={"bold"}>Subscriber Count</Text>
                        <Text textColor={"white"} mt="1" fontSize="20px" fontWeight={"bold"}>{data.subscriberCount}</Text>
                    </Box>
                    <Box w="25%" h="16vh" borderRadius={"10px"} bg="green" display={"flex"} flexDir="column" justifyContent="center" alignItems={"center"}>
                        <Text textColor={"white"} fontSize="20px" fontWeight={"bold"}>Video Count</Text>
                        <Text textColor={"white"} mt="1" fontSize="20px" fontWeight={"bold"}>{data.videoCount}</Text>
                    </Box>
                    <Box w="25%" h="16vh" borderRadius={"10px"} bg="red" display={"flex"} flexDir="column" justifyContent="center" alignItems={"center"}>
                        <Text textColor={"white"} fontSize="20px" fontWeight={"bold"}>Total Views</Text>
                        <Text textColor={"white"} mt="1" fontSize="20px" fontWeight={"bold"}>{data.viewCount}</Text>
                    </Box>
                </Box>
            }
            <FormControl mt="5vh" fontSize={"20px"} mb="1vh">
                <FormLabel mb="1vh" fontWeight={"semibold"}>Enter the category for better content optimization:</FormLabel>
                <Box  w="full" display={"flex"} justifyContent="space-between" alignItems={"center"}>
                    <Input p={7} fontSize='18px' borderRadius={"10px"} onChange={(e) => setinp2(e.target.value)} w="60%" placeholder='Enter video category here' borderWidth={"1px"} borderColor="black" />
                    <Button cursor={"pointer"} isLoading={loading} onClick={getSuggestions} w="20%" fontSize={"20px"} bg="green" color="white" p={7} borderRadius="10px" outline={"none"} border="none" fontWeight={"bold"} >Submit</Button>
                </Box>
            </FormControl>
            {
                data2 &&
                data2["suggestion"].map((d,i)=>{
                    return(
                        <p>{d}</p>
                    )
                })
            }
        </Box >
    )
}

export default ytchannels


// {data && <Text>Subscriber count:{data.subscriberCount}</Text>}
//             {data && <Text> Video Count:{data.videoCount}</Text>}
//             {data && <Text> View Count:{data.viewCount}</Text>}
//             {data && <Text>Subscrbers hidden:{data.hiddenSubscriberCount}</Text>}