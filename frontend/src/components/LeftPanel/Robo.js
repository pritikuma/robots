import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
const Robo = ({name,handleClick,online,battery,data}) => {
    const [trig,setTrig]=useState(true)
    useEffect(()=>{
        console.log('nah')
        setTrig(!trig)
    },[online])
  return (
    <div onClick={()=>{
      console.log(name+'i')
        handleClick(data)
    }} className='w-full hover:bg-gradient-to-r from-slate-200 to-white transition-all duration-300 ease-in-out rounded-lg flex flex-row items-center px-4 h-16 bg-white '>
    {name.slice(0,7)+'....'}<span className='w-64'></span><span className={`${battery<20?'text-red-600':''}`}>{battery+'%'}</span>
    {online?<div className='w-2 h-2 mr-0 ml-auto rounded-full bg-green-400'></div>:<div className='w-2 h-2 mr-0 ml-auto rounded-full bg-gray-400'></div>}
    </div>
  )
}

export default Robo
