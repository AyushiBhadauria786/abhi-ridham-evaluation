import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import DashboardHeader from "./DashboardHeader";
import { Box } from "@mui/material";

const FullLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      <Box>
        <Sidebar />
      </Box>
      <Box sx={{ display: "flex", flexGrow: "1", flexDirection: "column" }}>
        <DashboardHeader />
        <Outlet />
      </Box>
    </div>
  );
};

export default FullLayout;
