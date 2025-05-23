import { Box, Typography } from '@mui/material'
import React from 'react'
import AddNewItem from './AddNewItem'

const Education: React.FC = () => {
  return (
    <>
      <Box data-testid="education-section"  sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Education</Typography>  
      <AddNewItem sectionName='Education' />
      </Box>
    </>
  )
}

export default Education
