import React from 'react'
import Sidebar from './ManagerSideBar/Sidebar'
import Content from './ManagerRightSideContent/Dashboard'
import { Outlet } from 'react-router-dom'

const Manager = () => {
  return (
    <div className='flex h-screen w-screen overflow-hidden'>

      <div className="w-35 h-screen">
        <Sidebar />
      </div>

      {/* Right side content scroll control */}
      <div className="flex-1 h-screen overflow-hidden p-3">
        <Outlet />
      </div>
      
    </div>
  )
}

export default Manager
