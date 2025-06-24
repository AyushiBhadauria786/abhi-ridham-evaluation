import { AppBar, Box, Button, colors, Icon, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const Navbar = () => {
    return (
        <Box sx={{ marginTop:"-8px" ,marginLeft:"-8px",marginRight:"-8px", borderRadius: "10px solid black" }}>
            <AppBar position="static" sx={{
                backgroundColor: 'white', margin: 0,
                padding: 0,
                borderBottom: '2px solidrgb(86, 114, 121)'
            }}>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Box sx={{display:"flex",alignItems:"center",marginLeft: "15%",}}>
                        <IconButton sx={{ backgroundColor: "#1d4ed8", color: "#fff", mr: 1 }}>
                            <AccountBalanceWalletIcon />
                        </IconButton>

                        <Typography variant="h6" component="div" sx={{

                            borderRadius: '16px',
                            fontWeight: 'bold',
                            fontSize: '1.5rem',
                            letterSpacing: '0.5px',
                            color:"#1d4ed8",
                            fontFamily:"sans-serif"
                            
                        }}>
                           FinanceFlow
                        </Typography>
                    </Box>


                    <Box sx={{ display: "flex", alignItems: "center", gap: 2, marginRight: "15%" }}>
                        <Button variant="text" sx={{ fontWeight: 500, borderRadius:"5px",color:"#2563eb",fontFamily:"sans-serif" }}>
                            Login
                        </Button>
                        <Button
                            variant="contained"
                            sx={{ backgroundColor: '#2563eb', color: '#fff', fontWeight: 500,borderRadius:"5px",fontFamily:"sans-serif" }}
                        >
                            Get Started
                        </Button>
                    </Box>

                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar
