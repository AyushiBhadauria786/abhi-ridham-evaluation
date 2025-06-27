import React from "react";
import { categories } from "../pages/AddTransaction";
import { Box, LinearProgress, Typography } from "@mui/material";
import type { BudgetCategoryData } from "../types";

interface BudgetCategoiesProps {
    budgetCategoriesData: BudgetCategoryData[];
}

const BudgetCategories: React.FC<BudgetCategoiesProps> = ({ budgetCategoriesData }) => {
  
    const getProcess = (spend: number, budgeted: number) => {
        if(budgeted === 0) return 0;
        return Math.min((spend / budgeted) * 100,100);
    }

  return (
    <>
      <Box sx={{ mt: 2, width: "475px" }}>
        <Typography
          variant="h5"
          sx={{
            fontSize: "24px",
            fontWeight: 600,
            lineHeight: "24px",
            letterSpacing: "-0.6px"
          }}
        >
          Budget Categories
        </Typography>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", width: '100%' }}> 
      {categories.slice(0,5).map((item, index) => (
        <Box key={index} sx={{ display: "flex", flexDirection: "column", mb: 2 }}> 
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}> 
            <Typography variant="body2" sx={{ fontWeight: 600 }}> 
              {item}
            </Typography>
            <Typography variant="body2" sx={{ ml: 2 }}>
             value / budget
            </Typography>
          </Box>
          <LinearProgress variant="determinate" value={getProcess(item.value,item.budget)} sx={{ mt: 0.5 }} />
        </Box>
      ))}
    </Box>
    </>
  );
};

export default BudgetCategories;
