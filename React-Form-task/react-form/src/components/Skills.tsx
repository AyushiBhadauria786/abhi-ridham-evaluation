import { Typography } from '@mui/material'
import React from 'react'
import AddNewItem from './AddNewItem'

const Skills: React.FC = () => {
  return (
    <>
       <Typography variant="h4" gutterBottom sx={{mt: 4}}>Skills</Typography>  
       <AddNewItem />
    </>
  )
}

export default Skills
