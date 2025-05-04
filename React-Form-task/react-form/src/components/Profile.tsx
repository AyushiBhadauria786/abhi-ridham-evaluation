import React from 'react'
import AddNewItem from './AddNewItem'
import { Box, Typography } from '@mui/material'

const Profile: React.FC = () => {
  return (
    <>
      <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Profiles</Typography>  
      <AddNewItem sectionName='Profiles' />
      </Box>
    </>
  )
}

export default Profile
