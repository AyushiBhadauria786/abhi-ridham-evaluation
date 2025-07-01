import { Box, Button, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import Filter from '../Component/Transactions/Filter'
import AllTransactions from '../Component/Transactions/AllTransactions'
import { useNavigate } from 'react-router-dom'

const Transactions = () => {
  const [filters, setFilters] = useState({
    searchTerm: '',
    selectedType: 'All',
    selectedCategory: 'All',
    fromDate: '',
    toDate: ''
  });

  const navigate = useNavigate();
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
              width: "100.6%",
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
      <Typography component={"h3"} sx={{ fontSize: "25px", fontFamily: "ui-sans-serif, system-ui, sans-serif", fontWeight: "bold" }}>
      Transaction History
      </Typography>


      
        <Button onClick={() => navigate("/addTransaction")} sx={{ display: "flex", minWidth: "40px",color:"white",fontFamily:"ui-sans-serif, system-ui, sans-serif",backgroundColor: 'rgb(51 65 85)', borderRadius: "7px", border: "1px solid #ccc" }}>
          Add Transaction
        </Button>

        
      </Box>

      <Box sx={{ alignContent: "center", alignItems: "center", padding: "20px", justifyContent: "center", maxwidth: "10px", alignSelf: "center" }}>
          <Grid container spacing={3}>

            <Filter filters={filters} setFilters={setFilters} />

          </Grid>
        </Box>


        <Box sx={{ alignContent: "center",alignItems: "center",padding:"0px 20px 20px 20px", justifyContent: "center", maxwidth: "10px", alignSelf: "center" }}>
          <Grid container spacing={3}>

            <AllTransactions 
               filters={filters}
              />
          </Grid>
        </Box>

    </Box>
  
      </>
  )
}

export default Transactions