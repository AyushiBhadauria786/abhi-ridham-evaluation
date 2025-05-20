import React from 'react'
import AddNewItem from './AddNewItem'
import { Box, Typography } from '@mui/material'

const Profile: React.FC = () => {
  return (
    <>
      <Box data-testid="profile-section" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Profiles</Typography>  
      <AddNewItem sectionName='Profiles' />
      </Box>
    </>
  )
}

export default Profile


