import { Box, Button, colors, Container, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../Navbar/Navbar'
import Cards from "../ReusableComponent/Cards"


const HomePage = () => {
  return (
    <>
      <Navbar />
      <Box>
      <Container maxWidth="lg"  sx={{ margin: "auto", paddingTop: "100px",paddingBottom:"100px" , alignItems: "center", justifyContent: "center", textAlign:"center" }}>

        <Typography variant='h2' sx={{ alignContent: "cente", textAlign: "center", fontWeight: "700", fontFamily: "sans-serif" }}>Master Your Money with <span style={{color:"#2563eb"}}>FinanceFlow </span> </Typography>
        <Typography variant='h6' mt={"20px"} marginRight={"180px"} marginLeft={"180px"}>Take control of your financial future with our intelligent expense tracking, smart budgeting tools, and powerful insights that help you make better money decisions.</Typography>
        <Button variant='contained' sx={{mt:"40px",color:"2563eb",padding:"8px 32px 8px 32px", mb:"40px"}}>
          Add New Transaction
        </Button>
        <Cards />
      </Container>
      </Box>
    </>
  )
}

export default HomePage