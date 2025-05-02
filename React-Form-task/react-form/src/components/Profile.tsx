import React from 'react'
import AddNewItem from './AddNewItem'
import { Typography } from '@mui/material'

const Profile: React.FC = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom sx={{mt: 4}}>Profile</Typography>  
      <AddNewItem />
    </>
  )
}

export default Profile
