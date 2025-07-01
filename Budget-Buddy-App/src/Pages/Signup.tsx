import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  IconButton,
  Link,
  TextField,
  Typography
} from '@mui/material';
import React, { useState } from 'react';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../Firebase';

const Signup = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async () => {
    setError('');

    if (!fullName || !email || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/login');
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/'); // or wherever you want to redirect
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          backgroundColor: '#F6FBFF',
          px: 2
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mb: 3
          }}
        >
          <IconButton
            sx={{
              background: 'linear-gradient(to right, rgb(71, 85, 105), rgb(37, 99, 235))',
              color: '#fff',
              mr: 1
            }}
          >
            <AccountBalanceWalletIcon />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 'bold',
              fontSize: '2rem',
              letterSpacing: '0.5px',
              background: 'linear-gradient(to right, rgb(71, 85, 105), rgb(37, 99, 235))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontFamily: 'ui-sans-serif, system-ui, sans-serif'
            }}
          >
            FinanceFlow
          </Typography>
        </Box>

        <Container
          maxWidth="xs"
          sx={{
            border: '1px solid #ccc',
            borderRadius: 2,
            padding: 3,
            boxShadow: 3,
            backgroundColor: '#fff'
          }}
        >
          <Typography sx={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }} variant="h5" align="center">
            Join FinanceFlow!
          </Typography>
          <Typography sx={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }} component="p" fontSize={"14px"} align="center" mt={1}>
            Create your account and start your financial journey
          </Typography>

          <Box className="form-content">
            <label
              htmlFor="text"
              style={{ display: "block", marginTop: 30, marginBottom: 4, fontWeight: 500, fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
            >
              Full Name
            </label>
            <TextField
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              sx={{
                fontSize: 16,
                border: "1px solid #ccc",
                fontFamily: "ui-sans-serif, system-ui, sans-serif"
              }}
              fullWidth
              size='small'
              margin="dense"
              type="text"
              placeholder="Enter your Full Name"
            />
          </Box>

          <Box className="form-content">
            <label
              htmlFor="email"
              style={{ display: "block", marginTop: 10, marginBottom: 4, fontWeight: 500, fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
            >
              Email Address
            </label>
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                fontSize: 16,
                border: "1px solid #ccc",
                fontFamily: "ui-sans-serif, system-ui, sans-serif"
              }}
              fullWidth
              size='small'
              margin="dense"
              type="email"
              placeholder="Enter your Email"
            />
          </Box>

          <Box className="form-content">
            <label
              htmlFor="text"
              style={{ display: "block", marginTop: 10, marginBottom: 4, fontWeight: 500, fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
            >
              Password
            </label>
            <TextField
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                fontSize: 16,
                fontFamily: "ui-sans-serif, system-ui, sans-serif",
                border: "1px solid #ccc"
              }}
              fullWidth
              margin="dense"
              type="password"
              placeholder="Enter your Password"
              size='small'
            />
          </Box>

          <Box className="form-content">
            <label
              htmlFor="text"
              style={{ display: "block", marginTop: 10, marginBottom: 4, fontWeight: 500, fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
            >
              Confirm Password
            </label>
            <TextField
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              sx={{
                fontSize: 16,
                fontFamily: "ui-sans-serif, system-ui, sans-serif",
                border: "1px solid #ccc"
              }}
              fullWidth
              size='small'
              margin="dense"
              type="password"
              placeholder="Confirm your Password"
            />
          </Box>

          {error && (
            <Typography sx={{ color: 'red', mt: 2, textAlign: 'center', fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>
              {error}
            </Typography>
          )}

          <Button
            onClick={handleSignup}
            variant="contained"
            fullWidth
            size='small'
            sx={{
              mt: 1,
              background: "linear-gradient(to right, rgb(71, 85, 105), rgb(37, 99, 235))",
              borderRadius: "5px",
              fontFamily: "ui-sans-serif, system-ui, sans-serif",
              marginTop: "13px"
            }}
          >
            Sign Up
          </Button>

          <Button
            onClick={handleGoogleSignIn}
            fullWidth
            size='small'
            variant="outlined"
            sx={{
              mt: 2,
              color: 'rgb(37, 99, 235)',
              borderColor: 'rgb(37, 99, 235)',
              textTransform: 'none',
              fontWeight: 500,
              fontFamily: "ui-sans-serif, system-ui, sans-serif"
            }}
          >
            Continue with Google
          </Button>

          <Typography
            textAlign={"center"}
            sx={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
            fontSize={"15px"}
            mt={"7px"}
          >
            Already have an account?{" "}
            <Link href="/login" underline="hover" mt={"10px"}>
              Log In
            </Link>
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default Signup;
