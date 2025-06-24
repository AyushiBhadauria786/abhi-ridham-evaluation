import React from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const LoginPage: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f7f9fc",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          mb: 4,
        }}
      >
        <Box
          sx={{
            width: 50,
            height: 50,
            background:
              "linear-gradient(to right, rgb(71, 85, 105), rgb(37, 99, 235))",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AccountBalanceWalletIcon sx={{ color: "#fff", fontSize: 28 }} />
        </Box>
        <Typography variant="h5" fontWeight={700} color="rgb(51, 65, 85)">
          FinanceFlow
        </Typography>
      </Box>

      {/* Form Container */}
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          width: "100%",
          maxWidth: 420,
          borderRadius: 3,
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        }}
      >
        {/* Welcome Text */}
        <Typography variant="h5" fontWeight={700} textAlign="center" mb={1}>
          Welcome Back!
        </Typography>
        <Typography
          variant="body2"
          textAlign="center"
          color="text.secondary"
          mb={3}
        >
          Sign in to your account to continue managing your finances
        </Typography>

        {/* Email */}
        <Box sx={{ mb: 2 }}>
          <label
            htmlFor="email"
            style={{ display: "block", marginBottom: 6, fontWeight: 500 }}
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            style={{
              width: "100%",
              padding: "10px 12px",
              borderRadius: 8,
              border: "1px solid #ccc",
              backgroundColor: "#eef3fd",
              fontSize: 14,
              outline: "none",
            }}
          />
        </Box>

        {/* Password */}
        <Box sx={{ mb: 2 }}>
          <label
            htmlFor="password"
            style={{ display: "block", marginBottom: 6, fontWeight: 500 }}
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            style={{
              width: "100%",
              padding: "10px 12px",
              borderRadius: 8,
              border: "1px solid #ccc",
              backgroundColor: "#eef3fd",
              fontSize: 14,
              outline: "none",
            }}
          />
        </Box>

        {/* Forgot section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: 1,
            mb: 2,
          }}
        >
          <FormControlLabel
            control={<Checkbox size="small" />}
            label={<Typography variant="body2">Remember me</Typography>}
          />
          <Link href="#" underline="hover" fontSize={14}>
            Forgot password?
          </Link>
        </Box>

        {/* Login Button */}
        <Button
          fullWidth
          variant="contained"
          sx={{
            background:
              "linear-gradient(to right, rgb(71, 85, 105), rgb(37, 99, 235))",
            textTransform: "none",
            fontWeight: "bold",
            fontSize: "16px",
            py: 1.3,
            borderRadius: 2,
            ":hover": {
              backgroundColor: "rgb(55, 65, 81)",
            },
          }}
        >
          Login
        </Button>

        {/* Sign Up Link */}
        <Typography
          variant="body2"
          textAlign="center"
          mt={3}
          color="text.secondary"
        >
          Don&apos;t have an account?{" "}
          <Link href="/signup" underline="hover">
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default LoginPage;
