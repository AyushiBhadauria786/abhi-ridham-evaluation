import {
  Box,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import { useEffect,useState } from "react";
import FilterTransaction from "../components/FilterTransaction";
import {  useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import type { Transaction } from "../types";
import { formatDate } from "../components/LastTransactions";

const Transactions = () => {

  const navigate = useNavigate();
   const [allTransactions, setAllTransactions] = useState<Transaction[]>([]);
  const [filteredTransactions, setFilteredTransactions] = useState<Transaction[]>([]);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editTransaction, setEditTransaction] = useState<Transaction | null>(null);

   
    const fetchTransactions = async () => {
      try {
        const res = await axios.get("http://localhost:3001/transactions");
        setAllTransactions(res.data);
        setFilteredTransactions(res.data);
      } catch (err) {
        console.error("Failed to fetch transactions:", err);
      }
    };

    useEffect(() => {
      fetchTransactions();
    },[])

   const handleFilterChange = (filters: any) => {
    let filtered = [...allTransactions];

    if (filters.description) {
      filtered = filtered.filter((t) =>
        t.description.toLowerCase().includes(filters.description.toLowerCase())
      );
    }
    if (filters.type) {
      filtered = filtered.filter((t) => t.type === filters.type);
    }
    if (filters.category) {
      filtered = filtered.filter((t) => t.category === filters.category);
    }
    if (filters.fromDate) {
      filtered = filtered.filter((t) => new Date(t.date) >= new Date(filters.fromDate));
    }
    if (filters.toDate) {
      filtered = filtered.filter((t) => new Date(t.date) <= new Date(filters.toDate));
    }

    setFilteredTransactions(filtered);
  };

  const handleEditClick = (transaction: Transaction) => {
    setEditTransaction({ ...transaction });
    setEditDialogOpen(true);
  };

  const handleEditChange = (field: keyof Transaction, value: any) => {
    if (!editTransaction) return;
    setEditTransaction({ ...editTransaction, [field]: value });
  };

  const handleEditSave = async () => {
    if (!editTransaction) return;
    try {
      await axios.put(`http://localhost:3001/transactions/${editTransaction.id}`, editTransaction);
      setEditDialogOpen(false);
      fetchTransactions();
    } catch (err) {
      console.error("Error updating transaction:", err);
    }
  };
  
  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this transaction?")) {
      try {
        await axios.delete(`http://localhost:3001/transactions/${id}`);
        fetchTransactions();
      } catch (err) {
        console.error("Error deleting transaction:", err);
      }
    }
  };

  return (
    <Box sx={{ padding: "24px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxSizing: "border-box",
        }}
      >
        <Typography variant="h5" sx={{fontWeight: 700, fontSize: "24px"}}>Transaction History</Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "rgb(71 85 105)",
            fontWeight: 600,
            lineHeight: "32px",
            ":hover": {
              backgroundColor: "rgb(55 65 81)",
            },
          }}
          onClick={() => navigate('/add-transaction')}
        >
          Add Transaction
        </Button>
      </Box>

      <Box sx={{ marginTop: 2 }}>
        <FilterTransaction onFilterChange={handleFilterChange} />
      </Box>

      <TableContainer component={Paper} sx={{ mt: 3, borderRadius: 2, border: "1px solid rgba(224, 224, 224, 1);" }}>
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
            {filteredTransactions.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  No transactions found.
                </TableCell>
              </TableRow>
            ) : (
              filteredTransactions.map((t) => (
                <TableRow key={t.id}>
                  <TableCell>{formatDate(t.date)}</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>{t.description}</TableCell>
                  <TableCell>
                    <Chip label={t.category} variant="outlined" />
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, color: t.type === "income" ? "green" : "red" }}>
                    {t.type === "income" ? "+" : "-"}₹{t.amount}
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={t.type}
                      sx={{
                        backgroundColor: t.type === "income" ? "#c7d2fe" : "#fee2e2",
                        color: t.type === "income" ? "#1e40af" : "#b91c1c",
                        fontWeight: 600,
                        textTransform: "capitalize",
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <IconButton color="primary" onClick={() => handleEditClick(t)}>
                      <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton color="error" onClick={() => handleDelete(t.id)}>
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

       <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)} fullWidth>
        <DialogTitle>Edit Transaction</DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
          <TextField
            sx={{mt: 1}}
            label="Description"
            type="txt"
            value={editTransaction?.description || ""}
            onChange={(e) => handleEditChange("description", e.target.value)}
            fullWidth
          />
          <TextField
            label="Amount"
            type="number"
            value={editTransaction?.amount || ""}
            onChange={(e) => handleEditChange("amount", e.target.value)}
            fullWidth
          />
          <TextField
            label="Date"
            type="date"
            value={editTransaction?.date || ""}
            onChange={(e) => handleEditChange("date", e.target.value)}
            slotProps={{
              inputLabel: {
                shrink: true,
              }
            }}
            fullWidth
          />
          <FormControl fullWidth>
            <InputLabel>Type</InputLabel>
            <Select
              value={editTransaction?.type || ""}
              onChange={(e) => handleEditChange("type", e.target.value)}
              label="Type"
            >
              <MenuItem value="income">Income</MenuItem>
              <MenuItem value="expense">Expense</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Category"
            type=""
            value={editTransaction?.category || ""}
            onChange={(e) => handleEditChange("category", e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditDialogOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleEditSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Transactions;
