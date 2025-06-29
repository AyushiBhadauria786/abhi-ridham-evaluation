import { Box, Typography, Paper } from '@mui/material'
import React from 'react'
import MyPieChart from './Piechart'
import type { PieChartData } from '../types';

interface BudgetOverviewProps {
    pieChartData: PieChartData[];
}

const BudgetOverview: React.FC<BudgetOverviewProps> = ({ pieChartData }) => {
  return (
    <Paper sx={{ p: 3, borderRadius: 3, boxShadow: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          Monthly Budget Overview
        </Typography>

        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 300 }}>
          {pieChartData.length > 0 ? (
            <MyPieChart data={pieChartData} />
          ) : (
            <Typography color="text.secondary">No expense data for this month.</Typography>
          )}
        </Box>
    </Paper>
  )
}

export default BudgetOverview