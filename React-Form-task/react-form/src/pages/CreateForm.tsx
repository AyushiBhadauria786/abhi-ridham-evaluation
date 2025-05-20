import { Box, Button, Container, Paper, Typography, Divider } from '@mui/material'
import React from 'react'
import BasicsSecton from '../components/BasicsSection'
import Profile from '../components/Profile'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import { useNavigate } from 'react-router'
import { useFormContext as useAppFormContext } from '../context/FormContext'

const CreateForm: React.FC = () => {
const navigate = useNavigate();
const {resetAllFormData} = useAppFormContext();

const handlePreviewClick = () => {
  resetAllFormData(); 
  navigate('/preview'); 
};

return (
  <>
  <Container maxWidth="md" sx={{ my: 4 }}> 
     <Typography variant="h3" gutterBottom textAlign="center" mb={4}>
       Build Your Profile
     </Typography>

    <Paper elevation={3} sx={{ p: { xs: 2, sm: 3, md: 4 } }}> 
      <BasicsSecton />

      <Divider sx={{ my: 4 }} /> 
      <Profile />

      <Divider sx={{ my: 4 }} />
      <Experience />

      <Divider sx={{ my: 4 }} />
      <Education />

      <Divider sx={{ my: 4 }} />
      <Skills />

      <Divider sx={{ my: 4 }} />
      <Projects />

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
          <Button
              variant="contained"
              color="primary"
              size="large" 
              onClick={() => {
                handlePreviewClick
                navigate('/preview')
              }}
          >
              Preview Profile
          </Button>
      </Box>
    </Paper>
  </Container>
  </>
);
};

export default CreateForm;


