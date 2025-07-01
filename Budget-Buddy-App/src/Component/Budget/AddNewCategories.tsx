import { Grade } from '@mui/icons-material'
import { Box, Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'

const AddNewCategories = ({ fetchCategories }: { fetchCategories: () => void }) => {
    const [data, setData] = useState({
        name: '',
        monthlyLimit: ''
    });
    

    const handleChange = (field: string, value: string) => {
        setData((prev: any) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/Budget', data);
            setData({ name: '', monthlyLimit: '' });
            fetchCategories();
        } catch (error) {
            console.error('Error adding category:', error);
        }
    };

    return (
        <>
            <Box sx={{ marginBottom: '12px', width: '1200px' }}>
                <Grid>
                    <Card>
                        <CardContent>
                            <Typography component={"h6"}
                                sx={{
                                    fontSize: '20px',
                                    fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                                    fontWeight: 'bold',
                                    color: "rgb(51 65 85 / var(--tw-text-opacity, 1))"
                                }}
                            >
                                Add New Category
                            </Typography>



                            <Box onSubmit={handleSubmit} component={"form"} sx={{ width: "100%" }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-start',
                                        alignSelf: "center",
                                        margin: "10px",
                                        gap: 3,
                                        mt: 2,
                                        flexWrap: 'wrap',
                                    }}
                                >

                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <label
                                            htmlFor="search"
                                            style={{
                                                marginBottom: 9,
                                                fontSize: '16px',
                                                color: 'rgb(51 65 85)',
                                                fontWeight: 500,
                                                fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                                            }}
                                        >
                                            Category Name
                                        </label>
                                        <TextField
                                            id="search"
                                            value={data.name}
                                            onChange={(e) => handleChange("name",e.target.value)}
                                            placeholder="e.g.,Gloceries"
                                            sx={{ width: '560px', color: 'rgb(51 65 85)' }}
                                            size="small"
                                            type='text'
                                        />
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <label
                                            htmlFor="search"
                                            style={{
                                                marginBottom: 9,
                                                fontSize: '16px',
                                                color: 'rgb(51 65 85)',
                                                fontWeight: 500,
                                                fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                                            }}
                                        >
                                            Monthly Budget Limit
                                        </label>
                                        <TextField
                                            id="search"
                                            value={data.monthlyLimit}
                                            onChange={(e) => handleChange("monthlyLimit",e.target.value)}
                                            placeholder="0.00"
                                            sx={{ width: '560px', color: 'rgb(51 65 85)' }}
                                            size="small"
                                            type='number'
                                        />
                                    </Box>

                                    <Button
                                    type='submit' 
                                      sx={{
                                        textTransform: 'none',
                                        fontSize: '13px',
                                        backgroundColor: 'rgb(51 65 85)',
                                        fontWeight: 500,
                                        fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                                        borderRadius: '8px',
                                        color: "white"
                                    }}>
                                        Add Category
                                    </Button>

                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Box>


        </>


    )
}

export default AddNewCategories