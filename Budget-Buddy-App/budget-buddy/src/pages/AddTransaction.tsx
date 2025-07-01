import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  InputAdornment,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import type { Transaction } from "../types";
import { toast } from "react-toastify";

// export const categories = [
//   "Groceries",
//   "Rent",
//   "Entertainment",
//   "Transportation",
//   "Utilities",
//   "Healthcare",
//   "Salary",
//   "Freelance",
//   "Investment",
//   "Other",
// ];

type TransactionFormData = Omit<Transaction, "id"> & {
  notes: string;
};

const AddTransaction = () => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:3001/budgets");
        const budgetCategories = response.data.map((b: any) => b.category);

        const defaultCategories = [
          "Salary",
          "Freelance",
          "Investment",
          "Other",
        ];
        const allCategories = [
          ...new Set([...budgetCategories, ...defaultCategories]),
        ];
        setCategories(allCategories.sort());
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TransactionFormData>({
    defaultValues: {
      type: "expense",
      amount: "",
      category: "",
      description: "",
      date: new Date().toISOString().slice(0, 10),
      notes: "",
    },
  });

  const labelStyle = {
    display: "block",
    fontWeight: 600,
    color: "rgb(51 65 85)",
    marginBottom: "6px",
  };

  const validateAmount = (value: string) => {
    if (!value || value.trim() === "") {
      return "Amount is required";
    }
    const numValue = parseFloat(value);
    if (isNaN(numValue)) {
      return "Please enter a valid number";
    }
    if (numValue <= 0) {
      return "Amount must be greater than 0";
    }
    return true;
  };

  const validateDescription = (value: string) => {
    if (!value || value.trim() === "") {
      return "Description is required";
    }
    const trimmedValue = value.trim();
    if (trimmedValue.length === 0) {
      return "Description cannot be empty or contain only spaces";
    }
    const hasAlphaNumeric = /[a-zA-Z0-9]/.test(trimmedValue);
    if (!hasAlphaNumeric) {
      return "Description must contain at least one letter or number";
    }
    if (trimmedValue.length < 2) {
      return "Description must be at least 2 characters long";
    }

    return true;
  };

  const validateDate = (value: string) => {
    if (!value) {
      return "Date is required";
    }
    const selectedDate = new Date(value);
    const today = new Date();
    today.setHours(23, 59, 59, 999);
    if (selectedDate > today) {
      return "Future dates are not allowed";
    }

    return true;
  };

  const validateCategory = (value: string) => {
    if (!value || value.trim() === "") {
      return "Please select a category";
    }
    return true;
  };

  const onSubmit = async (data: TransactionFormData) => {
    try {
      const response = await axios.post("http://localhost:3001/transactions", {
        ...data,
        description: data.description.trim(),
      });
      console.log("Submitted Data:", response.data);

      reset({
        type: "expense",
        amount: "",
        category: "",
        description: "",
        date: new Date().toISOString().slice(0, 10),
        notes: "",
      });
      toast.success("Transaction added successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
      });
    } catch (error) {
      console.error("Error adding transaction:", error);
      toast.error("Failed to add transaction. Please try again.",{
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
      });
    }
  };

  const handleCancel = () => {
    reset({
      type: "expense",
      amount: "",
      category: "",
      description: "",
      date: new Date().toISOString().slice(0, 10),
      notes: "",
    });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        // backgroundColor: "#f7f9fc",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
        py: 4,
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 720,
          border: "1px solid #cbd5e1",
          boxShadow: 4,
          borderRadius: 3,
          backgroundColor: "#fff",
        }}
      >
        <CardHeader
          title={
            <Typography variant="h5" fontWeight={700} color="rgb(51 65 85)">
              Add New Transaction
            </Typography>
          }
        />
        <CardContent>
          {/* Main form */}
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ display: "flex", flexDirection: "column", gap: 3 }}
          >
            <Box>
              <FormLabel
                sx={{ fontWeight: 600, color: "rgb(51 65 85)", mb: 1 }}
              >
                Transaction Type
              </FormLabel>
              <Controller
                name="type"
                control={control}
                render={({ field }) => (
                  <RadioGroup row {...field}>
                    <FormControlLabel
                      value="expense"
                      control={<Radio />}
                      label="Expense"
                    />
                    <FormControlLabel
                      value="income"
                      control={<Radio />}
                      label="Income"
                    />
                  </RadioGroup>
                )}
              />
            </Box>

            {/* Amount */}
            <Box>
              <FormLabel sx={labelStyle}>Amount</FormLabel>
              <Controller
                name="amount"
                control={control}
                rules={{ validate: validateAmount }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    type="number"
                    placeholder="0.00"
                    error={!!errors.amount}
                    helperText={errors.amount?.message}
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
                )}
              />
            </Box>

            {/* Category */}
            <Box>
              <FormLabel sx={labelStyle}>Category</FormLabel>
              <Controller
                name="category"
                control={control}
                rules={{ validate: validateCategory }}
                render={({ field }) => (
                  <FormControl fullWidth error={!!errors.category}>
                    <Select {...field} displayEmpty>
                      <MenuItem value="" disabled>
                        Select a category
                      </MenuItem>
                      {categories.map((cat) => (
                        <MenuItem key={cat} value={cat}>
                          {cat}
                        </MenuItem>
                      ))}
                    </Select>
                    {errors.category && (
                      <FormHelperText>{errors.category.message}</FormHelperText>
                    )}
                  </FormControl>
                )}
              />
            </Box>

            {/* Description */}
            <Box>
              <FormLabel sx={labelStyle}>Description</FormLabel>
              <Controller
                name="description"
                control={control}
                rules={{ validate: validateDescription }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    placeholder="e.g., Coffee, Monthly Salary"
                    error={!!errors.description}
                    helperText={errors.description?.message}
                  />
                )}
              />
            </Box>

            {/* Date */}
            <Box>
              <FormLabel sx={labelStyle}>Date</FormLabel>
              <Controller
                name="date"
                control={control}
                rules={{ validate: validateDate }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    type="date"
                    error={!!errors.date}
                    helperText={errors.date?.message}
                    inputProps={{ max: new Date().toISOString().slice(0, 10) }}
                    InputLabelProps={{ shrink: true }}
                  />
                )}
              />
            </Box>

            {/* Notes */}
            <Box>
              <FormLabel sx={labelStyle}>Notes (Optional)</FormLabel>
              <Controller
                name="notes"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    multiline
                    minRows={3}
                    placeholder="Additional notes about this transaction..."
                  />
                )}
              />
            </Box>

            {/* Buttons */}
            <Box sx={{ display: "flex", gap: 2, pt: 2 }}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "rgb(71 85 105)",
                  fontWeight: 600,
                  ":hover": {
                    backgroundColor: "rgb(55 65 81)",
                  },
                }}
              >
                Add Transaction
              </Button>
              <Button
                type="button"
                variant="outlined"
                fullWidth
                onClick={handleCancel}
                sx={{
                  borderColor: "#cbd5e1",
                  color: "rgb(51 65 85)",
                  fontWeight: 600,
                  ":hover": {
                    backgroundColor: "#f8fafc",
                  },
                }}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AddTransaction;
