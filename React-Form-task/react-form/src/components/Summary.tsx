import { TextField, Typography } from '@mui/material'
import React from 'react'

const Summary: React.FC = () => {
  return (
    <>
        <Typography variant="h4" gutterBottom>
        Summary
        </Typography>
      <TextField fullWidth  multiline/>
    </>
  )
}

export default Summary
