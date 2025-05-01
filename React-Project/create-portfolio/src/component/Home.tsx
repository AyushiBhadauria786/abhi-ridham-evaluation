import { Box, Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router';

const Home = () => {
    const navigate = useNavigate();
  return (
    <Box sx={{display:'flex',alignItems:"center",justifyContent:"center",height:"90vh"}}>
    <Button variant="contained" onClick={() => navigate("/form")}
    sx={{backgroundColor:"#1e1e2f",color: "#ffffff",fontSize: "1rem",padding: "15px 34px",borderRadius: "8px", }}
    >Create Protfolio</Button>
    </Box>
  )
}

export default Home