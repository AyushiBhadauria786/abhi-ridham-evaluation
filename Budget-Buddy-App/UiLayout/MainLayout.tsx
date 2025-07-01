import React from 'react'
import SideBar from './SideBar';
import InnerNavbar from './InnerNavbar'
import { Box } from '@mui/material';
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
     <Box sx={{ display: "flex" }}>
      <SideBar />
      <Box sx={{display:"flex",flexGrow:"1",flexDirection:"column"}}>
        <InnerNavbar />
        <Outlet/>
      </Box>
    </Box>

    </>
  )
}

export default MainLayout;