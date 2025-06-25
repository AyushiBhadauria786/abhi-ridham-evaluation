import { Box, Button, IconButton, Link, Typography } from "@mui/material";
import React from "react";

const Sidebar = () => {
  const sideBarLinks = [
    {
      icon: "./src/assets/Images/homeicon.png",
      name: "Dashbord",
    },
    {
      icon: "/src/assets/Images/plusicon.png",
      name: "Add Transaction",
    },
    {
      icon: "/src/assets/Images/listicon.png",
      name: "Transactions",
    },
    {
      icon: "/src/assets/Images/chart-pie-icon.png",
      name: "Budget",
    },
    {
      icon: "/src/assets/Images/chart-column.png",
      name: "Reports",
    },
    {
      icon: "/src/assets/Images/mail-icon.png",
      name: "Contact",
    },
    {
      icon: "/src/assets/Images/circle-help-icon.png",
      name: "FAQ",
    },
  ];

  return (
    <>
      <Box
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
          width:"250px",
          height:"100vh",
          position:"relative"

        }}
      >
        <Box
          sx={{
            padding: "6px",
            boxSizing: "border-box",
            alignItems: "center",
            borderRadius: "12px",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "24px",
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
          <Typography variant="h6" component="span" sx={{ fontWeight: "bold" }}>
            Finance<span style={{ fontWeight: 300 }}>Flow</span>
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: "4px",
          }}
        >
          <Box sx={{ padding: "8px" }}>
            <Typography
              variant="body2"
              sx={{ color: "rgb(71 85 105 / var(--tw-text-opacity, 1))", borderTop: "1px solid rgb(218, 224, 231);" }}
            >
              Navigation
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", margin: 1 }}>
              {sideBarLinks.map((item) => (
                <Link
                  sx={{
                    padding: 1,
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    color: "rgb(30, 41, 59)",
                    textDecoration: "none",
                    cursor: "pointer",
                    ":hover": {
                      backgroundColor: "#e5e7eb",
                    },
                  }}
                >
                  <img
                    src={item.icon}
                    alt="icons"
                    style={{
                      width: "16px",
                      height: "16px",
                      fontSize: "14px",
                      fontWeight: 500,
                      lineHeight: "20px",
                      textAlign: "left",
                    }}
                  />
                  {item.name}
                </Link>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Logout button */}
      <Box
        sx={{ display: "flex", alignItems: "center", gap: "8px", padding: 2,position:"absolute",bottom:"0px", borderTop: "1px solid rgb(218, 224, 231);" }}
      >
        <img
          src="/src/assets/Images/logout-icon.png"
          alt="logout"
          style={{
            width: "16px",
            height: "16px",
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "20px",
            textAlign: "left",
          }}
        />
        <Button
          sx={{
            padding: 1,
            display: "flex",
            gap: "5px",
            alignItems: "center",
            color: "rgb(30, 41, 59)",
            textDecoration: "none",
            ":hover": {
              backgroundColor: "#e5e7eb",
            },
          }}
        >
          Logout
        </Button>
      </Box>
      </Box>

      
    </>
  );
};

export default Sidebar;
