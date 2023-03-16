import { useEffect, useState } from "react"


export default function Home() {

  const [data,setdata] = useState([])


  const fetchdata = async ()=>{
    const resp = await fetch("/channels?id=UCotFeSNk36bSGs1WyTSIewA")
    const da = await resp.json()
    console.log(da)
    setdata(da)
  }
  useEffect(()=>{
      fetchdata()
  },[])
  return (
   <div>
    <p>Hello</p>
   </div>
  )
}
