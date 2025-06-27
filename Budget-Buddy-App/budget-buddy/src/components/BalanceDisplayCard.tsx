import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import type { BalanceCardItem } from "../types";

interface BalanceDisplayProps {
    currentBalance: number;
    totalMonthlyBudget: number;
    totalMonthlyExpenses: number;
    remainingMonthlyBudget: number
}

const BalanceDisplayCard: React.FC<BalanceDisplayProps> = ({
    currentBalance,
    totalMonthlyBudget,
    totalMonthlyExpenses,
    remainingMonthlyBudget,
}) => {
  const budget: BalanceCardItem[] = [
    {
      heading: "Current Balance",
      logo: "",
      balance: totalMonthlyBudget,
      description: "As of June,2025",
    },
    {
      heading: "Total Monthly Budget",
      logo: "",
      balance: totalMonthlyBudget,
      description: "As of June,2025",
    },
    {
      heading: "Total Montly Expenses",
      logo: "",
      balance: totalMonthlyExpenses,
      description: "As of June,2025",
    },
    {
      heading: "Remaining Monthly Budget",
      logo: "",
      balance: remainingMonthlyBudget,  
      description: "As of June,2025",
    },
  ];

  return (
    <Box sx={{ display: "flex", padding: "8px", mt: "8px", gap: "10px" }}>
      {budget.map((item) => (
        <Grid  mt={2} gap={2} size={4} key={item.heading}> 
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
              <Typography variant="h6" sx={{fontSize: "12px"}}>
                {item.heading}
              </Typography>
             <Typography variant="h6" fontWeight="bold">
                ₹{item.balance}
              </Typography>
            <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Box>
  );
};

export default BalanceDisplayCard;
