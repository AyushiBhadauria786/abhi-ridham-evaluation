import { Box, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";

import BudgetOverview from "../components/BudgetOverview";
import MyPieChart from "../components/Piechart";
import type { PieChartData, Transaction } from "../types";
import axios from "axios";

// const data = [
//   {
//     name: "Page A",
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: "Page B",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: "Page C",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: "Page D",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: "Page E",
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: "Page F",
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: "Page G",
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

// const data01 = [
//   {
//     name: "Group A",
//     value: 400,
//   },
//   {
//     name: "Group B",
//     value: 300,
//   },
//   {
//     name: "Group C",
//     value: 300,
//   },
//   {
//     name: "Group D",
//     value: 200,
//   },
//   {
//     name: "Group E",
//     value: 278,
//   },
//   {
//     name: "Group F",
//     value: 189,
//   },
// ];

const CustomBarTooltip = ({active,payload,label}:any) => {
  if(active && payload && payload.length){
    return (
      <Paper sx={{p: 1.5, backgroundColor: 'rgba(255, 255, 255, 0.95)', border: '1px solid #ccc', borderRadius: 2}}>
        <Typography variant="subtitle2" sx={{fontWeight: "bold"}}>{label}</Typography>
        {payload.map((ele: any) => (
          <Typography key={ele.dataKey} variant="body2" sx={{color: ele.fill }}>
            {`${ele.name}: ₹${ele.value.toLocaleString('en-IN')}`}
          </Typography>
        ))}
      </Paper>
    )
  }
  return null;
};

const Reports: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [monthlySummary, setMonthlySummary] = useState<any[]>([]);
  const [categorySpending, setCategorySpending] = useState<PieChartData[]>([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await axios.get("http://localhost:3001/transactions");
        setTransactions(res.data);
      } catch (err) {
        console.error("Failed to fetch transactions:", err);
      }
    };
    fetchTransactions();
  }, []);

  useEffect(() => {
    if (transactions.length === 0) return;

    const lastMonthsData: { year: number; month: number; name: string }[] = [];
    const today = new Date();
    for (let i = 2; i >= 0; i--) {
      const d = new Date(today.getFullYear(), today.getMonth() - i, 1);
      lastMonthsData.push({
        year: d.getFullYear(),
        month: d.getMonth(),
        name: d.toLocaleString("en-IN", { month: "short" }),
      });
    }

    const summaryData = lastMonthsData.map(({ year, month, name }) => {
      const monthlyTransactions = transactions.filter((t) => {
        const tDate = new Date(t.date);
        return tDate.getFullYear() === year && tDate.getMonth() === month;
      });

      const income = monthlyTransactions
        .filter((t) => t.type === "income")
        .reduce((sum, t) => sum + Number(t.amount), 0);
      const expenses = monthlyTransactions
        .filter((t) => t.type === "expense")
        .reduce((sum, t) => sum + Number(t.amount), 0);

      return {
        name,
        Income: income,
        Expenses: expenses,
        Savings: income - expenses,
      };
    });
    setMonthlySummary(summaryData);

    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();

    const currentMonthExpenses = transactions.filter((t) => {
      const tDate = new Date(t.date);
      return (
        t.type === "expense" &&
        tDate.getMonth() === currentMonth &&
        tDate.getFullYear() === currentYear
      );
    });

    const spendingByCategory: { [key: string]: number } =
      currentMonthExpenses.reduce((acc, transaction) => {
        const amount = Number(transaction.amount) || 0;
        acc[transaction.category] = (acc[transaction.category] || 0) + amount;
        return acc;
      }, {} as { [key: string]: number });

    const pieData: PieChartData[] = Object.entries(spendingByCategory).map(
      ([name, value]) => ({
        name,
        value,
      })
    );
    setCategorySpending(pieData);
  }, [transactions]);

  return (
    <Box sx={{ p: { xs: 1, md: 2 } }}>
      <Typography
        variant="h4"
        // fontSize="30px"
        fontWeight={700}
        color="text.primary"
        gutterBottom
      >
        Financial Reports
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ mb: 3 }}
      >
        Comprehensive insights into your financial health
      </Typography>

      <Paper sx={{ p: 3, borderRadius: 3, boxShadow: 3 }}>
        <Typography variant="h6" fontWeight={600}>
          Monthly Overview
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Income, expenses, and savings over the last 3 months
        </Typography>
        <Box sx={{ mt: 3, height: 400 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={monthlySummary}
              margin={{
                top: 5,
                right: 20,
                left: 10,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis tickFormatter={(value) => `₹${Number(value) / 1000}k`} />
              <Tooltip content={<CustomBarTooltip />} />
              <Legend />
              <Bar dataKey="Income" fill="#3182CE" />
              <Bar dataKey="Expenses" fill="#E53E3E" />
              <Bar dataKey="Savings" fill="#48BB78" />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </Paper>

      <Grid container spacing={3} mt={3} gap={3}>
        <Grid item xs={12} lg={6}>
          <Paper
            sx={{
              p: 3,
              borderRadius: 3,
              boxShadow: 3,
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h6" fontWeight={600}>
              Spending by Category
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Current month breakdown
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 350,
              }}
            >
              {categorySpending.length > 0 ? (
                <MyPieChart data={categorySpending} />
              ) : (
                <Typography color="text.secondary">
                  No expense data for this month.
                </Typography>
              )}
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} lg={6}>
          <Paper
            sx={{
              p: 3,
              borderRadius: 3,
              boxShadow: 3,
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h6" fontWeight={600}>
              Spending Trends
            </Typography>
            <Typography variant="caption" color="text.secondary">Monthly spending pattern</Typography>

            <Box sx={{ mt: 3, flexGrow: 1, height: 350, width: 400 }}>
              <ResponsiveContainer width="100%" height="100%">

              <LineChart
                data={monthlySummary}
                margin={{
                  top: 5,
                  right: 20,
                  left: 10,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Expenses" stroke="#8884d8" strokeWidth={2} activeDot={{r: 8}} />
              </LineChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Reports;
