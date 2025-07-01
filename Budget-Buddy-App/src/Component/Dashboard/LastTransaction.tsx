import { Box, Card, CardContent, Grid, Typography, Divider, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import type { Transaction } from '../Types/Types';
import { useNavigate } from 'react-router-dom';

const LastTransaction = () => {
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await axios.get<Transaction[]>('http://localhost:3000/Transactions');
        const sorted = res.data
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .slice(0, 5); 
        setTransactions(sorted);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <Box sx={{ marginBottom: '16px', width: '1200px', alignContent: 'center' }}>
      <Grid>
        <Card sx={{ height: 'auto' }}>
          <CardContent>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: '24px',
              }}
            >
              <Typography 
                sx={{
                  fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                  fontSize: '25px',
                  fontWeight: 'bold',
                }}
              >
                Last Transactions
              </Typography>

              <Button
                variant="outlined"
                onClick={() => navigate("/transactions")}
                sx={{
                  textTransform: 'none',
                  borderRadius: '8px',
                  fontWeight: 500,
                  paddingX: 3,
                  color: "rgb(51 65 85 / var(--tw-text-opacity, 1))",
                  borderColor: "rgb(51 65 85 / var(--tw-text-opacity, 1))"
                }}
              >
                View All Transaction
              </Button>
            </Box>

            <Box sx={{ paddingX: 3, paddingBottom: 2 }}>
              {transactions.map((txn, index) => (
                <Box key={txn.id}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 1 }}>
                    <Box marginBottom={"10px"}>
                      <Typography sx={{ fontWeight: 500 }}>{txn.description}</Typography>
                      <Typography variant="body2" sx={{ color: 'gray' }}>
                        {new Date(txn.date).toLocaleDateString()} - {txn.categories || 'Uncategorized'}
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        marginTop: "13px",
                        color: txn.type.toLowerCase() === 'income' ? 'success.main' : 'error.main',
                      }}
                    >
                      {txn.type.toLowerCase() === 'income' ? '+' : '-'}{Math.abs(parseFloat(txn.amount)).toFixed(2)}
                    </Typography>
                  </Box>
                  {index < transactions.length - 1 && <Divider sx={{ my: 1 }} />}
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
};

export default LastTransaction;
