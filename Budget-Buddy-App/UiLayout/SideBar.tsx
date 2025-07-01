import { Box, Button, IconButton, Link, Typography } from '@mui/material'
import React from 'react'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import sideBarLinks from './RenderArrayOfObject';
import { NavLink, useNavigate } from 'react-router';
import {  signOut } from 'firebase/auth';
import { auth } from '../src/Firebase';

const SideBar = () => {

const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login'); 
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  
  return (
    <>
      <Box sx={{
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: "24px",
          borderRight: "1px solid #ccc",
          width:"240px",
          height:"100vh",
          position:"sticky",
          top: 0, 
          backgroundColor: "#fff", 
          zIndex: 1100,
          
      
          }}>
        <Box sx={{ display: "flex", padding: "16px", width: "13rem", borderBottom: "1px solid #ccc" }}>
          <IconButton
            sx={{
              background: 'rgb(71 85 105 / var(--tw-bg-opacity, 1))',
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
              color: "rgb(51 65 85 / var(--tw-text-opacity, 1))",
              fontFamily: 'ui-sans-serif, system-ui, sans-serif'
            }}
          >
            FinanceFlow
          </Typography>
        </Box>

        <Box sx={{
          display:'flex',

          
        }} >
          <Box>
            <Typography variant="body2"
              sx={{
                display: "flex", paddingTop: "16px", width: "13rem", paddingLeft: "25px", paddingBottom: "9px", fontSize: "15px",
              }}
            >
              Navigation
            </Typography>
            <Box
              sx={{ display: "flex", paddingRight: "12px", width: "13rem", paddingLeft: "10px", flexDirection: "column", position:"absolute",height:"75.5%"}}>
              {sideBarLinks.map((item) => (
                <NavLink
                key={item.Component}
                to={item.link}
                  style={({isActive}) => ({
                    borderRadius: "5px",
                    backgroundColor: isActive ? "rgb(228, 231, 238)" : "transparent",
                    padding: 1,
                    display: "flex",
                    gap: "20px",
                    alignItems: "center",
                    color: "rgb(15, 21, 31)",
                    textDecoration: "none",
                    cursor : "pointer",
                    height:"30px",
                    margin:" 5px 5px 5px 0px"
                  })}>
                    
                
                  <img

                    src={item.SideBarIcon}
                    alt={item.Component}
                    style={{
                      width: "16px",
                      height: "16px",
                      alignItems: "center",
                      flexDirection: "column",
                      fontSize: "14px",
                      fontWeight: 300,
                    }}
                  />
                  <Typography sx={{ fontSize: "15px", }}>
                    {item.Component}
                  </Typography>

                </NavLink>
              ))}
            </Box>
          </Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", position: "absolute", bottom: "0px", padding: "16px", width: "13rem",   borderTop: "1px solid #ccc"}}
        >
          <img
            src='./LogOut.png'
            style={{
              width: "16px",
              height: "16px",
              marginLeft: "13px",
              alignItems: "center",
              flexDirection: "column",
              fontSize: "14px",
              fontWeight: 300,
            }}
          />
          <Button
          onClick={handleLogout}
            sx={{
              borderRadius: "8px",
              ":hover": {
                backgroundColor: "#e5e7eb",
              },
              padding: 1,
              display: "flex",
              gap: "18px",
              alignItems: "center",
              color: "rgb(15, 21, 31)",
              textDecoration: "none",
              cursor: "pointer",
             
            }}
          >
            Logout
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default SideBar