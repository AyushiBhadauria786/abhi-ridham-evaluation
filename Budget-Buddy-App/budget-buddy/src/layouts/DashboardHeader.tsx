import { Avatar, Button, Typography } from "@mui/material";
import React from "react";

const DashboardHeader = () => {
  return (
    <div
      style={{
        padding: "1px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontWeight: 400,
        borderBottom: "1px solid black",
      }}
    >
      <div
        style={{  
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "12px",
        }}
      >
        <Button sx={{  }}>
          <img
            src="/src/assets/Images/panel-left.png"
            alt="panel"
            style={{ width: "14px", height: "14px" }}
          />
        </Button>
        <Typography>Dynamic heading</Typography>
      </div>
      <div style={{ paddingTop: "12px", display: "flex", gap: "10px" }}>
        <Avatar sx={{ bgcolor: "" }}>JD</Avatar>
        <div style={{ gap: "0px" }}>
          <Typography variant="body2">John Doe</Typography>
          <Typography component="span">Member</Typography>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
