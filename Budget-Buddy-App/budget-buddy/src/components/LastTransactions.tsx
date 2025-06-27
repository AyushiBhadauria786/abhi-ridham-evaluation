import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';


export const lastTransactions = [ 
    {
        name: 'Grocery Store',
        date: 'date',
        category: "category",
        amount: "rupees"
    },
    {
        name: 'Salary Deposit',
        date: 'date',
        category: "category",
        amount: "rupees"
    },
    {
        name: 'Netflix Subscription',
        date: 'date',
        category: "category",
        amount: "rupees"
    },
    {
        name: 'Gas Station',
        date: 'date',
        category: "category",
        amount: "rupees"
    },
    {
        name: 'Coffee Shop',
        date: 'date',
        category: "category",
        amount: "rupees"
    },
];


const LastTransactions = () => {

    const navigate = useNavigate();

  return (
    <Box>
        <Box sx={{display: "flex", justifyContent: "space-between", textAlign: 'center'}}>

        <Typography variant="h5"
          sx={{
              fontSize: "24px",
              fontWeight: 600,
              lineHeight: "24px",
              letterSpacing: "-0.6px",
              alignItems: 'center',
            //   padding: "8px",
            //   marginTop: "10px"
            }}>Last 5 Transactions</Typography>

        <Button sx={{border: '1px solid', lineHeight: "24px",  }} size="small" onClick={() => navigate('/transaction')}>
            View All Transactions
        </Button>
            </Box>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Data</TableCell>
                        <TableCell>Data</TableCell>
                        
                    </TableRow>
                </TableHead>
                <TableBody>
                    {lastTransactions.map((item) => (
                        <TableRow key={item.name}>
                            <TableCell>
                                {item.name}
                                <Typography variant="body2" sx={{display: 'flex', }}>
                                    {item.date}
                                    {item.category}
                                </Typography>
                            </TableCell>
                            <TableCell>
                                {item.amount}
                            </TableCell>
                        </TableRow>  
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Box>
  )
}

export default LastTransactions