import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import React, { useState, useEffect } from "react";
import axios from "axios";

interface FilterProps {
  onFilterChange?: (filters: any) => void;
}

const FilterTransaction: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("http://localhost:3001/budgets");
        const catList = res.data.map((b: any) => b.category);
        setCategories(catList);
      } catch (err) {
        console.error("Failed to fetch categories", err);
      }
    };
    fetchCategories();
  }, []);

  const handleClearFilters = () => {
    setDescription("");
    setType("");
    setCategory("");
    setFromDate("");
    setToDate("");
    onFilterChange?.({});
  };

  const handleFilterChange = () => {
    onFilterChange?.({
      description,
      type,
      category,
      fromDate,
      toDate,
    });
  };

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
        gap: 2,
        mb: 2,
      }}
    >
      <TextField
        type="search"
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
      />

      <FormControl fullWidth>
        <InputLabel>Type</InputLabel>
        <Select
          value={type}
          label="Type"
          onChange={(e) => setType(e.target.value)}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="income">Income</MenuItem>
          <MenuItem value="expense">Expense</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel>Category</InputLabel>
        <Select
          value={category}
          label="Category"
          onChange={(e) => setCategory(e.target.value)}
        >
          <MenuItem value="">All</MenuItem>
          {categories.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="From Date"
          value={fromDate ? dayjs(fromDate) : null}
          onChange={(date) =>
            setFromDate(date ? date.format("YYYY-MM-DD") : "")
          }
          format="DD/MM/YYYY"
          slotProps={{
            textField: { fullWidth: true },
          }}
        />
        <DatePicker
          label="To Date"
          value={toDate ? dayjs(toDate) : null}
          onChange={(date) => setToDate(date ? date.format("YYYY-MM-DD") : "")}
          format="DD/MM/YYYY"
          slotProps={{
            textField: { fullWidth: true },
          }}
        />
      </LocalizationProvider>

      <Box sx={{ display: "flex", gap: 2, gridColumn: "span 3", mt: 1 }}>
        <Button
          variant="contained"
          onClick={handleFilterChange}
          sx={{
            backgroundColor: "rgb(71 85 105)",
            ":hover": { backgroundColor: "rgb(55 65 81)" },
          }}
        >
          Apply Filters
        </Button>
        <Button
          variant="outlined"
          onClick={handleClearFilters}
          sx={{
            color: "rgb(71 85 105)",
            borderColor: "rgb(71 85 105)",
            ":hover": {
              backgroundColor: "#f8fafc",
            },
          }}
        >
          Clear Filters
        </Button>
      </Box>
    </Box>
  );
};

export default FilterTransaction;
