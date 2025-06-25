import { Box, Button, Typography } from "@mui/material";
import React from "react";
import BalanceDisplayCard from "../components/BalanceDisplayCard";

const Dashboard = () => {
  return (
    <Box sx={{ padding: "24px" }}>
      {/* Inner content */}
      <Box>
        {/* for heading and month */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 500 }}>
            Financial Overview
          </Typography>
          <Button sx={{ border: "1px solid", padding: "0 24px"}}>&lt;</Button>
          <Typography sx={{ fontWeight: 300 }}>Month</Typography>
          <Button sx={{ border: "1px solid ", padding: "0 24px" }}>&gt;</Button>
        </Box>
      </Box>

      <Box>
        <BalanceDisplayCard />
      </Box>
    </Box>
  );
};

export default Dashboard;
