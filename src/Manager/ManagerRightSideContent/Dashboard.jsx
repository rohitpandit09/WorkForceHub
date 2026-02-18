import React, { useState } from 'react'
import PostCard from '../../ui/PostCard';
import { useEffect } from 'react';

const Dashboard = () => {

  const [message, setMessage] = useState('');
  const [cards, setCards] = useState([]);

  // useEffect(() => {
  //   const savedCards = JSON.parse(localStorage.getItem("cards")) || [];
  //   setCards(savedCards);
  // }, []);
  

  const submitHandler = ()=>{
    if(message===''){
      alert("Please write something before posting")
      return;
    }

    const updatedCards = [...cards, message];

    setCards(updatedCards);
    localStorage.setItem("cards", JSON.stringify(updatedCards));

    setMessage('');
  }

  return (
    <div className='flex flex-col m-3 gap-2 flex-wrap h-fit w-fit overflow-hidden'>
      <h1 className='font-bold'>Manager's Dashboard</h1>

      <div className='flex gap-2'>

        <textarea type='text' placeholder='Post something'  className='border h-5 w-80 text-[10px] outline-none rounded-xs px-1 ' value={message}
        onChange={(e)=>{
          setMessage(e.target.value);
        }}
        />

        <button className='h-5 w-10 outline-none text-[10px] rounded-xs border active:scale-95 bg-' onClick={submitHandler}>Enter</button>

      </div>

      <div id="cardArea" className='flex flex-col  my-7 gap-2  overflow-y-auto'>
        {cards.map((msg,idx)=>
          <PostCard key={idx} message={msg}/>
        )}
      </div>

    </div>
  )
}

export default Dashboard

