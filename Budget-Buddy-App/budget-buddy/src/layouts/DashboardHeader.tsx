import { Avatar, Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation } from "react-router-dom";

interface DashboardHeaderProps {
  handleSidebarToggle: () => void;
}

const user = JSON.parse(localStorage.getItem("user") || "{}");
const fullName = user.fullName || "User";
const firstLetter = fullName.charAt(0).toUpperCase();


const getHeadingFromPathname = (pathname: string): string => {
  const name = pathname.split("/").pop()?.replace("-", " ");
  if (!name) return "Dashboard";

  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  handleSidebarToggle,
}) => {
  const location = useLocation();
  const pageTitle = getHeadingFromPathname(location.pathname);

  return (
    <Box
      component="header"
      sx={{
        padding: "8px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #E2E8F0",
        height: "64px",
        bgcolor: "#fff",
        top: 0,
        // flexGrow:1
        flexShrink: 0
        // zIndex: 1100,
      }}
    >
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <IconButton onClick={handleSidebarToggle} edge="start">
            <MenuIcon />
        </IconButton>
        <Typography variant="h6" fontWeight={600} color="text.primary">
            {pageTitle}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: 'center', gap: 1.5 }}>
        <Avatar sx={{ bgcolor: "primary.main" }}>{firstLetter}</Avatar>
        <Box>
          <Typography variant="subtitle2" fontWeight={600}>{fullName}</Typography>
          <Typography variant="caption" color="text.secondary">Member</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardHeader;
