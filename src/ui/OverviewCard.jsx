import React from 'react'

const OverviewCard = (props) => {
  return (
    <div className='flex h-6 w-90 text-[10px] bg-cyan-300 p-1 justify-around rounded-[10px]'>
      <h1>{props.idx}</h1>
      <img src={props.imageURL} alt="img" className='rounded-[50%] border h-4 w-4' />
      <h2>{props.name}</h2>
      <h3>{props.isActive}</h3>
    </div>
  )
}

export default OverviewCard
