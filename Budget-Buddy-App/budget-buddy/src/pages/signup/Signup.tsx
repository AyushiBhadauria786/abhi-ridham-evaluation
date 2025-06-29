import { Box, Paper, Typography, Link } from "@mui/material";
import React, { useState } from "react";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import "./Signup.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { AppDispatch, RootState } from "../../redux/store";
import { registerUser } from "../../redux/authSlice";

const Signup: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { loading, error: reduxError } = useSelector(
    (state: RootState) => state.auth
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!fullName || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Password do not match.");
      return;
    }

    dispatch(registerUser({ fullName, email, password }))
      .unwrap()
      .then(() => {
        alert("Registration successful! Please login.");
        navigate("/login");
      })
      .catch((err) => {
        setError(err);
      });
  };

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
      <Paper
        component="form"
        onSubmit={handleSubmit}
        elevation={3}
        sx={{ width: "100%", maxWidth: 480, padding: "32px 28px", borderRadius: 3, boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)" }}
      >
        <Box id="sub-heading" mb={3}>
          <Typography variant="h5" fontWeight={600}>Join FinanceFlow!</Typography>
          <Typography variant="body2" color="text.secondary">Create your account and start your financial journey</Typography>
        </Box>

        <Box className="firstName" sx={{mb: 2}}>
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" name="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        </Box>

        <Box className="email" sx={{mb: 2}}>
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Box>

        <Box className="password" sx={{mb: 2}}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Box>

        <Box className="confirm-password" sx={{mb: 3}}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </Box>
        
        {error && <Typography color="error" variant="body2" textAlign="center" mb={2}>{error}</Typography>}
        {reduxError && !error && <Typography color="error" variant="body2" textAlign="center" mb={2}>{reduxError}</Typography>}

        <Box className="signupBtn">
          <button type="submit" disabled={loading}>{loading ? 'Signing Up...' : 'Sign Up'}</button>
        </Box>

        <Typography variant="body2" textAlign="center" mt={3} color="text.secondary">
          Already have an account?{" "}
          <Link href="/login" underline="hover">Login</Link>
        </Typography>
      </Paper>
    </Box>
  );
};


export default Signup;
