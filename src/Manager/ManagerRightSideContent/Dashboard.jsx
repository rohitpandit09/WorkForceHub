import React from 'react'

const Dashboard = () => {
  return (
    <div className='flex flex-col m-3 gap-2'>
      <h1 className='font-bold'>Manager's Dashboard</h1>

      <div className='flex gap-2'>
        <textarea type='text' placeholder='Post something'  className='border h-5 w-80 text-[10px] outline-none rounded-xs px-1 '/>
        <button className='h-5 w-10 outline-none text-[10px] rounded-xs border active:scale-95 bg-'>Enter</button>
      </div>

      <div id="cardArea">
        
      </div>

    </div>
  )
}

export default Dashboard

