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
        height: "4rem",
      }}
    >
      <Toolbar
        sx={{ display: "flex", justifyContent: "space-between", padding: 2 }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "10px 100px 10px 100px",
          }}
        >
          <IconButton
            disableRipple
            disableFocusRipple
            disableTouchRipple
            sx={{
              background:
                "linear-gradient(to right, rgb(71, 85, 105), rgb(37, 99, 235))",
              color: "#fff",
              mr: 1,
              width: "40px",
              height: "40px",
              borderRadius: "12px",
            }}
          >
            <img
              src="/src/assets/Images/wallet.png"
              alt="wallet"
              style={{
                borderRadius: 6,
                width: "40px",
                height: "20px",
                justifyContent: "center",
                alignItems: "center",
              }}
            />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: "bold", color: "#0F172A" }}
          >
            Finance<span style={{ fontWeight: 500 }}>Flow</span>
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            padding: "10px 100px 10px 100px",
          }}
        >
          <Button
            variant="text"
            onClick={() => navigate("/login")}
            sx={{ color: "#5980A6", fontWeight: 500 }}
          >
            Login
          </Button>
          <Button
            variant="contained"
            sx={{
              background:
                "rgb(89, 128, 166) linear-gradient(to right, rgb(71, 85, 105), rgb(37, 99, 235));",
              boxShadow:
                "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px;",
              fontWeight: 500,
              fontSize: "14px",
              lineHeight: "20px",
              padding: "8px 16px",
              boxSizing: "border-box",
            }}
            onClick={() => navigate("/login")}
          >
            Get Started
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
