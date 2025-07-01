import { Box, Button, colors, Container, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../Navbar/Navbar'
import Cards from "../ReusableComponent/Cards"
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Box bgcolor={"#F6FBFF"}>
      <Container maxWidth="lg"  sx={{ margin: "auto", paddingTop: "100px",paddingBottom:"30px" , alignItems: "center", justifyContent: "center", textAlign:"center" }}>
        <Typography variant='h2' sx={{ alignContent: "cente", textAlign: "center", fontWeight: "700", fontFamily: "ui-sans-serif, system-ui, sans-serif", }}>Master Your Money with <span style={{color:"#2563eb"}}>FinanceFlow </span> </Typography>
        <Typography variant='h6' mt={"20px"} marginRight={"180px"} marginLeft={"180px"} sx={{fontFamily: "ui-sans-serif, system-ui, sans-serif",}}>Take control of your financial future with our intelligent expense tracking, smart budgeting tools, and powerful insights that help you make better money decisions.</Typography>
        <Button onClick={() => navigate("/login")} variant='contained' sx={{mt:"40px",padding:"8px 32px 8px 32px", mb:"40px",fontFamily: "ui-sans-serif, system-ui, sans-serif",background: "linear-gradient(to right, rgb(71, 85, 105), rgb(37, 99, 235))"}}>
          Add New Transaction
        </Button>
        <Cards />
      </Container>
      </Box>
    </>
  )
}

export default HomePage