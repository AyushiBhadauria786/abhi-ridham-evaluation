import Typography from '@mui/material/Typography'
import React from 'react'
import AddNewItem from './AddNewItem'
import { Box } from '@mui/material'

const Experience: React.FC = () => {
  return (
    <>
    <Box sx={{ mt: 4 }}>
       <Typography variant="h4" gutterBottom>Experience</Typography>  
       <AddNewItem sectionName='Experience' />
    </Box>
    </>
  )
}

export default Experience;
