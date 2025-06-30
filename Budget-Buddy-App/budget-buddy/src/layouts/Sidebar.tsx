import { Box, Button, IconButton, Link, Typography } from "@mui/material";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../redux/store";
import { logout } from "../redux/authSlice";

interface SidebarProps {
  isSidebarOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen }) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/home');
  }

  const sideBarLinks = [
    {
      icon: "./src/assets/Images/homeicon.png",
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: "/src/assets/Images/plusicon.png",
      name: "Add Transaction",
      path: "/add-transaction",
    },
    {
      icon: "/src/assets/Images/listicon.png",
      name: "Transactions",
      path: "/transaction",
    },
    {
      icon: "/src/assets/Images/chart-pie-icon.png",
      name: "Budget",
      path: "/budget",
    },
    {
      icon: "/src/assets/Images/chart-column.png",
      name: "Reports",
      path: "/reports",
    },
    {
      icon: "/src/assets/Images/mail-icon.png",
      name: "Contact",
      path: "/contact",
    },
    {
      icon: "/src/assets/Images/circle-help-icon.png",
      name: "FAQ",
      path: "/faq",
    },
  ];

  return (
    <>
      <Box
        component="aside"
        sx={{
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "6px",
          boxSizing: "border-box",
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: "24px",
          borderRight: "1px solid rgb(218, 224, 231);",
          width: isSidebarOpen ? "250px" : "100px",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          // zIndex: 1200,
          backgroundColor: "#fff",
          transition: "width 0.2s ease-in-out",
          overflowX: "hidden",
        }}
      >
        <Box
          sx={{
            p: 2,
            display: "flex",
            alignItems: "center",
            gap: 1,
            flexShrink: 0
          }}
        >
          <IconButton
            disableRipple
            sx={{
              background:
                "linear-gradient(to right, rgb(71, 85, 105), rgb(37, 99, 235))",
              color: "#fff",
              width: "40px",
              height: "40px",
              borderRadius: "12px",
              flexShrink: 0,
            }}
          >
            <img
              src="/src/assets/Images/wallet.png"
              alt="wallet"
              style={{
                height: "20px",
              }}
            />
          </IconButton>
          {isSidebarOpen && (
          <Typography variant="h6" component="span" sx={{ fontWeight: "bold", whiteSpace: 'nowrap' }}>
            Finance<span style={{ fontWeight: 300 }}>Flow</span>
          </Typography>
        )}
      </Box>

      <Box sx={{ flexGrow: 1, p: 1, overflowY: 'auto', overflowX: 'hidden'  }}>
        <Box component="nav" sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 2 }}>
          {sideBarLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              style={({ isActive }) => ({
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "10px 16px",
                color: isActive ? "rgb(37, 99, 235)" : "rgb(51, 65, 85)",
                backgroundColor: isActive ? "rgba(37, 99, 235, 0.1)" : "transparent",
                textDecoration: "none",
                borderRadius: "8px",
                fontWeight: 500
              })}
            >
              <img src={item.icon} alt={`${item.name} icon`} style={{ width: "20px", height: "20px" }} />
              {isSidebarOpen && <Typography variant="body2" sx={{whiteSpace: 'nowrap'}}>{item.name}</Typography>}
            </NavLink>
          ))}
        </Box>
      </Box>

        {/* Logout button */}
        <Box sx={{ p: 1, borderTop: "1px solid #E2E8F0", flexShrink: 0 }}>
        <Button
          fullWidth
          onClick={handleLogout}
          sx={{
            justifyContent: isSidebarOpen ? 'flex-start' : 'center',
            color: "rgb(51, 65, 85)",
            textTransform: 'none',
            gap: 2,  
            p: 1,
            ":hover": { backgroundColor: "#f8fafc" },
          }}
        >
          <LogoutIcon />
          {isSidebarOpen && 'Logout'}
        </Button>
      </Box>
    </Box>
    </>
  );
};

export default Sidebar;
