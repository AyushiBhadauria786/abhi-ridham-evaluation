import { Box, Button, Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import CreateForm from './CreateForm'
import { useNavigate } from 'react-router'

const Home: React.FC = () => {
    const navigate = useNavigate();


  return (
    <>
     <Box 
     sx={{
        minHeight: '80vh',
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        textAlign: 'center',
        p: 4,
     }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h2" component="h1" sx={{ mb: 2 , fontWeight: "bold" }}>
            Profile Builder
          </Typography>
          <Typography variant="h6" component="p" sx={{ mb: 4, color: 'text.secondary' }}>
            Create a minimal portfolio with our basic details form.
          </Typography>
          <Button 
            variant="contained" 
            color="primary"
            size="large"
            onClick={() => navigate('/form')}
            sx={{ px: 4, py: 1.5 }} 
          >
            Create Your Profile
          </Button>
        </Box>
      </Container>
    </Box>   
    </>
  )
}

export default Home