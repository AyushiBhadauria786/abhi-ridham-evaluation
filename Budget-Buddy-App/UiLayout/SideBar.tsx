import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const SideBar = () => {
  return (
    <>

      <Box sx={{ display: "flex", padding: "16px", width: "13rem", borderRight: "1px solid black",borderBottom:"1px solid black" }}>
        <IconButton
          sx={{
            background: 'linear-gradient(to right, rgb(71, 85, 105), rgb(37, 99, 235))',
            color: '#fff',
            mr: 1
          }}
        >
          <AccountBalanceWalletIcon />
        </IconButton>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            fontSize: '1.5rem',
            letterSpacing: '0.5px',
            background: 'linear-gradient(to right, rgb(71, 85, 105), rgb(37, 99, 235))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontFamily: 'ui-sans-serif, system-ui, sans-serif'
          }}
        >
          FinanceFlow
        </Typography>
      </Box>


      <Box>
        <Typography
          sx={{
            display: "flex", padding: "16px", width: "13rem", paddingLeft: "20px", 
          }}
        >
          Navigation
        </Typography>

      </Box>
      <Box
      sx={{display: "flex", paddingRight: "16px",paddingTop:"16px", width: "13rem", paddingLeft: "16px"}}>
      
      
      </Box>
    </>
  )
}

export default SideBar