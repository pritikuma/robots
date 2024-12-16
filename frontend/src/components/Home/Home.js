import React from 'react'
import { useEffect, useState } from 'react'
import LeftPanel from '../LeftPanel/LeftPanel'
import RightPanel from '../RightPanel/RightPanel'
import { io } from "socket.io-client";
const socket = io("http://127.0.0.1:8000");
const Home = () => {
 const [curdata,setCurdata]=useState()
 const [krig,setKrig]=useState(true)
 const [krig1,setKrig1]=useState(false)
const handleClick=(data)=>{
    setCurdata(data)
    setKrig1(true)
    setKrig(!krig)
    }
   

    const [robots, setRobots] = useState([]);

  useEffect(() => {
    socket.on("random_data", (receivedData) => {
        setRobots(receivedData);
        
        
      });
    setInterval(()=>{
        socket.emit("get_random_data");
    },5000)
}, []);
    useEffect(()=>{
        if(krig1){
            var t
            console.log("hi")
        for(var i=0;i<robots.length;i++){
            var item=robots[i]
            if(item.Robot_ID==curdata.Robot_ID){
                t=item
                
            }
                }
            setCurdata(t)
        }
    
    },[robots])
  return (
    <div className='flex flex-row'>
     <LeftPanel
      
     
      handleClick={handleClick}
      
     
      robots={robots}
      krig={krig}
      /> 
     {curdata&&<RightPanel
     data={curdata}
     krig={krig}
     />}
    </div>
  )
}

export default Home

