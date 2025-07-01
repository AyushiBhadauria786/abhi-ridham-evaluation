import { Box, Typography } from '@mui/material'
import React from 'react'

const OtherDetail = () => {
    return (
        <>
            <Box
                sx={{
                    border: '1px solid #ccc',
                    borderRadius: 2,
                    boxShadow: 3,
                    padding: 3,
                    backgroundColor: '#fff',
                }}
            >
                <Typography component={"div"} sx={{ fontSize: "25px", fontWeight: 500, fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}>Get in Touch</Typography>


                <Typography component={"p"} sx={{ mt: 2, fontFamily: 'ui-sans-serif, system-ui, sans-serif', color: 'rgb(51 65 85)' }}>
                    We're here to help! Reach out to us through any of the following channels:
                </Typography>


                <Typography component={"p"} sx={{ mt: 2, fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}>
                    Email
                </Typography>
                <Typography component={"p"} sx={{ mt: 0, fontFamily: 'ui-sans-serif, system-ui, sans-serif', color: 'rgb(51 65 85)' }}>
                    support@budgetbuddy.com
                </Typography>

                <Typography component={"p"} sx={{ mt: 2, fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}>
                    Phone
                </Typography>
                <Typography component={"p"} sx={{ mt: 0, fontFamily: 'ui-sans-serif, system-ui, sans-serif', color: 'rgb(51 65 85)' }}>
                    1-800-BUDGET-1
                </Typography>

                <Typography component={"p"} sx={{ mt: 2, fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}>
                    Address
                </Typography>
                <Typography component={"p"} sx={{ mt: 0, fontFamily: 'ui-sans-serif, system-ui, sans-serif', color: 'rgb(51 65 85)' }}>
                    123 Finance Street
                </Typography>
                <Typography component={"p"} sx={{ mt: 0, fontFamily: 'ui-sans-serif, system-ui, sans-serif', color: 'rgb(51 65 85)' }}>
                    Budget City, BC 12345
                </Typography>

            </Box>

            <Box
                sx={{
                    border: '1px solid #ccc',
                    borderRadius: 2,
                    boxShadow: 3,
                    padding: 3,
                    mt: 2,
                    backgroundColor: '#fff',
                }}
            >

                <Typography component={"div"} sx={{ fontSize: "25px", fontWeight: 500, fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}>Office Hours</Typography>

                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center",mt:1 }}>
                    <Typography>Monday - Friday</Typography>
                    <Typography>9:00 AM - 6:00 PM</Typography>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center",mt:1 }}>
                    <Typography>Saturday</Typography>
                    <Typography>10:00 AM - 4:00 PM</Typography>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center",mt:1 }}>
                    <Typography>Sunday</Typography>
                    <Typography>Closed</Typography>
                </Box>

                <Typography sx={{fontSize:"14px",fontFamily: 'ui-sans-serif, system-ui, sans-serif',marginTop:1}} component={"p"}>All times are in Eastern Standard Time (EST)</Typography>




            </Box>


        </>
    )
}

export default OtherDetail
