import { Box, Container, Paper, Typography } from '@mui/material'
import React from 'react'
import BasicsSecton from '../components/BasicsSecton'
import Summary from '../components/Summary'
import Profile from '../components/Profile'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

const CreateForm = () => {
  return (
    <>
    <Box sx={{margin: 5}}>
      
    {/* <Typography variant="h3">
      Create Form
    </Typography> */}

    <Container sx={{ mt:2}}>
        <BasicsSecton />
        <Box mt={4}>
          <Summary /> 
        </Box>
        <Profile />
        <Experience />
        <Education />
        <Skills />
        <Projects />
    </Container>
    </Box>
    </>
  )
}

export default CreateForm