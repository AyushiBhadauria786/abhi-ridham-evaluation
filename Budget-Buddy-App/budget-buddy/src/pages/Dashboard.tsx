import { Box, Button, Grid, Typography, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import BalanceDisplayCard from "../components/BalanceDisplayCard";
import BudgetOverview from "../components/BudgetOverview";
import BudgetCategories from "../components/BudgetCategories";
import LastTransactions from "../components/LastTransactions";
import axios from "axios";
import type {
  Transaction,
  BudgetCategoryData,
  PieChartData,
  Budget as BudgetType,
} from "../types";
import useApi from "../hooks/useApi";

const Dashboard = () => {
  const { data: transactions, loading: transactionsLoading } = useApi<Transaction[]>('/transactions');
  const { data: budgets, loading: budgetsLoading } = useApi<BudgetType[]>('/budgets');

  // const [transactions, setTransactions] = useState<Transaction[]>([]);
  // const [budgets, setBudgets] = useState<BudgetType[]>([]);
  
  const [displayDate, setDisplayDate] = useState(new Date());

  const [currentBalance, setCurrentBalance] = useState<number | string>(0);
  const [totalMonthlyBudget, setTotalMonthlyBudget] = useState<number>(0);
  const [totalMonthlyExpenses, setTotalMonthlyExpenses] = useState<number>(0);
  const [pieChartData, setPieChartData] = useState<PieChartData[]>([]);
  const [lastFiveTransactions, setLastFiveTransactions] = useState<
    Transaction[]
  >([]);
  const [budgetCategoryData, setBudgetCategoryData] = useState<
    BudgetCategoryData[]
  >([]);

  // initial data fetch
  // useEffect(() => {
  //   const fetchTransactions = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:3001/transactions");
  //       console.log(response.data);
  //       setTransactions(response.data);
  //     } catch (error) {
  //       console.error("Error fetching transactions:", error);
  //     }
  //   };

  //   fetchTransactions();
  // }, []);

  // useEffect(() => {
  //   const fetchBudgets = async () => {
  //     try {
  //       const budgetRes = await axios.get("http://localhost:3001/budgets");
  //       console.log(budgetRes.data);
  //       setBudgets(budgetRes.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchBudgets();
  // }, []);

  useEffect(() => {
    if (transactions) {
      const balance = transactions.reduce((acc, t) => {
        const amount = Number(t.amount) || 0;
        return t.type === "income" ? acc + amount : acc - amount;
      }, 0);
      setCurrentBalance(balance);
      console.log(currentBalance, "68");

      const sortedTransactions = [...transactions].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      setLastFiveTransactions(sortedTransactions.slice(0, 5));
    }
  }, [transactions]);

  useEffect(() => {
    if (transactions && budgets) {
      const selectedMonth = displayDate.getMonth();
      const selectedYear = displayDate.getFullYear();

      const monthlyTransactions = transactions.filter((t) => {
        const transactionDate = new Date(t.date);
        return (
          transactionDate.getMonth() === selectedMonth &&
          transactionDate.getFullYear() === selectedYear
        );
      });

      let monthlyExpenses = 0;
      const expenseByCategory: { [key: string]: number } = {};

      monthlyTransactions.forEach((transaction) => {
        const amountValue = Number(transaction.amount) || 0;
        if (transaction.type === "expense") {
          monthlyExpenses += amountValue;
          expenseByCategory[transaction.category] =
            (expenseByCategory[transaction.category] || 0) + amountValue;
        }
      });

      const totalBudget = budgets.reduce(
        (acc, budget) => acc + Number(budget.limit),
        0
      );

      console.log(totalBudget);

      setTotalMonthlyExpenses(monthlyExpenses);
      setTotalMonthlyBudget(totalBudget);

      const chartData = Object.keys(expenseByCategory).map((category) => ({
        name: category,
        value: expenseByCategory[category],
      }));
      setPieChartData(chartData);

      const categoryData = budgets.map((budget) => ({
        category: budget.category,
        limit: budget.limit,
        spent: expenseByCategory[budget.category] || 0,
      }));
      setBudgetCategoryData(categoryData);
    }
  }, [transactions, budgets, displayDate]);

  const handleMonthChange = (direction: "prev" | "next") => {
    setDisplayDate((currentDate) => {
      const newDate = new Date(currentDate);
      newDate.setDate(1);
      newDate.setMonth(newDate.getMonth() + (direction === "next" ? 1 : -1));

      const today = new Date();
      if (
        newDate.getFullYear() > today.getFullYear() ||
        (newDate.getFullYear() === today.getFullYear() &&
          newDate.getMonth() > today.getMonth())
      ) {
        return currentDate;
      }
      return newDate;
    });
  };

  const isNextDisabled =
    displayDate.getFullYear() === new Date().getFullYear() &&
    displayDate.getMonth() >= new Date().getMonth();


    if(transactionsLoading || budgetsLoading){
      return (
        <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100vh - 64px)",
        }}
        >
          <CircularProgress />
        </Box>
      )
    }

  return (
    <Box sx={{}}>
      {/* Inner content */}

      {/* Container for heading and month/arrow group */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 2,
          mb: 2,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 500, mb: 3 }}>
          Financial Overview
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Button
            onClick={() => handleMonthChange("prev")}
            sx={{ border: "1px solid", padding: "0 12px", minWidth: "auto" }}
          >
            &lt;
          </Button>
          <Typography
            sx={{ fontWeight: 500, minWidth: "110px", textAlign: "center" }}
          >
            {displayDate.toLocaleString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </Typography>{" "}
          <Button
            onClick={() => handleMonthChange("next")}
            sx={{
              border: "1px solid",
              padding: "0 12px",
              minWidth: "auto",
              opacity: isNextDisabled ? 0.5 : 1,
              pointerEvents: isNextDisabled ? "none" : "auto",
            }}
            disabled={isNextDisabled}
          >
            &gt;
          </Button>
        </Box>
      </Box>

      <BalanceDisplayCard
        currentBalance={Number(currentBalance)}
        totalMonthlyBudget={totalMonthlyBudget}
        totalMonthlyExpenses={totalMonthlyExpenses}
        remainingMonthlyBudget={totalMonthlyBudget - totalMonthlyExpenses}
      />

      <Grid container spacing={3} mt={4} sx={{}}>
        <Grid size={{ xs: 12, md: 6, lg: 6 }}>
          <BudgetOverview pieChartData={pieChartData} />
        </Grid>
        <Grid size={{ xs: 12, lg: 5 }}>
          <BudgetCategories budgetData={budgetCategoryData} />
        </Grid>
      </Grid>

      <Box sx={{ mt: 4 }}>
        <LastTransactions transactions={lastFiveTransactions} />
      </Box>
    </Box>
  );
};

export default Dashboard;
