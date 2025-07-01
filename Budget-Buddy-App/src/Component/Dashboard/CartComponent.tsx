import { Box, Card, CardContent, Grid, Icon, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import type { Transaction } from '../Types/Types'

const Cartcomponent = () => {
  const [transactions, setTransactions] = useState([]);
  const [currentBalance, setCurrentBalance] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/Transactions");
        setTransactions(res.data);
      } catch (error) {
        console.error("Error fetching transactions", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let income = 0;
    let expenses = 0;

    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    transactions.forEach((tx: Transaction) => {
      const amount = parseFloat(tx.amount);
      const txDate = new Date(tx.date);

      if (txDate.getMonth() === currentMonth && txDate.getFullYear() === currentYear) {
        if (tx.type.toLowerCase() === "income") {
          income += amount;
        } else if (tx.type.toLowerCase() === "expense") {
          expenses += amount;
        }
      }
    });

    setTotalIncome(income);
    setTotalExpenses(expenses);
    setCurrentBalance(income - expenses);
  }, [transactions]);

  const remainingBudget = currentBalance - totalExpenses;


  const getAmountColor = (amount: number) => ({
    color: amount >= 0 ? 'green' : 'red',
    fontWeight: 600,
  });

  return (
    <Box sx={{ marginTop: "20px", alignContent: "center", alignItems: "center", padding: "20px 20px 0px 20px", justifyContent: "center", alignSelf: "center" }}>
      <Grid container spacing={3}>

        <Box sx={{ marginBottom: "16px", width: "280px", alignContent: "center" }}>
          <Grid>
            <Card>
              <CardContent>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 1 }}>
                  <Box sx={{ p: "24px 24px 0px 24px", fontSize: "18px", mb: "5px", fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>Current Balance </Box>
                  <img
                    src="/Card-1.png"
                    alt="card-1"
                    style={{
                      width: '16px',
                      height: '16px',
                      marginTop: "18px",
                      borderRadius: '14px',
                      marginRight: "18px"
                    }}
                  />
                </Box>

                <Box sx={{ p: "0px 24px 24px 24px" }}>
                  <Box fontSize={"20px"} mb={"3px"} sx={getAmountColor(currentBalance)}>{currentBalance.toFixed(2)}</Box>
                  <Typography component={"p"} fontSize={"11px"} fontFamily={"ui-sans-serif, system-ui, sans-serif"}>
                    as of {new Date().toLocaleDateString()}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Box>

        {/* Total Income */}
        <Box sx={{ marginBottom: "16px", width: "280px", alignContent: "center" }}>
          <Grid>
            <Card>
              <CardContent>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 1 }}>
                  <Box sx={{ p: "24px 24px 0px 24px", fontSize: "18px", mb: "5px", fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>Total Income </Box>
                  <img
                    src="/Card-2.png"
                    alt="card-2"
                    style={{
                      width: '16px',
                      height: '16px',
                      marginTop: "18px",
                      borderRadius: '14px',
                      marginRight: "18px"
                    }}
                  />
                </Box>
                <Box sx={{ p: "0px 24px 24px 24px" }}>
                  <Box fontSize={"20px"} mb={"3px"} sx={getAmountColor(totalIncome)}>{totalIncome.toFixed(2)}</Box>
                  <Typography component={"p"} fontSize={"11px"} fontFamily={"ui-sans-serif, system-ui, sans-serif"}>This Month</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Box>


        <Box sx={{ marginBottom: "16px", width: "280px", alignContent: "center" }}>
          <Grid>
            <Card>
              <CardContent>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 1 }}>
                <Box sx={{ p: "24px 24px 0px 24px", fontSize: "18px", mb: "5px", fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>Total Expenses </Box>
                <img
                    src="/Card-3.png"
                    alt="card-3"
                    style={{
                      width: '16px',
                      height: '16px',
                      marginTop: "18px",
                      borderRadius: '14px',
                      marginRight: "18px"
                    }}
                  />
                  </Box>
                <Box sx={{ p: "0px 24px 24px 24px" }}>
                  <Box fontSize={"20px"} mb={"3px"} sx={getAmountColor(-totalExpenses)}>
                    {totalExpenses.toFixed(2)}
                  </Box>

                  <Typography component={"p"} fontSize={"11px"} fontFamily={"ui-sans-serif, system-ui, sans-serif"}>This Month</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Box>


        <Box sx={{ marginBottom: "16px", width: "280px", alignContent: "center" }}>
          <Grid>
            <Card>
              <CardContent>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 1 }}>
                <Box sx={{ p: "24px 24px 0px 24px", fontSize: "18px", mb: "5px", fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>Remaining Budget</Box>
                <img
                    src="/Card-4.png"
                    alt="card-4"
                    style={{
                      width: '16px',
                      height: '16px',
                      marginTop: "18px",
                      borderRadius: '14px',
                      marginRight: "18px"
                    }}
                  />
                  </Box>
                <Box sx={{ p: "0px 24px 24px 24px" }}>
                  <Box fontSize={"20px"} mb={"3px"} sx={getAmountColor(remainingBudget)}>{remainingBudget.toFixed(2)}</Box>
                  <Typography component={"p"} fontSize={"11px"} fontFamily={"ui-sans-serif, system-ui, sans-serif"}>Left to spend</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Box>
      </Grid>
    </Box>
  )
}

export default Cartcomponent;
