import React from 'react'

const PostCard = () => {
  const {name,photo} = localStorage.getItem('user');
  return (
    <div className='flex flex-col gap-2 bg-lime-400 h-fit w-80 rounded-xs border'>

      <div className='flex flex-wrap border-b-2'>
        <img src={photo} alt="img"/>
        <h1>{name} (Manager)</h1>
      </div>

      <div>

      </div>
    </div>
  )
}

export default PostCard
