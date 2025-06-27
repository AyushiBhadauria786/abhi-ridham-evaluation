import { Box, Button, FormLabel, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import type { Transaction } from "../types";

import { categories } from "../pages/AddTransaction";
import axios from "axios";

interface TransactionTableProps {
    data: Transaction[]
}

const FilterTransaction: React.FC<TransactionTableProps> = ({data}) => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);


      useEffect(() => {
        const fetchTransactions = async () => {
          try {
            const response = await axios.get("http://localhost:3001/transactions");
            console.log(response.data);
            setTransactions(response.data);
          } catch (error) {
            console.error("Error fetching transactions:", error);
          }
        };
    
        fetchTransactions();
      }, []);


  return (
    <>
    <Box>
        <Typography variant="h5" sx={{ fontSize: "24px", lineHeight: "24px" }}>
          Filters
        </Typography>
      </Box>
      <Box sx={{  display: "flex" }}>
        <Box
          sx={{
            mt: 2,
            margin: "8px 0px 0px",
            padding: "9px 12px",
          }}
        >
          <FormLabel>Search</FormLabel>
          <TextField type="text" />
        </Box>
        <Box
          sx={{
            mt: 2,
             margin: "8px 0px 0px",
            padding: "9px 12px",
          }}
        >
          <FormLabel> Type</FormLabel>
          <TextField type="text" />
        </Box>
        <Box
          sx={{
            mt: 2,
             margin: "8px 0px 0px",
            padding: "9px 12px",
          }}
        >
          <FormLabel>Category</FormLabel>
          <TextField type="text" />
        </Box>

        <Box
          sx={{
            mt: 2,
             margin: "8px 0px 0px",
            padding: "9px 12px",
          }}
        >
          <FormLabel>From Date</FormLabel>
          <TextField type="date" />
        </Box>
        
        <Box
          sx={{
            mt: 2,
             margin: "8px 0px 0px",
            padding: "9px 12px",
          }}
        >
          <FormLabel>To Date</FormLabel>
          <TextField type="date" />
        </Box>
      </Box>
      <Box sx={{display: "flex", lineHeight: "24px", padding: "9px 12px"}}>
        <Button variant="contained" size="small">Clear Filters</Button>
      </Box>

      <Box>
        <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Date</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Category</TableCell>
                                <TableCell>Amount</TableCell>
                                <TableCell>Type</TableCell>
                                <TableCell>Actions</TableCell>
                                
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {transactions.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell>
                                    
                                        <Typography variant="body2" sx={{display: 'flex', }}>
                                           {item.date}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        {item.description}
                                    </TableCell>
                                    <TableCell>
                                        {item.category}
                                    </TableCell>
                                    <TableCell>
                                        {item.amount}
                                    </TableCell>
                                    <TableCell>
                                        {item.type}
                                    </TableCell>
                                    <TableCell>
                                        {item.notes}
                                    </TableCell>
                                </TableRow>  
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
      </Box>
    </>
  );
};

export default FilterTransaction;
