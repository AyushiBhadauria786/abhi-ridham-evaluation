import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  linearProgressClasses,
} from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {

      const navigate = useNavigate();

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "#F8FAFC",
        borderBottom: "1px solid #E2E8F0",
        height: "4rem"
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", padding: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton sx={{ backgroundColor: "#5980A6", color: "#fff", mr: 1, }}>
            <AccountBalanceWalletIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: "bold", color: "#0F172A" }}
          >
            Finance<span style={{ fontWeight: 500 }}>Flow</span>
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button variant="text" onClick={() => navigate('/login')} sx={{ color: "#5980A6", fontWeight: 500}}>
            Login
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor:  '#5980A6', color: '#fff', fontWeight: 500 }}
          >
            Get Started
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
