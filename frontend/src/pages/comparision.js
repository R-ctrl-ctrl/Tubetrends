import { Box, Button, Input } from "@chakra-ui/react";
import { useState } from "react";

const comparision = () => {
    const [inp1,setinp1] = useState("")
    const [inp2,setinp2] = useState("")
    const [loading,setloading] = useState(false)
    const handleClick = async()=>{

    }
    return (
        <Box w="full">
            <Box display={"flex"} justifyContent="space-between">
                <Input onChange={(e)=>setinp1(e.target.value)} borderWidth={"1px"} borderColor="black" p={10} fontSize="18px" borderRadius="10px" w="35%" placeholder="Enter your channel ID"/>
                <Button setloading= {loading} onClick={handleClick} borderRadius={"10px"} bg="green" cursor="pointer" textColor={"white"} border="none" fontSize={"18px"} p={4} w="15%">Compare</Button>
                <Input onChange={(e)=>setinp2(e.target.value)} borderWidth={"1px"}  borderColor="black" p={10} fontSize="18px" p={8} borderRadius="10px" w="35%" placeholder="Enter competitior channel ID"/>
            </Box>
        </Box>
    );
}

export default comparision;