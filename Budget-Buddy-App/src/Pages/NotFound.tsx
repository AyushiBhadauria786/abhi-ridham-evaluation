import { Box, Link, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        minHeight: "100vh",
        gap: 2,
      }}
    >
      <Typography variant="h3">404</Typography>
      <Typography variant="h5">Oops! Page not found</Typography>
      <Link href="/">Return to Home</Link>
    </Box>
  );
};

export default NotFound;