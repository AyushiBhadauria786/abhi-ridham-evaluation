import { Box, Button, Typography } from "@mui/material";
import React from "react";
import FilterTransaction from "../components/FilterTransaction";
import { NavLink, useNavigate } from "react-router-dom";

const Transactions = () => {

  const navigate = useNavigate()

  return (
    <Box sx={{ padding: "24px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxSizing: "border-box",
        }}
      >
        <Typography variant="h5" sx={{fontWeight: 700, fontSize: "24px"}}>Transaction History</Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "rgb(71 85 105)",
            fontWeight: 600,
            lineHeight: "32px",
            ":hover": {
              backgroundColor: "rgb(55 65 81)",
            },
          }}
          onClick={() => navigate('/add-transaction')}
        >
          Add Transaction
        </Button>
      </Box>
      <Box sx={{marginTop: 2}}>
          <FilterTransaction 
           />
      </Box>
    </Box>
  );
};

export default Transactions;
