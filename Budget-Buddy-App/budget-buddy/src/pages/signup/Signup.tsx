import { Box, IconButton, Paper, Typography } from "@mui/material";
import React from "react";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import './Signup.css'

const Signup = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 3,
        height: "80vh",
      }}
    >
      <div className="header">
        <div>
          <IconButton sx={{ backgroundColor: "#5980A6", color: "#fff", mr: 1 }}>
            <AccountBalanceWalletIcon />
          </IconButton>
          <span>Finance Flow</span>
        </div>
      </div>

      <div className="mainForm">
        <Paper elevation={3} variant="outlined">
          <div id="sub-heading">
            <Typography variant="h5">Join FinanceFlow!</Typography>
            <Typography variant="body2">
              Create your account and start your financial journey
            </Typography>
          </div>

          <div
            className="firstName"
          >
            <label>Full Name</label>
            <input type="text" />
          </div>

          <div className="email">
            <label>Email Address</label>
            <input type="email" />
          </div>

          <div className="password">
            <label>Password</label>
            <input type="password" />
          </div>

          <div className="confirm-password">
            <label>Confirm Password</label>
            <input type="password" />
          </div>

          <div className="signupBtn">
            <button>Sign Up</button>
          </div>

          <div className="linkToLogin">
            <a href="">Already have an account? Login</a>
          </div>
        </Paper>
      </div>
    </Box>
  );
};

export default Signup;
