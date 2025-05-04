import { Box, Typography } from '@mui/material'
import React from 'react'
import AddNewItem from './AddNewItem'

const Projects: React.FC = () => {
  return (
    <Box sx={{ mt: 4 }}>
       <Typography variant="h4" gutterBottom>Projects</Typography>  
       <AddNewItem sectionName='Projects' />
    </Box>
  )
}

export default Projects;
