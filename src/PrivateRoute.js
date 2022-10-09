import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'


import { Route, Routes } from 'react-router-dom'

const PrivateRoute = () => {
  return (
    <div className='App'>
      <Navbar />
      
      <Sidebar />

      <div className='main'>
        <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  )
}

export default PrivateRoute
