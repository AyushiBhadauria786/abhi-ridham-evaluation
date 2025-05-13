import React from 'react';
import { Container, Typography, Box,  Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useStore } from '../store/store';

const Preview = () => {


  const basicData = useStore((state)=>state.basicData);
  const sectionData = useStore((state) => state.sectionData);
  const resetForm = useStore((state)=>state.resetForm);

  const navigate = useNavigate();

  const { reset } = useForm(); 


  const handleBack = () => {
    navigate('/form'); 
  };

  const handleDone = () => {
    reset(); 
    resetForm();
    navigate('/'); 
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        backgroundColor: '#fff',
        p: 4,
        borderRadius: 2,
        boxShadow: 3,
        mt: 4,
        mb: 4,
      }}
    >
      <Typography
        variant="h4"
        mb={3}
        sx={{
          fontWeight: 'bold',
          borderBottom: '2px solid #000',
          textAlign : "center",
        }}
      >
         Preview
      </Typography>

      {basicData && (
        <Box  mb={4}>
          <Typography variant="h5" sx={{ fontWeight: 'bold',}} mb={4}>
            Basic Information
          </Typography>
          <Box sx={{  p: 2,mb: 2,backgroundColor: '#f9f9f9',border: '1px solid #ddd',borderRadius: 2,}} >
          {Object.entries(basicData).map(([key, value]) => (
            <Box key={key} display="flex" mb={1}>
              <Typography sx={{ width: 150, fontWeight: 'bold' }}>
                {key}:
              </Typography>
              <Typography>{value}</Typography>
            </Box>
          ))}
        </Box>
     </Box>
      )}



      {Object.entries(sectionData).map(([section, items]) => (
        <Box key={section} mb={4}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
            {section}
          </Typography>
          {items.map((item, idx) => (
            <Box
              key={idx}
              sx={{
                p: 2,
                mb: 2,
                backgroundColor: '#f9f9f9',
                border: '1px solid #ddd',
                borderRadius: 2,
              }}
            >
              {Object.entries(item).map(([key, value]:any) => (
                <Box key={key} display="flex" mb={1}>
                  <Typography sx={{ width: 150, fontWeight: 'bold' }}>
                    {key}:
                  </Typography>
                  <Typography>{value}</Typography>
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      ))}
      <Box sx={{display:"flex",justifyContent:"space-between",mt:2}} > 
      <Button
        variant="outlined"
        color="primary"
        onClick={handleBack}
        sx={{ mt: 2,border: "1px solid black", alignItems:"center", bgcolor:"#1e1e2f", color:"white" }}
      >
        Back
      </Button>
      
      
      <Button
        variant="outlined"
        color="primary"
        onClick={handleDone}
        sx={{ mt: 2,border: "1px solid black", alignItems:"center", bgcolor:"#1e1e2f", color:"white" }}
      >
        Done
      </Button>

      </Box>
    
    </Container>
  );
};

export default Preview;