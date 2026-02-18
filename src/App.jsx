import React from 'react'
import Login from './authentication/login'
import AppRoutes from './Routes/AppRoutes'

const App = () => {
  return (
    <div className='flex bg-violet-400 h-screen w-screen'>
      <AppRoutes/>
    </div>
  )
}

export default App
