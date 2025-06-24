import { Box, Button, Container, TextField, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'
import React from 'react'
import { Controller } from 'react-hook-form'

const LoginPage = () => {
  return (
    <>
      <Box>
        <Typography color="primary" align="center" variant="h5" id='regis'>FinanceFlow</Typography>
        <Container maxWidth = "sm" sx={{border:"1px solid black",padding:"10px", mt:"15px"}}>

     
        <Box className='form-content'>
          <TextField
            label="Email" fullWidth
            margin="normal"
            type="text"
            className="reg"
            placeholder="Enter the Email"
          />
        </Box>

        <Box className='form-content'>
          <TextField
            label="password" fullWidth
            margin="normal"
            type="text"
            className="reg"
            placeholder="Enter the Password"
          />
        </Box>

        <Button variant="contained" fullWidth sx={{mt:"10px"}}>
          Log In 
        </Button>
        
        </Container>

      </Box>

    </>
  )
}
export default LoginPage