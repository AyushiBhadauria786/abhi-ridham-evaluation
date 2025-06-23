import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import DashboardHeader from './DashboardHeader'


const FullLayout = () => {
  return (
    <div>
        <Sidebar />
        <DashboardHeader />
        <Outlet />
    </div>
  )
}

export default FullLayout