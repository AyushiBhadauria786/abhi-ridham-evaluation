import { Typography } from '@mui/material'
import React from 'react'
import AddNewItem from './AddNewItem'

const Education: React.FC = () => {
  return (
    <>
       <Typography variant="h4" gutterBottom sx={{mt: 4}}>Education</Typography>  
       <AddNewItem />
    </>
  )
}

export default Education
