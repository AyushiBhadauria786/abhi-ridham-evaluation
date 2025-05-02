import { Box, Container, Paper, Typography } from '@mui/material'
import React from 'react'
import BasicsSecton from '../components/BasicsSecton'

const CreateForm = () => {
  return (
    <>
    <Box sx={{margin: 5}}>
      
    {/* <Typography variant="h3">
      Create Form
    </Typography> */}

    <Container sx={{ mt:2}}>
        <BasicsSecton />
    </Container>
    </Box>
    </>
  )
}

export default CreateForm