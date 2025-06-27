import React from 'react'
import SideBar from './SideBar';
import InnerNavbar from './InnerNavbar'
import { Box } from '@mui/material';
import Dashboard from '../Pages/Dashboard';

const MainLayout = () => {
  return (
    <>
     <Box sx={{ display: "flex" }}>
      <SideBar />
      <Box sx={{display:"flex",flexGrow:"1",flexDirection:"column"}}>
        <InnerNavbar />
        <Dashboard/>
      </Box>
    </Box>

    </>
  )
}

export default MainLayout;