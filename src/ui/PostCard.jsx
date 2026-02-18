import React from 'react'

const PostCard = ({message}) => {
  const {name,photo} = JSON.parse(localStorage.getItem('user'));
  console.log("PostCard message:", message);


  return (
    <div className='flex-col gap-2 bg-lime-400 h-fit w-80  rounded-xs border'>

      <div className='flex flex-wrap border-b'>
        <img src={photo} alt="img" className='h-5 w-5 rounded-[50%] border m-2'/>
        <h1 className='text-[10px] m-2 font-bold'>{name} (Manager)</h1>
      </div>

      <div className='text-[10px] m-2 '>
        {message}
      </div>
    </div>
  )
}

export default PostCard
