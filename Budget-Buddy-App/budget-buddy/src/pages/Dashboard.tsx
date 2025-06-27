import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import BalanceDisplayCard from "../components/BalanceDisplayCard";
import ReusableCard from "../components/ReusbleCard";
import BudgetOverview from "../components/BudgetOverview";
import BudgetCategories from "../components/BudgetCategories";
import LastTransactions from "../components/LastTransactions";
import axios from "axios";
import type { Transaction, BudgetCategoryData, PieChartData } from "../types";


const Dashboard = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [currentBalance, setCurrentBalance] = useState<number | string>(0);
  const [totalMonthlyExpenses, setTotalMonthlyExpenses] = useState<number>(0);
  const [totalMonthlyIncome, setTotalMonthlyIncome] = useState<number>(0);
  const [budgetCategoriesData, setBudgetCategoriesData] = useState<BudgetCategoryData[]>([]);
  const [pieChartData, setPieChartData] = useState<PieChartData[]>([]);

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
      let balance: string | number = 0;
      let monthyExpenses: string | number = 0;
      let monthlyIncome: string | number = 0;
      const dataFromCategory = {};

      const currentMonth = new Date().getMonth();
      const currentYear = new Date().getFullYear();

      transactions.forEach((transaction) => {
        const amountValue = transaction.amount
        if(transaction.type === "income"){
          balance += amountValue
        }

        const transactionDate = new Date(transaction.date);
        if(transactionDate.getMonth() === currentMonth && transactionDate.getFullYear() === currentYear){
          if(transaction.type === "expense"){
            monthyExpenses += amountValue

            if(dataFromCategory[transaction.category]){
              dataFromCategory[transaction.category] += amountValue
            }else{
              dataFromCategory[transaction.category] = amountValue
            }
          }else{
            monthlyIncome += amountValue
          }
        }
      });

      setCurrentBalance(balance);
      setTotalMonthlyExpenses(monthyExpenses);
      setTotalMonthlyIncome(monthlyIncome);

    }
  }, [transactions]);

  

  const totalMonthlyBudget = 12000;

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
        <BalanceDisplayCard 
        currentBalance={currentBalance}
        totalMonthlyBudget={totalMonthlyBudget}
        totalMonthlyExpenses={totalMonthlyExpenses}
        remainningMonthlyBudget={totalMonthlyBudget - totalMonthlyExpenses}
        />
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
          <BudgetCategories 
          budgetCategoriesData={budgetCategoriesData}
          />
        </Grid>
      </Grid>

      <Box sx={{ mt: 3 }}>
        <LastTransactions />
      </Box>
    </Box>
  );
};

export default Dashboard;
