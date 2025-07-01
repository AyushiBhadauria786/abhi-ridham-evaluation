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
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  // 1. State for form
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // 2. Form submit handler
  const handleLogin = async () => {
    setError('');

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    


    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard'); // Redirect after login
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
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <IconButton sx={{ background: 'linear-gradient(to right, rgb(71, 85, 105), rgb(37, 99, 235))', color: '#fff', mr: 1 }}>
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
            Welcome back!
          </Typography>
          <Typography sx={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }} component="p" fontSize={"14px"} align="center" mt={1}>
            Sign in to your account to continue managing your finances
          </Typography>

          
          <Box className="form-content">
            <label htmlFor="email" style={{ display: "block", marginTop: 30, marginBottom: 4, fontWeight: 500, fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>
              Email Address
            </label>
            <TextField
              fullWidth
              size='small'
              margin="dense"
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ fontSize: 16, border: "1px solid #ccc", fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
            />
          </Box>

        
          <Box className="form-content">
            <label htmlFor="password" style={{ display: "block", marginTop: 10, marginBottom: 4, fontWeight: 500, fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>
              Password
            </label>
            <TextField
              fullWidth
              size='small'
              margin="dense"
              type="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ fontSize: 16, fontFamily: "ui-sans-serif, system-ui, sans-serif", border: "1px solid #ccc" }}
            />
          </Box>

      
          <Box sx={{ display: "flex", alignItems: "center", mt: "10px", mb: "10px", justifyContent: "space-between" }}>
            <FormControlLabel
              control={<Checkbox size="small" />}
              label={<Typography sx={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }} variant="body2">Remember me</Typography>}
            />
            <Link href="#" underline="hover" fontSize={"15px"}>
              Forgot password?
            </Link>
          </Box>

        
          {error && (
            <Typography sx={{ color: "red", fontSize: "14px", mb: 1, fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>
              {error}
            </Typography>
          )}

    
          <Button
            onClick={handleLogin}
            variant="contained"
            fullWidth
            sx={{
              mt: 1,
              background: "linear-gradient(to right, rgb(71, 85, 105), rgb(37, 99, 235))",
              borderRadius: "5px",
              fontFamily: "ui-sans-serif, system-ui, sans-serif"
            }}
          >
            Log In
          </Button>

          
          <Typography textAlign={"center"} fontSize={"15px"} mt={"7px"} sx={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>
            Don't have an account? <Link href="/signup" underline="hover">Sign Up</Link>
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default LoginPage;
