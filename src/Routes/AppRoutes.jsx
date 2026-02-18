import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Manager from '../Manager/Manager'
import Login from '../authentication/login'
import Dashboard from '../Manager/ManagerRightSideContent/Dashboard'


const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}/>

        <Route element={<Manager/>}>
        <Route path="/managers-dashboard" element={<Dashboard />} />
        
      </Route>

      </Routes>
    </div>
  )
}

export default AppRoutes
