import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";
import type { BalanceCardItem } from "../types";

import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

interface BalanceDisplayProps {
  currentBalance: number;
  totalMonthlyBudget: number;
  totalMonthlyExpenses: number;
  remainingMonthlyBudget: number;
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
      logo: (
        <MonetizationOnIcon
          fontSize="small"
          sx={{ color: "text.secondary", opacity: 0.7 }}
        />
      ),
      balance: currentBalance.toLocaleString("en-IN"),
      description: `As of ${new Date().toLocaleDateString("en-GB", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })}`,
      color: "text.primary",
    },
    {
      heading: "Total Monthly Budget",
      logo: <TrendingUpIcon fontSize="small" sx={{ color: "success.main" }} />,
      balance: totalMonthlyBudget.toLocaleString("en-IN"),
      description: "This Month",
      color: "success.main",
    },
    {
      heading: "Total Monthly Expenses",
      logo: <TrendingDownIcon fontSize="small" sx={{ color: "error.main" }} />,
      balance: totalMonthlyExpenses.toLocaleString("en-IN"),
      description: "This Month",
      color: "error.main",
    },
    {
      heading: "Remaining Monthly Budget",
      logo: (
        <AccountBalanceWalletIcon
          fontSize="small"
          sx={{ color: "text.secondary", opacity: 0.7 }}
        />
      ),
      balance: remainingMonthlyBudget.toLocaleString("en-IN"),
      description: "Left to spend",
      color: remainingMonthlyBudget < 0 ? "error.main":"success.main",
    },
  ];

  return (
    <Grid container spacing={3.5}>
      {budget.map((item) => (
        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.heading}>
          <Card
            sx={{
              p: 2,
              borderRadius: 3,
              backgroundColor: "#fff",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              border: "1px solid #e2e8f0",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 1,
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <Typography
                variant="subtitle2"
                color="text.secondary"
                fontWeight={500}
              >
                {item.heading}
              </Typography>
              {item.logo}
            </Box>

            <Box mt={1}>
              <Typography variant="h5" fontWeight="bold" color={item.color}>
                ₹{item.balance}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {item.description}
              </Typography>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default BalanceDisplayCard;
