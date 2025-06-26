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
import React from 'react';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const LoginPage = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',      // vertical center
          minHeight: '100vh',            // full height of viewport
          backgroundColor: '#F6FBFF',    // optional background
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
          <Typography sx={{fontFamily: "ui-sans-serif, system-ui, sans-serif"}} variant="h5" align="center">
            Welcome back!
          </Typography>
          <Typography sx={{fontFamily: "ui-sans-serif, system-ui, sans-serif"}} component="p" fontSize={"14px"} align="center" mt={1}>
            Sign in to your account to continue managing your finances
          </Typography>

          <Box className="form-content">
          <label
            htmlFor="email"
            style={{ display: "block", marginTop:30, marginBottom: 4, fontWeight: 500,fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
          >
            Email Address
          </label>
            <TextField
              sx={{
                // height:"5px",
                fontSize : 16,
                border: "1px solid #ccc",
                fontFamily: "ui-sans-serif, system-ui, sans-serif"
              }}
              
              fullWidth
              margin="dense"
              type="email"
              placeholder="Enter your Email"
            />
          </Box>

          <Box className="form-content">
          <label
            htmlFor="email"
            style={{ display: "block", marginTop:10, marginBottom: 4, fontWeight: 500,fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
          >
            Password
          </label>
            <TextField
            sx={{
              // height:"5px",
              fontSize : 16,
              fontFamily: "ui-sans-serif, system-ui, sans-serif",
              border: "1px solid #ccc"
            }}
              fullWidth
              margin="dense"
              type="password"
              placeholder="Enter your Password"
            />
          </Box>


          <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mt: "10px",
            mb: "10px",
            justifyContent: "space-between",
          }}
        >
          <FormControlLabel
            control={<Checkbox size="small" />}
            label={<Typography sx={{fontFamily: "ui-sans-serif, system-ui, sans-serif"}} variant="body2">Remember me</Typography>}
          />
          <Link href="" underline="hover" fontSize={"15px"}>
            Forgot password ?
          </Link>
        </Box>


          <Button  variant="contained" fullWidth sx={{ mt: 1,background:
              "linear-gradient(to right, rgb(71, 85, 105), rgb(37, 99, 235))",borderRadius:"5px",fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>
            Log In
          </Button>

          <Typography
          textAlign={"center"}
          sx={{fontFamily: "ui-sans-serif, system-ui, sans-serif"}}
          fontSize={"15px"}
          mt={"7px"}
          >
            Don't have an account ? {" "}
          
          <Link href="/signup" underline="hover" mt={"10px"}>
            Sign Up
          </Link>
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default LoginPage;
