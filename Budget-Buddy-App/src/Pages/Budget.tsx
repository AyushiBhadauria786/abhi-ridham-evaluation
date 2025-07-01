import { Box, Button, Grid, Typography } from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'
import AddNewCategories from '../Component/Budget/AddNewCategories'
import YourCategories from '../Component/Budget/YourCategories'
import axios from 'axios'

const Budget = () => {
  const [categories, setCategories] = useState([]);
 

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:3000/Budget");
      setCategories(response.data);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  };

  useEffect(() => {
      fetchCategories();
    },[]);

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
      Manage Budget Categories
      </Typography>


      

        
      </Box>

      <Box sx={{ alignContent: "center", alignItems: "center", padding: "20px", justifyContent: "center", maxwidth: "10px", alignSelf: "center" }}>
          <Grid container spacing={3}>

            <AddNewCategories  fetchCategories={fetchCategories}/>

          </Grid>
        </Box>


        <Box sx={{ alignContent: "center",alignItems: "center",padding:"0px 20px 20px 20px", justifyContent: "center", maxwidth: "10px", alignSelf: "center" }}>
          <Grid container spacing={3}>

           <YourCategories categories={categories} fetchCategories={fetchCategories}/>
            
          </Grid>
        </Box>

    </Box>
  </>
  )
}

export default Budget