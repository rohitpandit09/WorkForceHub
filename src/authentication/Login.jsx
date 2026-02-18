import React, { use, useState } from 'react'
import {googleLogin} from '../firebase/googleauth';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [role, setRole] = useState('employee');
  const navigate = useNavigate();


  const handleLogin = async ()=>{
    

    const user = await googleLogin();
    console.log(user.photoURL,user.displayName);
    localStorage.setItem(
      "user", JSON.stringify({
        name:user.displayName,
        photo :user.photoURL,
        role:role

    })
    )


    if(role==='employee'){
    alert(`Login as ${role}`);
    }

    else if(role==='manager'){
    alert(`Login as ${role}`);
    
    navigate("/managers-dashboard"
    )
    }

  }

  return (
    <div className='flex flex-wrap m-12 mx-25 '>

      <div id='leftSide' className='flex flex-col h-50 w-50 bg-white justify-center rounded-l-xl px-15 py-7 gap-3'>

        <h1 className='font-bold text-xl mx-2 '>Login</h1>

        <button className='h-5 w-25 border text-[6px] font-semibold rounded-sm -mx-4 active:scale-95 ' onClick={handleLogin}>Login with Google</button>

        
        <p className='text-[10px] font-semibold h-fit w-fit mx-3'>Login as</p>

        <select className='h-5 w-25 border text-[6px] font-semibold rounded-sm outline-none -mx-4'
          value={role} onChange={(e)=>{
            setRole(e.target.value);
          }}
        >
            <option value="employee" className='border text-[6px] font-semibold rounded-sm outline-none'>Employee</option>
            <option value="manager" className='border text-[6px] font-semibold outline-none'>Manager</option>
        </select>
        

      </div>

      <div className='h-50 w-50 object-cover'>
        <img src='src\assets\loginpageimg.jpg' className='h-50 w-60 rounded-r-xl object-cover'/>
      </div>
    

    </div>
  )
}

export default Login;
