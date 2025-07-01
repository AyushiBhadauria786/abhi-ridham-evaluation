import React from 'react'
import ContactDetail from '../Component/Contact/ContactDetail'
import OtherDetail from '../Component/Contact/OtherDetail'
import { Box, Container, Typography } from '@mui/material'

const Contact = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'rgb(248 250 252)',
        minHeight: '100vh',
        py: 2,
      }}
    >
      <Container maxWidth="md">
        <Typography
          component="h3"
          sx={{
            fontSize: "25px",
            fontFamily: "ui-sans-serif, system-ui, sans-serif",
            fontWeight: "bold",
            mb: 2
          }}
        >
          Contact Us
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <ContactDetail />
          </Box>

          <Box sx={{ flex: 1 }}>
            <OtherDetail />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Contact
