import React from 'react'
import AttendanceCard from '../../ui/AttendanceCard'
import { dummyDataForAttendance } from '../../data/data'

const Attendance = () => {
  return (
    <div className='flex flex-col gap-2 overflow-y-scroll h-screen'>

      <h1 className='font-bold'>Attendance</h1>

      <div id='attendanceCard' className='flex flex-wrap gap-2 w-fit h-fit justify-between'>
        {dummyDataForAttendance.map((elem)=>
            <AttendanceCard key={elem.key} title={elem.title} number={elem.number} />
        )
        }
      </div>

      <div id="">
        
      </div>
    </div>
  )
}

export default Attendance;
