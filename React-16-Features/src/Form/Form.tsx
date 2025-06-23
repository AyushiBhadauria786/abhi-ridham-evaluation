import { Alert, Box, Button, Container, Paper, TextField, Typography } from '@mui/material';
import React, { useEffect, useState, } from 'react'

interface FormData {
    firstName: string,
    lastName: string,
    mobileNo: number | string,
    Email: string,
    City: string
}
const Form = () => {
    const [formData, setformData] = useState<FormData>({
        firstName: '',
        lastName: '',
        mobileNo: '',
        Email: '',
        City: ''
    });
    const [isStored, setisStored] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setformData(values => ({ ...values, [name]: value }))
        setisStored(false);
    }

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setformData({
            firstName: '',
            lastName: '',
            mobileNo: '',
            Email: '',
            City: ''
        })
        setisStored(false);
        localStorage.removeItem("UserData");
        alert("Form Data is submitted successfully");
    }

    useEffect(() => {
        const getData = localStorage.getItem("UserData");
        if (getData) {
            const parsedData = JSON.parse(getData) as FormData
            setformData(parsedData);
        }
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            localStorage.setItem("UserData", JSON.stringify(formData));
            setisStored(true);
        }, 1000);

        return () => clearTimeout(timeout);
    }, [formData]);

    return (
        <>
            <Container maxWidth="sm" sx={{ marginTop: "60px", borderRadius: '30px' }}>
                <Paper elevation={5} sx={{ padding: "20px", marginTop: "30px" }}>
                    <Typography variant='h3' sx={{ textAlign: "center", color: "blue",fontfamily: "sans-serif" }}>Registration</Typography>

                    <Box component={"form"} onSubmit={handleSubmit} sx={{ padding: "30px", marginTop: "20px" }}>

                        <TextField
                            label='firstName'
                            type="text"
                            name='firstName'
                            value={formData.firstName}
                            onChange={handleChange}
                            fullWidth
                        />

                        <TextField
                            label='lastName'
                            type="text"
                            name='lastName'
                            value={formData.lastName}
                            onChange={handleChange}
                            fullWidth
                            sx={{ mt: "20px" }}
                        />


                        <TextField
                            label='mobileNo'
                            type="text"
                            name='mobileNo'
                            value={formData.mobileNo}
                            onChange={handleChange}
                            fullWidth
                            sx={{ mt: "20px" }}
                        />


                        <TextField
                            label='Email'
                            type="email"
                            name='Email'
                            value={formData.Email}
                            onChange={handleChange}
                            fullWidth
                            sx={{ mt: "20px" }}
                        />


                        <TextField
                            label='City'
                            type="text"
                            name='City'
                            value={formData.City}
                            onChange={handleChange}
                            fullWidth
                            sx={{ mt: "20px" }}
                        />

                        {isStored === true && (
                            <Alert severity="success" sx={{ mt: "20px" }}>
                                Data is saved locally
                            </Alert>
                        )}


                        <Button sx={{ mt: "20px" }} variant="contained" color="primary" type="submit" fullWidth >Submit</Button>
                    </Box>
                </Paper>
            </Container>
        </>
    )
}

export default Form
