import React from 'react'
import Robo from './Robo'
import { useState,useEffect,useRef } from 'react'
const LeftPanel = ({handleClick,online,robots,handleDis}) => {
    const [trig,setTrig]=useState(true)
    const [filRobo,setFilRobo]=useState([])
    
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [options, setOptions] = useState([
    { id: 1, label: "Active", selected: false },
    { id: 2, label: "Offline", selected: false },
    { id: 3, label: "Low Battery", selected: false },
  ]);

  const dropdownRef = useRef(null);


  const toggleDropdown = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  const toggleOption = (id) => {
    setOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === id ? { ...option, selected: !option.selected } : option
      )
    );
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

    useEffect(()=>{
        setTrig(!trig)
        
       
    },[robots])
   
    useEffect(()=>{
        let arr=robots
        if(options[2].selected){
            arr=arr.filter((item)=>(item.Battery_Percentage<20))
            
            setTrig(!trig)
        }
        if(options[0].selected){
            arr=arr.filter((item)=>(item.Online_Status))
            
            setTrig(!trig)
        }
        if(options[1].selected){
            arr=arr.filter((item)=>(!item.Online_Status))
            
            setTrig(!trig)
        }
        setFilRobo(arr)
    },[options,robots])
    
  return (
    <div className='w-[30vw] overflow-y-auto h-[100vh] bottom-0 m-1 bg-gray-100 flex flex-col'>
        <div className='text-2xl py-2 h-12 text-yellow-50 items-center flex flex-row px-4 font-semibold bg-gray-700 '> ROBOTS </div>
        <div className="relative">
      <button
        onClick={toggleDropdown}
        className="bg-gray-700 text-white mx-2 mt-1 px-4 py-1 rounded-full h-8 hover:bg-blue-600"
      >
        Filters
      </button>

      {isDropdownVisible && (
        <div
          ref={dropdownRef}
          className="absolute top-12 left-0 bg-white border border-gray-300 rounded shadow-lg w-48"
        >
          {options.map((option) => (
            <div
              key={option.id}
              onClick={() => toggleOption(option.id)}
              className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <span>{option.label}</span>
              {option.selected && <span className="text-green-500 font-bold">●</span>}
            </div>
          ))}
        </div>
      )}
    </div>
        {filRobo&&<ul className='mx-1'>
            {filRobo.map((item)=>(<li className='my-2 rounded-lg'><Robo name={item.Robot_ID}
            data={item}
            online={item.Online_Status}
            battery={item.Battery_Percentage}
            handleClick={handleClick}/></li>))
            }
        </ul>}
        
        
      
    </div>
  )
}

export default LeftPanel
