import { Box, Card, CardContent, Grid } from "@mui/material";
import React from "react";

const BalanceDisplayCard = () => {
  const budget = [
    {
      heading: "Current Balance",
      logo: "",
      balance: "5000",
      description: "As of June,2025",
    },
    {
      heading: "Total Monthly Budget",
      logo: "",
      balance: "0",
      description: "As of June,2025",
    },
    {
      heading: "Total Montly Expenses",
      logo: "",
      balance: "0",
      description: "As of June,2025",
    },
    {
      heading: "Remaining Monthly Budget",
      logo: "",
      balance: "0",
      description: "As of June,2025",
    },
  ];

  return (
    <Box sx={{ display: "flex", padding: "8px", mt: "8px", gap: "10px" }}>
      {budget.map((item) => (
        <Grid  mt={2} gap={2} size={4}>
          <Card
            sx={{
              p: 3.5,
              borderRadius: 3,
              textAlign: "center",
              backgroundColor: "#fff",
              boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "16px",
                fontSize: "14px",
              }}
            >
             <Grid >
                {item.heading}
             </Grid>
             <Grid>
                {item.balance}
             </Grid>
             <Grid>
                {item.description}
             </Grid>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Box>
  );
};

export default BalanceDisplayCard;
