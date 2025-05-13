import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
    return (
        <Box sx={{ margin: "80px", borderRadius: "10px solid black" }}>
            <AppBar position="fixed" sx={{
                backgroundColor: '#1e1e2f', margin: 0, 
                padding: 0, 
            
                borderBottom: '2px solid #1e1e2f'
            }}>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Typography variant="h6" component="div" sx={{
                        flexGrow: 1,
                        borderRadius: '16px',
                        fontWeight: 'bold',
                        fontSize: '1.5rem',
                        letterSpacing: '0.5px',
                        color: 'white',
                        textAlign: "center"
                    }}>
                       Welcome to Portfolio Builder
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar