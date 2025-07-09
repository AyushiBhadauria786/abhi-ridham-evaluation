import { Box, Paper, Typography, Link, IconButton } from "@mui/material";
import React, { useState } from "react";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import "./Signup.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { AppDispatch, RootState } from "../../redux/store";
import { registerUser } from "../../redux/authSlice";
import { toast } from "react-toastify";
import { useForm, Controller } from "react-hook-form";
import type { AuthPayload } from "../../types";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";

const Signup: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { loading, error: reduxError } = useSelector(
    (state: RootState) => state.auth
  );

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<AuthPayload>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });

  const passwordValue = watch("password");

  const onSubmit = (data: AuthPayload) => {
    dispatch(registerUser(data))
      .unwrap()
      .then(() => {
        toast.success("Registration successful!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
        });
        navigate("/login");
      })
      .catch((err) => {
        toast.error(err || "Something went wrong!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
        });
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
        onSubmit={handleSubmit(onSubmit)}
        elevation={3}
        sx={{
          width: "100%",
          maxWidth: 480,
          padding: "32px 28px",
          borderRadius: 3,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
        }}
      >
        <Box id="sub-heading" mb={3}>
          <Typography variant="h5" fontWeight={600}>
            Join FinanceFlow!
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Create your account and start your financial journey
          </Typography>
        </Box>

        <Box className="firstName" sx={{ mb: 2 }}>
          <label htmlFor="fullName">Full Name</label>
          <Controller
            name="fullName"
            control={control}
            rules={{ required: "Full Name is required." }}
            render={({ field }) => (
              <input type="text" id="fullName" {...field} />
            )}
          />
          {errors.fullName && (
            <Typography color="error" variant="caption" mt={1}>
              {errors.fullName.message}
            </Typography>
          )}
        </Box>

        <Box className="email" sx={{ mb: 2 }}>
          <label htmlFor="email">Email Address</label>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email is required.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address.",
              },
            }}
            render={({ field }) => <input type="email" id="email" {...field} />}
          />
          {errors.email && (
            <Typography color="error" variant="caption" mt={1}>
              {errors.email.message}
            </Typography>
          )}
        </Box>

        <Box className="password" sx={{ mb: 2 }}>
          <label htmlFor="password">Password</label>
          <Box className="input-wrapper">
            <Controller
              name="password"
              control={control}
              rules={{
                required: "Password is required.",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long.",
                },
                validate: {
                  noSpaces: (value) =>
                    !value.includes(" ") || "Password cannot contain spaces.",
                  hasUpperCase: (value) =>
                    [...value].some((char) => char >= "A" && char <= "Z") ||
                    "Must contain at least one uppercase letter.",
                  hasLowerCase: (value) =>
                    [...value].some((char) => char >= "a" && char <= "z") ||
                    "Must contain at least one lowercase letter.",
                  hasNumber: (value) =>
                    [...value].some((char) => char >= "0" && char <= "9") ||
                    "Must contain at least one number.",
                  hasSpecialChar: (value) => {
                    const specialChars = `\`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`;
                    return (
                      [...value].some((char) => specialChars.includes(char)) ||
                      "Must contain at least one special character."
                    );
                  },
                },
              }}
              render={({ field }) => (
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  {...field}
                />
              )}
            />
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShowPassword((show) => !show)}
              sx={{padding: 2}}
              edge="end"
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

        <Box className="confirm-password" sx={{ mb: 3 }}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <Box className="input-wrapper">
            <Controller
              name="confirmPassword"
              control={control}
              rules={{
                required: "Please confirm your password.",
                validate: (value) =>
                  value === passwordValue || "Passwords do not match.",
              }}
              render={({ field }) => (
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  {...field}
                />
              )}
            />
            <IconButton
              aria-label="toggle confirm password visibility"
              onClick={() => setShowConfirmPassword((show) => !show)}
              sx={{padding: 2}}
              edge="end"
            >
              {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </Box>
          {errors.confirmPassword && (
            <Typography color="error" variant="caption" mt={1}>
              {errors.confirmPassword.message}
            </Typography>
          )}
        </Box>

        {reduxError && (
          <Typography color="error" variant="body2" textAlign="center" mb={2}>
            {reduxError}
          </Typography>
        )}

        <Box className="signupBtn">
          <button type="submit" disabled={loading}>
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </Box>

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
      </Paper>
    </Box>
  );
};

export default Signup;
