import { AppBar, Avatar, Box, Button, colors, Icon, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { useNavigate } from 'react-router-dom';
import { Margin } from '@mui/icons-material';

const InnerNavbar = () => {

  return (
    <Box sx={{ marginTop: "-8px", marginRight: "-8px",  }}>
      <AppBar  position="static" elevation={0} sx={{
        backgroundColor: 'white', margin: 0,
        padding: 0,
        borderBottom: '1px solid #ccc',
          boxShadow: 'none'
      
      }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: "flex", alignItems: "center", }}>
            <Button sx={{
              alignContent:"center",
              margin: 0,
              paddingLeft: "5px",
              paddingRight: "5px",
              minWidth: 0,
              whiteSpace: "nowrap"
              
            }}>
              <img
                src='/Navigation.png'
                alt='/Navigation.png'
                style={{
                  width: "16px",
                  height: "16px",
                  alignItems: "center",
                  flexDirection: "column",
                  fontSize: "14px",
                  fontWeight: 300,
                }}
              />
            </Button>


            <Typography variant="h6" component="p" sx={{
              ml:"8px",
              borderRadius: '16px',
              fontWeight: 'bold',
              fontSize: '1rem',
              letterSpacing: '0.5px',
              color: "rgb(51 65 85 / var(--tw-text-opacity, 1))",
              fontFamily: "ui-sans-serif, system-ui, sans-serif",

            }}>
              Dashboard
            </Typography>
          </Box>

          <Box component={"span"} sx={{  display: "flex", mr:"30px"}}>
          <Avatar sx={{ bgcolor: "rgb(51 65 85 / var(--tw-text-opacity, 1))" }}>JD</Avatar>
          <Typography sx={{color:"rgb(51 65 85 / var(--tw-text-opacity, 1))", ml:"15px",mt:"8px"}}>John Doe</Typography>
          </Box>
  
        </Toolbar>
      </AppBar>
    </Box >
  )  
}




export default InnerNavbar