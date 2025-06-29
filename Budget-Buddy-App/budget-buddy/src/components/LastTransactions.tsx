import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper, Divider } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import type { Transaction } from '../types';

interface LastTransactionsProps {
    transactions: Transaction[];
}


// export const lastTransactions = [ 
//     {
//         name: 'Grocery Store',
//         date: 'date',
//         category: "category",
//         amount: "rupees"
//     },
//     {
//         name: 'Salary Deposit',
//         date: 'date',
//         category: "category",
//         amount: "rupees"
//     },
//     {
//         name: 'Netflix Subscription',
//         date: 'date',
//         category: "category",
//         amount: "rupees"
//     },
//     {
//         name: 'Gas Station',
//         date: 'date',
//         category: "category",
//         amount: "rupees"
//     },
//     {
//         name: 'Coffee Shop',
//         date: 'date',
//         category: "category",
//         amount: "rupees"
//     },
// ];

export const formatDate = (dateString: string) => {
   return new Date(dateString).toLocaleDateString('en-IN', {
       day: '2-digit',
       month: 'short',
       year: 'numeric'
   });
}

const LastTransactions: React.FC<LastTransactionsProps>= ({transactions}) => {

    const navigate = useNavigate();


  return (
      <Paper sx={{ p: 2, borderRadius: 3, boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>

         <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" fontWeight={600}>
                    Last 5 Transactions
                </Typography>
                <Button variant="outlined" size="small" onClick={() => navigate('/transaction')} sx={{textTransform: "none"}}>
                    View All Transactions
                </Button>
            </Box>
             <Box>
                {transactions.map((item, index) => (
                    <React.Fragment key={item.id}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 2 }}>
                            <Box>
                                <Typography variant="body1" fontWeight={500}>
                                    {item.description}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {formatDate(item.date)} • {item.category}
                                </Typography>
                            </Box>
                            <Typography 
                                fontWeight={600} 
                                color={item.type === 'income' ? 'success.main' : 'error.main'}
                            >
                                {item.type === 'income' ? `+₹${Number(item.amount).toLocaleString('en-IN')}` : `₹${Number(item.amount).toLocaleString('en-IN')}`}
                            </Typography>
                        </Box>
                        {index < transactions.length - 1 && <Divider />}
                    </React.Fragment>
                ))}
            </Box>
</Paper>
  )
}

export default LastTransactions