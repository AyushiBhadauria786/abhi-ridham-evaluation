import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  Paper
} from '@mui/material';
import { LockOutlined, Visibility, VisibilityOff } from '@mui/icons-material';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
 
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
    <Box>
    <Typography>Finance Flow</Typography>
    </Box>
    <Container component="main" maxWidth="xs">
      <Paper 
        elevation={3} 
        sx={{ 
            p: 4, 
            mt: 8, 
            borderRadius: 2,
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            border: '2px solid black'
        }}
        >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <IconButton 
            sx={{ 
                m: 1, 
                bgcolor: 'primary.main', 
                color: 'white',
                '&:hover': {
                bgcolor: 'primary.dark'
              }
            }}
          >
            <LockOutlined />
          </IconButton>
          <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
            Login
          </Typography>
          {error && (
            <Typography color="error" sx={{ mt: 2, mb: 2, textAlign: 'center' }}>
              {error}
            </Typography>
          )}
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, width: '100%' }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mb: 2 }}
              />
            <Box sx={{ position: 'relative', mb: 2 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <IconButton
                aria-label="toggle password visibility"
                onClick={togglePasswordVisibility}
                edge="end"
                sx={{
                    position: 'absolute',
                    right: 10,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    marginTop: 1
                }}
                >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ 
                  mt: 3, 
                  mb: 2,
                  py: 1.5,
                fontWeight: 'bold',
                borderRadius: 1
              }}
            >
              Login
            </Button>
            {/* <GoogleSignIn status="login" /> */}
            <Box sx={{ textAlign: 'center', mt: 2 }}>
              <Link to="/register" style={{ textDecoration: 'none' }}>
                <Typography variant="body2" color="primary" sx={{ fontWeight: 'medium' }}>
                  Don't have an account? Sign Up
                </Typography>
              </Link>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Container>
    </>
  );
};

export default Login;