import { AppBar, Avatar, Box, Button, Card, CardContent, Grid, LinearProgress, Toolbar, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CartComponent from "../Component/Dashboard/CartComponent"
import MonthlyBudgetOverview from "../Component/Dashboard/MonthlyBudgetOverview"
import BudgetCategories from "../Component/Dashboard/BudgetCategories"
import LastTransaction from "../Component/Dashboard/LastTransaction"
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase';

const Dashboard = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string | null>(null);
  const [userPhoto, setUserPhoto] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserName(user.displayName || user.email);
        setUserPhoto(user.photoURL);
      }
    });
    return () => unsubscribe();
  }, []);

  
  const getFormattedMonth = (date: Date) =>
    date.toLocaleString('default', { month: 'short', year: 'numeric' });

  const goToPrevMonth = () => {
    const newDate = new Date(currentMonth);
    newDate.setMonth(currentMonth.getMonth() - 1);
    setCurrentMonth(newDate);
  };

  const goToNextMonth = () => {
    const newDate = new Date(currentMonth);
    newDate.setMonth(currentMonth.getMonth() + 1);
    setCurrentMonth(newDate);
  };


  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: 'rgb(248 250 252 / var(--tw-bg-opacity, 1))',
          boxSizing: "border-box",
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: "24px",
          width: "100%",
          minHeight: "100vh",
          overflowX: "hidden",
        }}
      >

        <Box sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "34px 34px 0px 34px",


        }}>
          <Typography component={"div"} sx={{ fontSize: "25px", fontFamily: "ui-sans-serif, system-ui, sans-serif", fontWeight: "bold" }}>
            Financial Overview
          </Typography>


          <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 2 }}>
            <Button sx={{ display: "flex", minWidth: "40px", bgcolor: "white", borderRadius: "7px", border: "1px solid #ccc" }}>
              {'<'}
            </Button>

            <Typography
              component="span"
              sx={{
                display: "block",
                border: "1px solid #ccc",
                padding: "5px 10px",
                textAlign: "center",
                bgcolor: "white"
              }}
            >
              Jun 2025
            </Typography>

            <Button sx={{ display: "flex", minWidth: "40px", bgcolor: "white", borderRadius: "7px", border: "1px solid #ccc" }}>
              {'>'}
            </Button>
          </Box>
        </Box>


        <CartComponent />


        <Box sx={{ alignContent: "center", alignItems: "center", padding: "20px", justifyContent: "center", maxwidth: "10px", alignSelf: "center" }}>
          <Grid container spacing={3}>

            <MonthlyBudgetOverview />

            <BudgetCategories />

          </Grid>
        </Box>

        <Box sx={{ alignContent: "center",alignItems: "center",padding:"0px 20px 20px 20px", justifyContent: "center", maxwidth: "10px", alignSelf: "center" }}>
          <Grid container spacing={3}>

            <LastTransaction/>
          </Grid>
        </Box>
      


      </Box>

    </>
  )
}

export default Dashboard