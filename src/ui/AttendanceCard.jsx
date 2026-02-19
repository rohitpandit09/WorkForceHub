import React from 'react'

const AttendanceCard = (props) => {
  return (
    <div className='flex flex-wrap flex-col h-15 w-25 bg-gray-300 rounded-[10px] text-center border'>
      <h1 className='text-[8px] py-1 font-bold'>{props.title}</h1>
      <h2 className='text-[20px]'>{props.number}</h2>
    </div>
  )
}

export default AttendanceCard
