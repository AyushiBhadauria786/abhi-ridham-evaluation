import { Box, Card, CardContent, Grid, Typography, LinearProgress } from '@mui/material';
import React from 'react';

const budgetCategories = [
  { name: 'Groceries', current: 450, limit: 500 },
  { name: 'Rent', current: 1200, limit: 1200 },
  { name: 'Utilities', current: 180, limit: 200 },
  { name: 'Entertainment', current: 90, limit: 150 },
];

const BudgetCategories = () => {
  return (
    <Box sx={{ marginBottom: '16px', width: '585px', alignContent: 'center' }}>
      <Grid>
        <Card sx={{ height: '370px' }}>
          <CardContent>
            <Box
              sx={{
                fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                fontSize: '25px',
                fontWeight: 'bold',
                margin: '24px',
              }}
            >
              Budget Categories
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, paddingX: 3 }}>
              {budgetCategories.map((category, index) => {
                const percent = (category.current / category.limit) * 100;
                return (
                  <Box key={index}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                      <Typography sx={{ fontSize: '14px', color: '#334155', fontWeight: 500 }}>
                        {category.name}
                      </Typography>
                      <Typography sx={{ fontSize: '14px', color: '#334155' }}>
                        {category.current} / {category.limit}
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={percent}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: '#e2e8f0',
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: percent >= 100 ? '#ef4444' : '#3b82f6',
                        },
                      }}
                    />
                  </Box>
                );
              })}
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
};

export default BudgetCategories;
