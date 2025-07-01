import {
    Box,
    Button,
    Card,
    CardContent,
    Grid,
    Typography,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Modal,
    TextField,
    IconButton
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import type { Transaction } from '../Types/Types';
import { Delete, Edit } from '@mui/icons-material';

export interface AllTransactionsProps {
    filters: {
        searchTerm: string;
        selectedType: string;
        selectedCategory: string;
        fromDate: string;
        toDate: string;
    };
}

const AllTransactions: React.FC<AllTransactionsProps> = ({ filters }) => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [isEditModal, setIsEditModal] = useState(false);
    const [isDeleteModal, setIsDeleteModal] = useState(false);
    const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const res = await axios.get<Transaction[]>('http://localhost:3000/Transactions');
                const sorted = [...res.data].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

                const filtered = sorted.filter((txn) => {
                    const matchesDescription = txn.description?.toLowerCase().includes(filters.searchTerm.toLowerCase());
                    const matchesType = filters.selectedType === 'All' || txn.type?.toLowerCase() === filters.selectedType.toLowerCase();
                    const matchesCategory = filters.selectedCategory === 'All' || txn.categories?.toLowerCase() === filters.selectedCategory.toLowerCase();
                    const matchesFromDate = !filters.fromDate || new Date(txn.date) >= new Date(filters.fromDate);
                    const matchesToDate = !filters.toDate || new Date(txn.date) <= new Date(filters.toDate);
                    return matchesDescription && matchesType && matchesCategory && matchesFromDate && matchesToDate;
                });

                setTransactions(filtered);
            } catch (error) {
                console.error('Error fetching transactions:', error);
            }
        };

        fetchTransactions();
    }, [filters]);

    const openEditModal = (txn: Transaction) => {
        setSelectedTransaction(txn);
        setIsEditModal(true);
    };

    const openDeleteModal = (txn: Transaction) => {
        setSelectedTransaction(txn);
        setIsDeleteModal(true);
    };

    const handleEditSave = async () => {
        if (!selectedTransaction) return;

        try {
            await axios.put(`http://localhost:3000/Transactions/${selectedTransaction.id}`, selectedTransaction);
            setTransactions((prev) =>
                prev.map((txn) => (txn.id === selectedTransaction.id ? selectedTransaction : txn))
            );
            setIsEditModal(false);
        } catch (error) {
            console.error('Error updating transaction:', error);
        }
    };

    const handleDelete = async () => {
        if (!selectedTransaction) return;

        try {
            await axios.delete(`http://localhost:3000/Transactions/${selectedTransaction.id}`);
            setTransactions((prev) => prev.filter((txn) => txn.id !== selectedTransaction.id));
            setIsDeleteModal(false);
        } catch (error) {
            console.error('Error deleting transaction:', error);
        }
    };

    return (
        <Box sx={{ marginBottom: '16px', width: '1200px' }}>
            <Grid>
                <Card>
                    <CardContent>
                        <Typography sx={{ fontSize: '25px', fontWeight: 'bold', mb: 2 }}>
                            All Transactions
                        </Typography>

                        {transactions.length === 0 ? (
                            <Typography sx={{ margin: '16px', color: 'gray' }}>
                                No transactions found.
                            </Typography>
                        ) : (
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
                                    {transactions.map((txn) => (
                                        <TableRow key={txn.id}>
                                            <TableCell>{new Date(txn.date).toLocaleDateString()}</TableCell>
                                            <TableCell>{txn.description}</TableCell>
                                            <TableCell>{txn.categories}</TableCell>
                                            <TableCell
                                                sx={{
                                                    color: txn.type?.toLowerCase() === 'income' ? 'success.main' : 'error.main'
                                                }}
                                            >
                                                {txn.type?.toLowerCase() === 'income' ? '+' : '-'}{Math.abs(Number(txn.amount)).toFixed(2)}
                                            </TableCell>
                                            <TableCell>{txn.type}</TableCell>
                                            <TableCell>
                                                {/* <Button size="small" color="primary" onClick={() => openEditModal(txn)}>Edit</Button> */}
                                                <IconButton onClick={() => openEditModal(txn)}>
                                                    <Edit sx={{ fontSize: '20px', color: 'rgb(71, 85, 105)' }} />
                                                </IconButton>
                                                {/* <Button size="small" color="error" onClick={() => openDeleteModal(txn)}>Delete</Button> */}
                                                <IconButton onClick={() => openDeleteModal(txn)}>
                                                    <Delete sx={{ fontSize: '20px', color: 'rgb(239, 68, 68)' }} />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        )}
                    </CardContent>
                </Card>
            </Grid>


            <Modal open={isEditModal} onClose={() => setIsEditModal(false)}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        borderRadius: 2,
                        boxShadow: 24,
                        p: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2
                    }}
                >
                    <Typography variant="h6">Edit Transaction</Typography>
                    <TextField
                        label="Description"
                        value={selectedTransaction?.description || ''}
                        onChange={(e) => setSelectedTransaction((prev) => prev ? { ...prev, description: e.target.value } : null)}
                    />

                    <TextField
                        label="Amount"
                        type="number"
                        value={selectedTransaction?.amount || ''}
                        onChange={(e) => setSelectedTransaction((prev) => prev ? { ...prev, amount: e.target.value } : null)}
                    />
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                        <Button sx={{ backgroundColor: 'rgb(51 65 85)' }} variant="contained" color="primary" onClick={handleEditSave}>
                            Save
                        </Button>
                        <Button sx={{
                            fontSize: 14,
                            border: "1px solid #ccc",
                            color: "rgb(51 65 85 / var(--tw-text-opacity, 1))",
                            backgroundColor: "white",
                        }} variant="outlined" onClick={() => setIsEditModal(false)}>
                            Cancel
                        </Button>
                    </Box>
                </Box>
            </Modal>


            <Modal open={isDeleteModal} onClose={() => setIsDeleteModal(false)}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 300,
                        bgcolor: 'background.paper',
                        borderRadius: 2,
                        boxShadow: 24,
                        p: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        textAlign: 'center'
                    }}
                >
                    <Typography variant="h6">Are you sure you want to delete?</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                        <Button sx={{ backgroundColor: 'rgb(51 65 85)' }} variant="contained" color="error" onClick={handleDelete}>
                            Yes
                        </Button>
                        <Button sx={{
                            fontSize: 14,
                            border: "1px solid #ccc",
                            color: "rgb(51 65 85 / var(--tw-text-opacity, 1))",
                            backgroundColor: "white",
                        }} variant="outlined" onClick={() => setIsDeleteModal(false)}>
                            No
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
};

export default AllTransactions;
