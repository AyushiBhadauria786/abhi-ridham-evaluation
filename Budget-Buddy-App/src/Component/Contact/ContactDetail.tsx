import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React from 'react'

const ContactDetail = () => {
  return (
      <Box
      component="form"
      sx={{
        border: '1px solid #ccc',
        borderRadius: 2,
        boxShadow: 3,
        padding: 3,
        backgroundColor: '#fff',
      }}
        
      >
        <Typography component={"div"} sx={{fontSize:"25px",fontWeight: 500,fontFamily: 'ui-sans-serif, system-ui, sans-serif'}}>Send us a Message</Typography>

        <Box>
          <label
            htmlFor="name"
            style={{
              display: 'block',
              marginTop: 15,
              marginBottom: 4,
              color: 'rgb(51 65 85)',
              fontWeight: 500,
              fontFamily: 'ui-sans-serif, system-ui, sans-serif'
            }}
          >
            Your Name
          </label>
          <TextField
            fullWidth
            margin="dense"
            type="text"
            size="small"
            placeholder="Enter your full name"
            required
          />
        </Box>

     
        <Box>
          <label
            htmlFor="email"
            style={{
              display: 'block',
              marginTop: 15,
              marginBottom: 4,
              color: 'rgb(51 65 85)',
              fontWeight: 500,
              fontFamily: 'ui-sans-serif, system-ui, sans-serif'
            }}
          >
            Your Email
          </label>
          <TextField
            fullWidth
            margin="dense"
            size="small"
            placeholder="Enter your email address"
            type='email'
            required
          />
        </Box>

        <Box>
          <label
            htmlFor="subject"
            style={{
              display: 'block',
              marginTop: 15,
              marginBottom: 4,
              color: 'rgb(51 65 85)',
              fontWeight: 500,
              fontFamily: 'ui-sans-serif, system-ui, sans-serif'
            }}
          >
            Subject
          </label>
          <TextField
            fullWidth
            margin="dense"
            size="small"
            type="text"
            placeholder="What is this about?"
            required
          />
        </Box>

  
        <Box>
          <label
            htmlFor="message"
            style={{
              display: 'block',
              marginTop: 15,
              marginBottom: 4,
              color: 'rgb(51 65 85)',
              fontWeight: 500,
              fontFamily: 'ui-sans-serif, system-ui, sans-serif'
            }}
          >
            Message
          </label>
          <TextField
            multiline
            minRows={5}
            fullWidth
            margin="dense"
            size="small"
            type="text"
            placeholder="Tell us how we can help you"
          />
        </Box>

      
        <Box sx={{ display: "flex", marginTop: "20px", gap: 2 }}>
          <Button
            type='submit'
            sx={{
              fontSize: 14,
              fontFamily: "ui-sans-serif, system-ui, sans-serif",
              color: "white",
              backgroundColor: "rgb(51 65 85)",
              width: "100%"
            }}
          >
            Send Message
          </Button>
        </Box>
      </Box>
  
  )
}

export default ContactDetail;
