import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import BalanceDisplayCard from "../components/BalanceDisplayCard";
import ReusableCard from "../components/ReusbleCard";
import BudgetOverview from "../components/BudgetOverview";
import BudgetCategories from "../components/BudgetCategories";
import LastTransactions from "../components/LastTransactions";
import axios from "axios";

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [currentBalance, setCurrentBalance] = useState(0);
  const [totalMonthlyExpenses, setTotalMonthlyExpenses] = useState(0);
  const [totalMonthlyIncome, setTotalMonthlyIncome] = useState(0);
  const [budgetCategoriesData, setBudgetCategoriesData] = useState([]);
  const [pieChartData, setPieChartData] = useState([]);

  // initial data fetch
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get("http://localhost:3001/transactions");
        console.log(response.data);
        setTransactions(response.data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, []);

  useEffect(() => {
    if (transactions.length > 0) {
      let balance = 0;
      let monthyExpenses = 0;
      let monthlyIncome = 0;
      const dataFromCategory = {};

      const currentMonth = new Date().getMonth();
      const currentYear = new Date().getFullYear();
    }
  }, []);

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
            <Button
              sx={{ border: "1px solid", padding: "0 12px", minWidth: "auto" }}
            >
              &lt;
            </Button>
            <Typography sx={{ fontWeight: 300 }}>Month</Typography>
            <Button
              sx={{ border: "1px solid", padding: "0 12px", minWidth: "auto" }}
            >
              &gt;
            </Button>
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <BalanceDisplayCard />
      </Box>

      <Grid
        container
        spacing={4}
        gap={3}
        sx={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <Grid sx={{ border: "1px solid" }}>
          <BudgetOverview />
        </Grid>
        <Grid sx={{ border: "1px solid" }}>
          <BudgetCategories />
        </Grid>
      </Grid>

      <Box sx={{ mt: 3 }}>
        <LastTransactions />
      </Box>
    </Box>
  );
};

export default Dashboard;
