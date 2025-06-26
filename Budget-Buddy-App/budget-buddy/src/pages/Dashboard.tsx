import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import BalanceDisplayCard from "../components/BalanceDisplayCard";
import ReusableCard from "../components/ReusbleCard";
import BudgetOverview from "../components/BudgetOverview";
import BudgetCategories from "../components/BudgetCategories";
import LastTransactions from "../components/LastTransactions";

const Dashboard = () => {
  return (
    <Box sx={{ padding: "24px" }}>
      {/* Inner content */}
      <Box>
      {/* Container for heading and month/arrow group */}
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

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}> 
          <Button sx={{ border: "1px solid", padding: "0 12px", minWidth: 'auto' }}>&lt;</Button>
          <Typography sx={{ fontWeight: 300 }}>Month</Typography>
          <Button sx={{ border: "1px solid", padding: "0 12px", minWidth: 'auto' }}>&gt;</Button>
        </Box>
      </Box>
    </Box>

      <Box>
        <BalanceDisplayCard />
      </Box>

      <Grid container spacing={4} gap={3} sx={{display: "flex", justifyContent: 'space-evenly' }}>
        <Grid sx={{ border: "1px solid"}}>
          <BudgetOverview />
        </Grid>
        <Grid sx={{border: "1px solid"}}>
          <BudgetCategories />
        </Grid> 
      </Grid>

      <Box sx={{mt: 3}}>
        <LastTransactions />
      </Box>
    </Box>
  );
};

export default Dashboard;
