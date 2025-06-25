import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";

const AddTransaction = () => {
  return (
    <Box sx={{}}>
      <Box className="header" sx={{display: "flex"}}>Add New Transaction</Box>
      <Box className="mainForm" sx={{jdisplay: "flex-inline", ustifyContent: 'center', alignItems: "center"}}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Transaction Type
          </FormLabel>
          <RadioGroup row name="row-radio-buttons-group">
            <FormControlLabel
              value="Expense"
              control={<Radio size="small" />}
              label="Expense"
            />
            <FormControlLabel
              value="Income"
              control={<Radio size="small" />}
              label="Income"
            />
          </RadioGroup>
        </FormControl>

        <Box className="amount">
          <label htmlFor="amount">Amount</label>
          <input type="text" id="amount" name="amount" />
        </Box>

        <Box className="category">
          <label htmlFor="category">Category</label>
          <select name="category">
            <option value="Groceries">Groceries</option>
            <option value="Rent">Rent</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Transportation">Transportation</option>
            <option value="Utilities">Utilities</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Salary">Salary</option>
            <option value="Freelance">Freelance</option>
            <option value="Investment">Investment</option>
            <option value="Other">Other</option>
          </select>
        </Box>

        <Box className="description">
          <label htmlFor="description">Description</label>
          <input type="text" id="description" name="description"  placeholder="e.g.,Coffee,Monthly Salary"/>
        </Box>

        <Box className="date">
          <label htmlFor="date">Date</label>
          <input type="date" id="date" name="date" />
        </Box>

        <Box className="notes">
          <label htmlFor="notes">Notes(Optional)</label>
          <input type="text" id="notes" name="notes" />
        </Box>

        <Box>
          <Button variant="contained">Add Transaction</Button>
          <Button>Cancel</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddTransaction;
