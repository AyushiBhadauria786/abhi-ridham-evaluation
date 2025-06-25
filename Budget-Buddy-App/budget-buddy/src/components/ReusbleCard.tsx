import React from 'react';
import { Card, CardContent, Box } from '@mui/material';

interface ReusableCardProps {
  children: React.ReactNode;
  variant?: 'elevation' | 'outlined';
}

const ReusableCard: React.FC<ReusableCardProps> = ({
  children,
  variant = 'elevation'
}) => {
  return (
    <Card
      elevation={1}
      variant={variant}
      sx={{
        borderRadius: '12px',
        border: '1px solid #e5e7eb',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      }}
    >
      <CardContent sx={{ padding: '20px', '&:last-child': { paddingBottom: '20px' } }}>
        {children}
      </CardContent>
    </Card>
  );
};

export default ReusableCard;