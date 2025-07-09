import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
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
import { useForm, Controller } from "react-hook-form";
import type { User } from "../types";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";

const LoginPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state: RootState) => state.auth);

  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Pick<User, "email" | "password">>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = (data: Pick<User, "email" | "password">) => {
    dispatch(loginUser(data))
      .unwrap()
      .then(() => {
        toast.success("Login Successful!", { position: "top-right",closeOnClick: true, autoClose: 3000 });
        navigate("/dashboard");
      })
      .catch((err) => {
        toast.error(err || "Something went wrong, Please Try Again!!", {
          position: "top-right",closeOnClick: true, autoClose: 3000
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
        onSubmit={handleSubmit(handleLogin)}
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
          <Controller
            name="email"
            control={control}
            rules={{ required: "Email is required." }}
            render={({ field }) => (
              <input
                id="email"
                type="email"
                {...field}
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
            )}
          />
          {errors.email && (
            <Typography color="error" variant="caption" mt={1}>
              {errors.email.message}
            </Typography>
          )}
        </Box>

        <Box sx={{ mb: 2 }}>
          <label
            htmlFor="password"
            style={{ display: "block", marginBottom: 6, fontWeight: 500 }}
          >
            Password
          </label>
          <Box sx={{ position: "relative" }}>
            <Controller
              name="password"
              control={control}
              rules={{ required: "Password is required." }}
              render={({ field }) => (
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  {...field}
                  style={{
                    width: "100%",
                    padding: "10px 40px 10px 12px",
                    borderRadius: 8,
                    border: "1px solid #ccc",
                    backgroundColor: "#eef3fd",
                    fontSize: 14,
                    outline: "none",
                  }}
                />
              )}
            />
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShowPassword((show) => !show)}
              edge="end"
              sx={{
                position: "absolute",
                right: "8px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </Box>
          {errors.password && (
            <Typography color="error" variant="caption" mt={1}>
              {errors.password.message}
            </Typography>
          )}
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
