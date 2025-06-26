import { Box, Typography } from '@mui/material'
import React from 'react'
import MyPieChart from './Piechart'


const BudgetOverview = () => {
  return (
    <Box sx={{ mt: 2 }}>
        <Typography
          variant="h5"
          sx={{
            fontSize: "24px",
            fontWeight: 600,
            lineHeight: "24px",
            letterSpacing: "-0.6px"
          }}
        >
          Monthly Budget Overview
        </Typography>

        <Box>
          <MyPieChart />
        </Box>
      </Box>

  )
}

export default BudgetOverview