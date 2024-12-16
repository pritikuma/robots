import React, { useEffect, useState } from 'react'
import Map from './Map'
const RightPanel = ({data}) => {
    const [lat,setLat]=useState(0);
    const [long,setLong]=useState(0);
    const [trig,setTrig]=useState(true)
    useEffect(()=>{
        setLat(data.Location_Coordinates[0])
        setLong(data.Location_Coordinates[1])
        setTrig(false)
    },[data])
    useEffect(()=>{
        setTrig(true)
    },[lat])
  return (
    <div className=' flex flex-col justify-start items-start text-yellow-50 bg-gray-900 w-[70vw] h-[100vh]' >
    
    {trig&&<Map
    lat={lat}
    long={long}
    />}
    <div className=' flex flex-col mt-10 justify-start items-start text-yellow-50 text-lg ml-10'>
    <h1>Robot ID : <span className='text-blue-600'>{data.Robot_ID}</span></h1>
    <h1>Online : {data.Online_Status?<span className='text-green-600'>Yes</span>:<span className='text-red-600'>No</span>}</h1>
    <h1>Battery Percentage: {data.Battery_Percentage<20?<span className='text-red-600'>{data.Battery_Percentage}</span>:<span className='text-green-600'>{data.Battery_Percentage}</span>}</h1>
    <h1>CPU Usage : <span className='text-green-600'>{data.CPU_Usage}</span></h1>
    <h1>RAM Consumption : <span className='text-green-600'>{data.RAM_Consumption}</span></h1>
    <h1>LastUupdated : <span className='text-green-600'>{data.Last_Updated}</span></h1>
    <h1>Location Coordinated : {data.Location_Coordinates[0]} , {data.Location_Coordinates[1]} </h1>
    </div>
    </div>
  )
}

export default RightPanel
