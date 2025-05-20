import { Box, Typography } from '@mui/material'
import React from 'react'
import AddNewItem from './AddNewItem'

const Skills: React.FC = () => {
  return (
    <>
      <Box data-testid="skills-section" sx={{ mt: 4 }}>
       <Typography variant="h4" gutterBottom>Skills</Typography>  
       <AddNewItem sectionName='Skills' />
      </Box>
    </>
  )
}

export default Skills
