import { Box, Button, Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import CreateForm from './CreateForm'

const Home = () => {
    const[showForm,setShowForm] = useState(false)

    if(showForm){
        return <CreateForm />
    }

  return (
    <>
     <Box 
     sx={{
        minHeight: '50vh',
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        p: 4,
     }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h2" component="h2" sx={{ color: 'text.primary' }}>
            Profile Builder
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', fontSize: '1.25rem' }}>
            Create a minimal portfolio with our basic details form
          </Typography>
          <Button 
            variant="contained" 
            color="primary"
            size="large"
            onClick={() => setShowForm(true)}
            sx={{ px: 2, py: 1 }} 
          >
            Create Form
          </Button>
        </Box>
      </Container>
    </Box>   
    </>
  )
}

export default Home