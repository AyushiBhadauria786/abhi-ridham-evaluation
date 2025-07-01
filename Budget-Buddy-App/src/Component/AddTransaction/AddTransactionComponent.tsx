import { Note } from '@mui/icons-material';
import {Box, Button,Container,FormControlLabel,FormLabel,MenuItem,Radio,RadioGroup,Select,TextField,Typography
  } from '@mui/material';
import axios from 'axios';
  import React, { useEffect, useState } from 'react';
  
  
    
  const AddTransactionComponent = () => {


    const [data,setData] = useState({
        type:"Expense",
        date : new Date().toISOString().slice(0,10),
        amount : "",
        categories : "",
        note : "",
        description : ""
    })


    const [categoriesList, setCategoriesList] = useState([]);

    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const response = await axios.get("http://localhost:3000/Budget");
          setCategoriesList(response.data);
        } catch (error) {
          console.error("Failed to fetch categories:", error);
        }
      };
  
      fetchCategories();
    }, []);


    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault();
        try {
          const response = await axios.post("http://localhost:3000/Transactions",data);
          console.log(response.data);
          setData({
            type:"Expense",
            date : new Date().toISOString().slice(0,10),
            amount : "",
            categories : "",
            note : "",
            description : ""
          });
        } catch (error) {
            console.error(error)
        }
    }


    const handleChange = (field:string,value:string) => {
        setData((prev) => ({...prev, [field] : value}))
    }


    return (
      <>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',      
            backgroundColor: 'rgb(248 250 252 / var(--tw-bg-opacity, 1))',    
            px: 2,
  
          }}
        >
  
  
  
          <Container
            maxWidth="sm"
            sx={{
              border: '1px solid #ccc',
              borderRadius: 2,
              padding: "24px 24px 0px 24px",
              boxShadow: 3,
              backgroundColor: '#fff',
              margin: "24px 24px 0px 24px "
            }}
          >
            <Typography component={"div"} sx={{ fontSize: "25px", fontFamily: "ui-sans-serif, system-ui, sans-serif", fontWeight: "bold", color: "rgb(51 65 85 / var(--tw-text-opacity, 1))" }}>
              Add New Transaction
            </Typography>
  
            <Box component={"form"} onSubmit={handleSubmit} sx={{
              display: "flex",
              flexDirection: "column",
              boxSizing: "border-box",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              width: "550px",
              height: "100vh",
              position: "sticky"
            }}>
  
              <Box sx={{ mt: "10px" }}>
                <FormLabel sx={{ color: "rgb(51 65 85 / var(--tw-text-opacity, 1))", fontWeight: 500, fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>
                  Transaction Type
                </FormLabel>
                <RadioGroup 
                value={data.type}
                onChange={(e) => handleChange("type",e.target.value)}
                row 
                
                sx={{ display: "flex", color: "rgb(51 65 85 / var(--tw-text-opacity, 1))", gap: 2 }}>
  
                  <FormControlLabel value={"Expense"} control={<Radio size='small' />} label={"Expense"}></FormControlLabel>
                  <FormControlLabel value={"Income"} control={<Radio size='small' />} label={"Income"}></FormControlLabel>
                </RadioGroup>
              </Box>
  
              <Box >
                <label
                  htmlFor="number"
                  style={{ display: "block", marginTop: 15, marginBottom: 4, color: "rgb(51 65 85 / var(--tw-text-opacity, 1))", fontWeight: 500, fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
                >
                  Amount
                </label>
                <TextField
                  sx={{
                    fontSize: 16,
                    border: "1px solid #ccc",
                    fontFamily: "ui-sans-serif, system-ui, sans-serif",
                    
                  }}
                  value={data.amount}
                  onChange={(e) => handleChange("amount",e.target.value)}
                  fullWidth
                  margin="dense"
                  type="number"
                  placeholder="$ 0.00"
                  size="small"
                  required
                />
              </Box>
  
              <Box>
                <label
                  htmlFor="email"
                  style={{ display: "block", marginTop: 10, marginBottom: 4, color: "rgb(51 65 85 / var(--tw-text-opacity, 1))", fontWeight: 500, fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
                >
                  Category
                </label>
                <Select
                  sx={{
                    border: "1px solid #ccc",
                    marginTop: 1
                  }}
                  value={data.categories}
                  onChange={(e) => handleChange("categories",e.target.value)}
                  fullWidth
                  margin="dense"
                  displayEmpty
                  size="small"
                  type="number"
                  required
                >
                  <MenuItem value="" disabled>Select a Categories</MenuItem>
                  {Categories.map((item) => (
                    <MenuItem value={item}>{item}</MenuItem>
                  ))}
                </Select>
              </Box>
  
  
              <Box >
                <label
                  htmlFor="number"
                  style={{ display: "block", marginTop: 15, marginBottom: 10, color: "rgb(51 65 85 / var(--tw-text-opacity, 1))", fontWeight: 500, fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
                >
                  Description
                </label>
                <TextField
                  sx={{
                    fontSize: 16,
                    border: "1px solid #ccc",
                    fontFamily: "ui-sans-serif, system-ui, sans-serif"
                  }}

                  value={data.description}
                  onChange={(e) => handleChange("description",e.target.value)}
                  fullWidth
                  margin="dense"
                  size="small"
                  type="text"
                  placeholder="e.g.,Coffee,Monthly Salary"
                  required
                />
              </Box>
  
  
              <Box >
                <label
                  htmlFor="Date"
                  style={{ display: "block", marginTop: 15, marginBottom: 10, color: "rgb(51 65 85 / var(--tw-text-opacity, 1))", fontWeight: 500, fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
                >
                  Date
                </label>
                <TextField
                  sx={{
                    border: "1px solid #ccc",
                  }}
                  value={data.date}
                  onChange={(e) => handleChange("date",e.target.value)}
                  fullWidth
                  margin="dense"
                  size="small"
                  type="date"
                  placeholder="e.g.,Coffee,Monthly Salary"
                  required
                />
              </Box>
  
  
              <Box >
                <label
                  htmlFor="Date"
                  style={{ display: "block", marginTop: 15, marginBottom: 10, color: "rgb(51 65 85 / var(--tw-text-opacity, 1))", fontWeight: 500, fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
                >
                  Notes (Optional)
                </label>
                <TextField
                  sx={{
                    border: "1px solid #ccc",
                  }}
                  value={data.note}
                  onChange={(e)=> handleChange("note",e.target.value)}
                  multiline
                  minRows={3}
                  fullWidth
                  margin="dense"
                  size="small"
                  type="text"
                  placeholder="e.g.,Coffee,Monthly Salary"
                  required
                />
              </Box>
  
              <Box sx={{ display: "flex", marginTop: "20px", gap: 2 }}>
                <Button type='submit'
                sx={{
                  fontSize: 14,
                  border: "1px solid #ccc",
                  fontFamily: "ui-sans-serif, system-ui, sans-serif",
                  color: "white",
                  backgroundColor: "rgb(51 65 85 / var(--tw-text-opacity, 1))",
                  width: "50%"
                }}>
                  Add Transaction
                </Button>
                <Button sx={{
                  fontSize: 14,
                  border: "1px solid #ccc",
                  fontFamily: "ui-sans-serif, system-ui, sans-serif",
                  color: "rgb(51 65 85 / var(--tw-text-opacity, 1))",
                  backgroundColor: "white",
                  width: "50%"
                }}>
                  Cancel
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>
      </>
    );
  };
  
  export default AddTransactionComponent;
  