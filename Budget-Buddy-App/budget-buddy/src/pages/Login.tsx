import React, { useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { AppDispatch, RootState } from "../redux/store";
import { loginUser } from "../redux/authSlice";
import { toast } from "react-toastify";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state: RootState) => state.auth);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.warning("Please enter email and password.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
      });
      return;
    }
    dispatch(loginUser({ email, password }))
      .unwrap()
      .then(() => {
        toast.success("Loggin Successful!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
        });
        navigate("/dashboard");
      })
      .catch((err) => {
        toast.error("Something went wrong,Please Try Again!!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
        });
        console.error("Failed to login:", err);
      });
  };

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
        component="form"
        onSubmit={handleLogin}
        elevation={3}
        sx={{
          padding: 4,
          width: "100%",
          maxWidth: 420,
          borderRadius: 3,
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        }}
      >
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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

        {error && (
          <Typography color="error" variant="body2" textAlign="center" my={2}>
            {error}
          </Typography>
        )}

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

        <Button
          fullWidth
          type="submit"
          variant="contained"
          disabled={loading}
          sx={{
            background:
              "linear-gradient(to right, rgb(71, 85, 105), rgb(37, 99, 235))",
            textTransform: "none",
            fontWeight: "bold",
            fontSize: "16px",
            py: 1.3,
            borderRadius: 2,
            ":hover": { backgroundColor: "rgb(55, 65, 81)" },
          }}
        >
          {loading ? "Logging in..." : "Login"}
        </Button>

        <Typography
          variant="body2"
          textAlign="center"
          mt={3}
          color="text.secondary"
        >
          Don't have an account?{" "}
          <Link href="/signup" underline="hover">
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default LoginPage;
