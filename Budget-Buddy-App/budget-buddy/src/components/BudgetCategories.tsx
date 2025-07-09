import React from "react";
import { Box, LinearProgress, Typography, Paper } from "@mui/material";
import type { BudgetCategoryData } from "../types";

interface BudgetCategoriesProps {
  budgetData: BudgetCategoryData[];
}

const BudgetCategories: React.FC<BudgetCategoriesProps> = ({ budgetData }) => {
   const getProcess = (spent: number, limit: number) => {
        const spentAmount = spent || 0;
        const budgetAmount = limit || 0;
        if(budgetAmount === 0) return 0;
        return Math.min((spentAmount / budgetAmount) * 100, 100);
    }

  return (
    <Paper
      sx={{
        p: 3,
        borderRadius: 3,
        boxShadow: 3,
        height: "100%",
        width: "120%",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          mb: 2,
        }}
      >
        Budget Categories
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        {budgetData.length > 0 ? (
          budgetData.map((item, index) => (
            <Box
              key={index}
              sx={{ display: "flex", flexDirection: "column", mb: 2 }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {item.category}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ ml: 2, color: "text.secondary" }}
                >
                 ₹{(item.spent || 0).toLocaleString('en-IN')} / ₹{(item.limit || 0).toLocaleString('en-IN')}
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={getProcess(item.spent, item.limit)}
                color= {item.spent === item.limit ? "error" : "primary"}
                sx={{ mt: 0.5, height: 8, borderRadius: 4 }}
              />
            </Box>
          ))
        ) : (
          <Typography color="text.secondary" sx={{ mt: 2 }}>
            No budget categories set.
          </Typography>
        )}
      </Box>
    </Paper>
  );
};

export default BudgetCategories;
