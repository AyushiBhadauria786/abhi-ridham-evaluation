import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  FormControlLabel,
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
import React, { useState } from "react";
import axios from "axios";

export const categories = [
  "Groceries", "Rent", "Entertainment", "Transportation",
  "Utilities", "Healthcare", "Salary", "Freelance", "Investment", "Other"
];

const AddTransaction = () => {
 const [formData, setFormData] = useState({
    type: "expense",
    amount: "",
    category: "",
    description: "",
    date: new Date().toISOString().slice(0, 10),
    notes: "",
  });



const labelStyle = {
  display: "block",
  fontWeight: 600,
  color: "rgb(51 65 85)",
  marginBottom: "6px",
};

 const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/transactions",formData)
      console.log("Submitted Data:", response.data);
      setFormData({
        type: "expense",
        amount: "",
        category: "",
        description: "",
        date: new Date().toISOString().slice(0, 10),
        notes: "",
      });
    } catch (error) {
       console.error("Error adding transaction:", error);
    }
  };


  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f7f9fc",
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
          <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <Box>
              <FormLabel sx={{ fontWeight: 600, color: "rgb(51 65 85)", mb: 1 }}>
                Transaction Type
              </FormLabel>
              <RadioGroup
                row
                value={formData.type}
                onChange={(e) => handleInputChange("type", e.target.value)}
              >
                <FormControlLabel value="expense" control={<Radio />} label="Expense" />
                <FormControlLabel value="income" control={<Radio />} label="Income" />
              </RadioGroup>
            </Box>

            {/* Amount */}
            <Box>
              <FormLabel sx={labelStyle}>Amount</FormLabel>
              <TextField
                fullWidth
                required
                type="number"
                value={formData.amount}
                onChange={(e) => handleInputChange("amount", e.target.value)}
                placeholder="0.00"
                InputProps={{
                  startAdornment: <InputAdornment position="start">₹</InputAdornment>,
                }}
              />
            </Box>

            {/* Category */}
            <Box>
              <FormLabel sx={labelStyle}>Category</FormLabel>
              <Select
                fullWidth
                displayEmpty
                value={formData.category}
                onChange={(e) => handleInputChange("category", e.target.value)}
              >
                <MenuItem value="" disabled>Select a category</MenuItem>
                {categories.map((cat) => (
                  <MenuItem key={cat} value={cat}>{cat}</MenuItem>
                ))}
              </Select>
            </Box>

            {/* Description */}
            <Box>
              <FormLabel sx={labelStyle}>Description</FormLabel>
              <TextField
                fullWidth
                placeholder="e.g., Coffee, Monthly Salary"
                value={formData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
              />
            </Box>

            {/* Date */}
            <Box>
              <FormLabel sx={labelStyle}>Date</FormLabel>
              <TextField
                fullWidth
                type="date"
                value={formData.date}
                onChange={(e) => handleInputChange("date", e.target.value)}
                InputLabelProps={{ shrink: true }}
              />
            </Box>

            {/* Notes */}
            <Box>
              <FormLabel sx={labelStyle}>Notes (Optional)</FormLabel>
              <TextField
                fullWidth
                multiline
                minRows={3}
                placeholder="Additional notes about this transaction..."
                value={formData.notes}
                onChange={(e) => handleInputChange("notes", e.target.value)}
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
