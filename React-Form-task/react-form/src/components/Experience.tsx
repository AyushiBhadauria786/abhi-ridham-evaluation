import Typography from '@mui/material/Typography'
import React from 'react'
import AddNewItem from './AddNewItem'

const Experience: React.FC = () => {
  return (
    <>
       <Typography variant="h4" gutterBottom sx={{mt: 4}}>Experience</Typography>  
       <AddNewItem />
    </>
  )
}

export default Experience
