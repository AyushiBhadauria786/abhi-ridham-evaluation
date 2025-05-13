import React from 'react';
// import { useFormContext as useAppFormContext } from '../context/FormContext';
import { useSelector } from 'react-redux';
import { Box, Button, Typography, Container, Paper, Divider, Grid } from '@mui/material';
import { useNavigate } from 'react-router';
import { SectionName, ListSectionName } from '../types/type';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { RootState } from '../store/store';
import { selectFormData } from '../store/formSlice';

const PreviewForm: React.FC = () => {
  const formData = useSelector(selectFormData);
  const navigate = useNavigate();

  const renderListSection = (section: Exclude<SectionName, 'Basics'>, title: string) => {
    const items = formData[section];
    if (!items || items.length === 0) return null; 


    return (
      <Box mb={3}>
        <Typography variant="h5" gutterBottom>{title}</Typography>
        {items.map((item, idx) => (
          <Paper
            key={`${section}-${idx}`}
            elevation={1}
            sx={{ p: 2, mb: 2 }} 
          >
            {Object.entries(item).map(([key, value]) => (
              (value != null && String(value).trim() !== '') ? (
              <Typography key={key} variant="body2" sx={{ mb: 0.5 }}>
                  <strong style={{ textTransform: 'capitalize' }}>{key.replace(/([A-Z])/g, ' $1').trim()}:</strong>
                   {String(value)}
              </Typography>
              ) : null
            ))}
          </Paper>
        ))}
      </Box>
    );
  };

  const basicsContent = formData.Basics;
  const sectionsToRender: { name: ListSectionName; title: string }[] = [
    { name: 'Profiles', title: 'Profiles' },
    { name: 'Experience', title: 'Experience' },
    { name: 'Education', title: 'Education' },
    { name: 'Skills', title: 'Skills' },
    { name: 'Projects', title: 'Projects' },
  ];

  const renderedListSections = sectionsToRender.map(sec => ({
    ...sec,
    content: renderListSection(sec.name, sec.title)
  })).filter(sec => sec.content !== null);


  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
    <Typography variant="h3" gutterBottom textAlign="center" mb={4}>
      Profile Preview
    </Typography>
    <Paper elevation={3} sx={{ p: { xs: 2, sm: 3, md: 4 } }}>

      <Button
         variant="outlined"
         color="primary"
         startIcon={<ArrowBackIcon />}
         onClick={() => navigate('/form')}
         sx={{ mb: 3 }}
      >
        Back to Form
      </Button>

  
      {basicsContent && (
        <Box mb={4}> 
          <Typography variant="h4" gutterBottom>{basicsContent.fullName}</Typography>
          <Typography variant="subtitle1" color="textSecondary" gutterBottom>{basicsContent.headline}</Typography>
          <Box sx={{ mb: 2 }}>
              <Typography variant="body1"><strong>Email:</strong> {basicsContent.email}</Typography>
              <Typography variant="body1"><strong>Phone:</strong> {basicsContent.phone}</Typography>
              <Typography variant="body1"><strong>Location:</strong> {basicsContent.location}</Typography>
              {basicsContent.website && <Typography variant="body1"><strong>Website:</strong> <a href={basicsContent.website}>{basicsContent.website}</a></Typography>}
          </Box>
           {basicsContent.summary && (
              <>
                  <Typography variant="h6" mt={2}>Summary</Typography>
                  <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>{basicsContent.summary}</Typography>
              </>
           )}
        </Box>
      )}

  
{renderedListSections.map((section, index) => (
           <React.Fragment key={section.name}>
            {(basicsContent || index > 0) && <Divider sx={{ my: 3 }} />}
            {section.content}
           </React.Fragment>
        ))}

      </Paper>
    </Container>
  );
};

export default PreviewForm;