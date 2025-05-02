import { Typography } from '@mui/material'
import React from 'react'
import AddNewItem from './AddNewItem'

const Projects: React.FC = () => {
  return (
    <div>
       <Typography variant="h4" gutterBottom sx={{mt: 4}}>Projects</Typography>  
       <AddNewItem />
    </div>
  )
}

export default Projects
