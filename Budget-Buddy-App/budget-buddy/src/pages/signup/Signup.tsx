import { Box, Paper, Typography, Link} from "@mui/material";
import React from "react";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import "./Signup.css";

const Signup: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 3,
        height: "80vh",
        backgroundColor: "#f7f9fc",
        px: 2,
        py: 4,
      }}
    >
      {/* Header Section */}
      <Box className="header">
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            width: 40,
            height: 40,
            background:
              "linear-gradient(to right, rgb(71, 85, 105), rgb(37, 99, 235))",
          }}
        >
          <AccountBalanceWalletIcon sx={{ color: "#fff" }} />
        </Box>
        <Typography
          variant="h6"
          component="span"
          sx={{ fontWeight: 700, fontSize: "28px" }}
        >
          Finance Flow
        </Typography>
      </Box>

      {/* Signup Form */}
      <Box className="mainForm">
        <Paper
          elevation={3}
          variant="outlined"
          sx={{
            width: "100%",
            maxWidth: 480,
            padding: "32px 28px",
            borderRadius: 3,
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
          }}
        >
          <Box id="sub-heading">
            <Typography variant="h5" fontWeight={600}>
              Join FinanceFlow!
            </Typography>
            <Typography variant="body2">
              Create your account and start your financial journey
            </Typography>
          </Box>

          <Box className="firstName">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" name="fullName" />
          </Box>

          <Box className="email">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" />
          </Box>

          <Box className="password">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </Box>

          <Box className="confirm-password">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
            />
          </Box>

          <Box className="signupBtn">
            <button type="submit">Sign Up</button>
          </Box>

          <Box className="linkToLogin">
            <Typography
              variant="body2"
              textAlign="center"
              mt={3}
              color="text.secondary"
            >
             Already have an account?{" "}
              <Link href="/login" underline="hover">
                Login
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Signup;
