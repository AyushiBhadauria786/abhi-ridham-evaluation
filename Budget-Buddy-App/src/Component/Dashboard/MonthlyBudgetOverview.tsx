import { Box, Card, CardContent, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Cell, Pie, PieChart, Tooltip } from 'recharts';
import type { Transaction } from '../Types/Types';

const color = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#845EC2', '#008F7A', '#C34A36'];

const MonthlyBudgetOverview = () => {
  const [chartData, setChartData] = useState<{ name: string; value: number }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<Transaction[]>('http://localhost:3000/Transactions');
        const currentMonth = new Date().getMonth();
        const currentYear = new Date().getFullYear();

        const categoryTotals: Record<string, number> = {};

        res.data.forEach((tx) => {
          const txDate = new Date(tx.date);
          if (
            txDate.getMonth() === currentMonth &&
            txDate.getFullYear() === currentYear
          ) {
            const typeLabel = tx.type.toLowerCase() === 'income' ? 'Income' : 'Expense';
            const category = tx.categories || 'Uncategorized';
            const amount = parseFloat(tx.amount) || 0;
            const key = `${typeLabel}: ${category}`;

            categoryTotals[key] = (categoryTotals[key] || 0) + amount;
          }
        });

        const formatted = Object.entries(categoryTotals).map(([name, value]) => ({
          name,
          value,
        }));

        setChartData(formatted);
      } catch (error) {
        console.error('Error fetching transactions', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box sx={{ marginBottom: "16px", width: "585px", alignContent: "center" }}>
      <Grid>
        <Card sx={{ height: "370px" }}>
          <CardContent>
            <Box
              sx={{
                fontFamily: "ui-sans-serif, system-ui, sans-serif",
                fontSize: "25px",
                fontWeight: "bold",
                margin: "24px",
              }}
            >
              Monthly Budget Overview
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', outline: 'none' }}>
              <PieChart width={580} height={260}>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  outerRadius={110}
                  dataKey="value"
                  label
                >
                  {chartData.map((_, index) => (
                    <Cell key={index} fill={color[index % color.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
};

export default MonthlyBudgetOverview;
