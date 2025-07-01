import { AppBar, Box, Button, colors, Icon, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const navigate = useNavigate();
    return (
        <Box sx={{ marginTop: "-8px", marginLeft: "-8px", marginRight: "-8px", borderRadius: "10px solid black" }}>
            <AppBar position="static" sx={{
                backgroundColor: 'white', margin: 0,
                padding: 0,
                borderBottom: '2px solidrgb(86, 114, 121)'
            }}>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Box sx={{ display: "flex", alignItems: "center", marginLeft: "15%", }}>
                        <IconButton sx={{ background: 'linear-gradient(to right, rgb(71, 85, 105), rgb(37, 99, 235))', color: "#fff", mr: 1 }}>
                            <AccountBalanceWalletIcon />
                        </IconButton>

                        <Typography variant="h6" component="div" sx={{

                            borderRadius: '16px',
                            fontWeight: 'bold',
                            fontSize: '1.5rem',
                            letterSpacing: '0.5px',
                            background: 'linear-gradient(to right, rgb(71, 85, 105), rgb(37, 99, 235))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontFamily: "ui-sans-serif, system-ui, sans-serif",

                        }}>
                            FinanceFlow
                        </Typography>
                    </Box>


                    <Box sx={{ display: "flex", alignItems: "center", gap: 2, marginRight: "15%" }}>
                        <Button onClick={() => navigate("/login")} variant="text" sx={{
                            fontWeight: 500, borderRadius: "5px", background: 'linear-gradient(to right, rgb(71, 85, 105), rgb(37, 99, 235))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent', fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>
                        Login
                    </Button>
                    <Button
                    onClick={() => navigate("/login")}
                        variant="contained"
                        sx={{ background: "linear-gradient(to right, rgb(71, 85, 105), rgb(37, 99, 235))", color: '#fff', fontWeight: 500, borderRadius: "5px", fontFamily: "ui-sans-serif, system-ui, sans-serif", }}
                    >
                        Get Started
                    </Button>
                </Box>

            </Toolbar>
        </AppBar>
        </Box >
    )
}

export default Navbar
