import React from 'react'
import Sidebar from './ManagerSideBar/Sidebar'
import Content from './ManagerRightSideContent/Dashboard'
import { Outlet } from 'react-router-dom'

const Manager = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default Manager
