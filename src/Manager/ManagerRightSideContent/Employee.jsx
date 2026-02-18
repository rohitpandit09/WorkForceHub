import React from 'react'
import OverviewCard from '../../ui/OverviewCard'
import { dummyData } from '../../data/data'

const Employee = () => {
  return (
    <div className='flex flex-col gap-3'>

      <h1 className='font-bold'>Employees</h1>

      <div id='overviewCards' className='flex flex-col gap-4'>
        {dummyData.map((elem)=>
            <OverviewCard  idx={elem.key} name={elem.name} imageURL={elem.imageURL} isActive={elem.isActive}/>
        )}
      </div>

    </div>
  )
}

export default Employee
