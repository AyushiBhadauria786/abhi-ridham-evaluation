import {
  Box,
  Button,
  FormControl,
  FormLabel,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import type { Budget as BudgetType } from "../types";
import { toast } from "react-toastify";
import useApi from "../hooks/useApi";

const Budget = () => {
 const {
    data: budgets,
    loading,
    refetch: fetchBudgets,
  } = useApi<BudgetType[]>("/budgets"); 
  const [categoryName, setCategoryName] = useState("");
  const [limit, setLimit] = useState("");

  const [editData, setEditData] = useState<BudgetType | null>(null);
  const [editCategoryName, setEditCategoryName] = useState("");
  const [editLimit, setEditLimit] = useState("");

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedBudgetId, setSelectedBudgetId] = useState<string | number | null>(null);

  // const fetchBudgets = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await axios.get("http://localhost:3001/budgets");
  //     setBudgets(response.data);
  //   } catch (error) {
  //     console.error("Error fetching budgets:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchBudgets();
  // }, []);

  const handleAddCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!categoryName || !limit || Number(limit) <= 0) {
      toast.warning("Please enter a valid category name and limit.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
      });
      return;
    }
    try {
      await axios.post("http://localhost:3001/budgets", {
        category: categoryName,
        limit: Number(limit),
      });
      setCategoryName("");
      setLimit("");
      fetchBudgets();
      toast.success("Added New Category!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
      });
    } catch (error) {
      console.error("Error adding budget category:", error);
      toast.error("Please try again!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
      });
    }
  };

  const handleDelete = (id: string | number) => {
    setSelectedBudgetId(id);
    setDeleteDialogOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!selectedBudgetId) return;
    try {
      await axios.delete(`http://localhost:3001/budgets/${selectedBudgetId}`);
      setDeleteDialogOpen(false);
      setSelectedBudgetId(null);
      fetchBudgets();
      toast.success("Budget category deleted successfully!", {
        position: "top-right",
        autoClose: 3000,
      });
    } catch (error) {
      console.error("Error deleting budget:", error);
      toast.error("Failed to delete. Please try again.");
    }
  };

  const handleEditSave = async () => {
    if (!editData || !editCategoryName || !editLimit || Number(editLimit) <= 0) {
      toast.warning("Please enter valid values.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
      });
      return;
    }
    try {
      await axios.put(`http://localhost:3001/budgets/${editData?.id}`, {
        category: editCategoryName,
        limit: Number(editLimit),
      });
      setEditData(null);
      fetchBudgets();
    } catch (err) {
      console.error("Error updating category:", err);
      toast.error("Failed to update category.");
    }
  };

  return (
    <Box sx={{ padding: "24px" }}>
      <Box>
        <Typography
          variant="h5"
          fontWeight={700}
          color="text.primary"
          gutterBottom
        >
          Manage Budget Categories
        </Typography>

        <Paper
          component="form"
          onSubmit={handleAddCategory}
          sx={{
            p: 3,
            mt: 2,
            borderRadius: 3,
            boxShadow: 3,
            border: "1px solid rgba(224, 224, 224, 1);",
          }}
        >
          <Typography variant="h6" fontWeight={600} color="text.primary" mb={2}>
            Add New Category
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr " },
              gap: 2,
              // alignItems: "flex-end",
            }}
          >
            <FormControl fullWidth>
              <FormLabel sx={{ mb: 1, fontWeight: 500 }}>
                Category Name
              </FormLabel>
              <TextField
                type="name"
                placeholder="e.g., Groceries"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
              />
            </FormControl>
            <FormControl fullWidth>
              <FormLabel sx={{ mb: 1, fontWeight: 500 }}>
                Monthly Budget Limit
              </FormLabel>
              <TextField
                type="number"
                placeholder="0.00"
                value={limit}
                onChange={(e) => setLimit(e.target.value)}
                onKeyDown={(e) => {
                  if (["e", "E", "+", "-"].includes(e.key)) {
                    e.preventDefault();
                  }
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">₹</InputAdornment>
                  ),
                }}
              />
            </FormControl>
          </Box>
          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 1,
              textTransform: "none",
              backgroundColor: "rgb(71 85 105)",
              ":hover": {
                backgroundColor: "rgb(55 65 81)",
              },
            }}
          >
            Add Category
          </Button>
        </Paper>

        <Paper
          sx={{
            p: 3,
            mt: 4,
            borderRadius: 3,
            boxShadow: 3,
            border: "1px solid rgba(224, 224, 224, 1);",
          }}
        >
          <Typography variant="h6" fontWeight={600} color="text.primary" mb={2}>
            Your Categories
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Category Name</TableCell>
                  <TableCell align="right">Monthly Limit</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={3} align="center">
                      Loading...
                    </TableCell>
                  </TableRow>
                ) : (
                  budgets?.map((budget) => (
                    <TableRow
                      key={budget.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ fontWeight: 500 }}
                      >
                        {budget.category}
                      </TableCell>
                      <TableCell align="right">
                        ₹{Number(budget.limit).toLocaleString("en-IN")}
                      </TableCell>
                      <TableCell align="center">
                        <IconButton
                          size="small"
                          aria-label="edit"
                          onClick={() => {
                            setEditData(budget);
                            setEditCategoryName(budget.category);
                            setEditLimit(String(budget.limit));
                          }}
                        >
                          <EditIcon fontSize="small" />
                        </IconButton>
                        <IconButton
                          size="small"
                          aria-label="delete"
                          onClick={() => handleDelete(budget.id)}
                        >
                          <DeleteIcon fontSize="small" color="error" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        {/* Edit Modal */}
        <Dialog open={!!editData} onClose={() => setEditData(null)} fullWidth>
          <DialogTitle>Edit Budget Category</DialogTitle>
          <DialogContent
            sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}
          >
            <TextField
              sx={{ mt: 1 }}
              type="any"
              label="Category Name"
              value={editCategoryName}
              onChange={(e) => setEditCategoryName(e.target.value)}
              fullWidth
            />
            <TextField
              label="Monthly Budget Limit"
              type="number"
              value={editLimit}
              onChange={(e) => setEditLimit(e.target.value)}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">₹</InputAdornment>
                ),
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setEditData(null)}>Cancel</Button>
            <Button onClick={handleEditSave} variant="contained">
              Save
            </Button>
          </DialogActions>
        </Dialog>

        {/* Delete Modal */}   
        <Dialog
          open={deleteDialogOpen}
          onClose={() => setDeleteDialogOpen(false)}
        >
          <DialogTitle>Delete Budget Category</DialogTitle>
          <DialogContent>
            <Typography>
              Are you sure you want to delete this category?
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
            <Button
              onClick={handleConfirmDelete}
              variant="contained"
              color="primary"
            >
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};

export default Budget;
