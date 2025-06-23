import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const Header: React.FC = () => {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "#F8FAFC",
        borderBottom: "1px solid #E2E8F0",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton sx={{ backgroundColor: "#14B8A6", color: "#fff", mr: 1 }}>
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
          <Button variant="text" sx={{ color: "#14B8A6", fontWeight: 500 }}>
            Login
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor:  '#14B8A6', color: '#fff', fontWeight: 500 }}
          >
            Get Started
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
