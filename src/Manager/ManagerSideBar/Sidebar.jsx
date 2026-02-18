import React from 'react'
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const { name, photo } = user;

  return (
    <div className='flex flex-wrap flex-col h-screen w-35 bg-amber-200 border-r-2 gap-2'>

      <img src={photo} alt="img"  className='h-8 w-8 object-cover rounded-[50%] border mx-13 my-7 text-[10px] p-2'/>
      <h1 className='text-[10px] mx-10 -my-6 w-fit h-fit'>{name}</h1>

      <div id='options' className='flex flex-col text-[10px] my-13 gap-4 '>

        <button className='active:scale-95 hover:bg-blue-200 outline-none' onClick={()=>{
          navigate('/managers-dashboard')
        }}>Dashboard</button>

        <button className='active:scale-95 hover:bg-blue-200 outline-none' onClick={()=>{
          navigate('/managers-employee')
        }}>Employee</button>


        <button className='active:scale-95 hover:bg-blue-200 outline-none'>Attendance</button>


        <button className='active:scale-95 hover:bg-blue-200 outline-none'>Settings</button>


      </div>
    </div>
  )
}

export default Sidebar;
