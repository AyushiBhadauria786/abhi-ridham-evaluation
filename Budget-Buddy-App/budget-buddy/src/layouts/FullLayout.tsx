import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";
import { Box } from "@mui/material";
import { useState } from "react";

const FullLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: 'background.default' }}>
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <Box 
        component="main"
        sx={{ 
          display: "flex", 
          flexGrow: 1, 
          flexDirection: "column",
          transition: 'margin-left 0.2s ease-in-out',
          marginLeft: isSidebarOpen ? "250px" : "100px",
        }}
      >
        <DashboardHeader handleSidebarToggle={handleSidebarToggle} />
        <Box sx={{ flexGrow: 1, p: 3, width: '100%' ,minHeight:"calc(100vh - 64px)"}}>
            <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default FullLayout;