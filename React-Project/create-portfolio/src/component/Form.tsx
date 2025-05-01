import { Box, Button, Container, TextareaAutosize, TextField, Typography } from '@mui/material';
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import Summary from './Summary';

interface Ifeild {
  FullName: string;
  Headline: string;
  Email: string;
  Website: string;
  Phone: number;
  Location: string;
  Summary: string;
}

const Form = () => {
  const { register, handleSubmit, formState: { errors }, reset, control } = useForm<Ifeild>({
    mode: 'onChange'
  });

  const onSubmit = (data: Ifeild) => {
    console.log("Submitted Data:", data);
  };
  
  return (
    <Container maxWidth="lg">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ border: "2px solid black", margin: "20px", padding: "20px" }}>
          <Typography mt={"20px"} variant="h4" id='regis'>Basic</Typography>
          <Box className='form-content'>
            <Controller
              control={control}
              name="FullName"
              rules={{
                required: "FullName is required",
                validate: (value) => {
                  if (value.trim() === "") return "FullName cannot be blank"
                  return true;
                },
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "FullName must contain  only alphabets",
                },
              }}

              render={({ field }) => (
                <TextField {...field}
                  label="Full Name" fullWidth
                  margin="normal"
                  type="text"
                  className="reg"
                  placeholder="Enter the FullName"
                  error={!!errors.FullName}
                  helperText={errors.FullName?.message} />
              )}
            />

          </Box>


          <Box className='form-content'>
            <Controller
              control={control}
              name="Headline"
              rules={{
                required: "Headline is required",
                validate: (value) => {
                  if (value.trim() === "") return "Headline cannot be blank"
                  return true;
                },
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Headline must contain  only alphabets",
                },
              }}

              render={({ field }) => (
                <TextField {...field}
                  label="Headline " fullWidth
                  margin="normal"
                  type="text"
                  className="reg"
                  placeholder="Enter the Headline"
                  error={!!errors.Headline}
                  helperText={errors.Headline?.message} />
              )}
            />

          </Box>


          <Box sx={{ display: 'flex', justifyContent: "space-between", gap: 2 }}>
            <Box sx={{ flex: 1, mr: 1 }} className='form-content'>
              <Controller
                control={control}
                name="Email"
                rules={{
                  required: "Email is required",
                  validate: (value) => {
                    if (value.trim() === "") return "Email cannot be blank"
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Email must be valid",
                  },
                }}

                render={({ field }) => (
                  <TextField {...field}
                    label="Email " fullWidth
                    margin="normal"
                    type="text"
                    className="reg"
                    placeholder="Enter the Email"
                    error={!!errors.Email}
                    helperText={errors.Email?.message} />
                )}
              />
            </Box>

            <Box sx={{ flex: 1 }} className='form-content'>
              <Controller
                control={control}
                name="Website"
                rules={{
                  required: "Website is required",
                  validate: (value) => {
                    if (value.trim() === "") return "Website cannot be blank"
                  },
                  pattern: {
                    value: /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/,
                    message: "Website must be valid",
                  },
                }}

                render={({ field }) => (
                  <TextField {...field}
                    label="Website " fullWidth
                    margin="normal"
                    type="text"
                    className="reg"
                    placeholder="Enter the Website"
                    error={!!errors.Website}
                    helperText={errors.Website?.message} />
                )}
              />
            </Box>
          </Box>




          <Box sx={{ display: 'flex', justifyContent: "space-between", gap: 2 }}>
            <Box sx={{ flex: 1, mr: 1 }} className='form-content'>
              <Controller
                control={control}
                name="Phone"
                rules={{
                  required: "Phone is required",
                  pattern: {
                    value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                    message: "Phone must be numbers",
                  },
                }}

                render={({ field }) => (
                  <TextField {...field}
                    label="Phone " fullWidth
                    margin="normal"
                    type="text"
                    className="reg"
                    placeholder="Enter the Phone"
                    error={!!errors.Phone}
                    helperText={errors.Phone?.message} />
                )}
              />
            </Box>

            <Box sx={{ flex: 1 }} className='form-content'>
              <Controller
                control={control}
                name="Location"
                rules={{
                  required: "Location is required",
                  validate: (value) => {
                    if (value.trim() === "") return "Location cannot be blank"
                  },
                  pattern: {
                    value: /[A-Za-z0-9'\.\-\s\,]/,
                    message: "Location must be valid",
                  },
                }}

                render={({ field }) => (
                  <TextField {...field}
                    label="Location " fullWidth
                    margin="normal"
                    type="text"
                    className="reg"
                    placeholder="Enter the Location"
                    error={!!errors.Location}
                    helperText={errors.Location?.message} />
                )}
              />
            </Box>
          </Box>
        <Summary/>

        <Typography mt={"20px"} variant="h4" id='regis'>Profile</Typography>
        <Box sx={{ mt:"20px" }}>
          <Button sx={{ border: "1px solid black", width:"100%", bgcolor:"#f5f7fa", color:"inherit"}} >
            + add a new item
          </Button>
        </Box>

        <Typography mt={"20px"} variant="h4" id='regis'>Experience</Typography>
        <Box sx={{ mt:"20px" }}>
          <Button sx={{ border: "1px solid black", width:"100%", bgcolor:"#f5f7fa", color:"inherit"}} >
            + add a new item
          </Button>
        </Box>
        


        <Typography mt={"20px"} variant="h4" id='regis'>Education</Typography>
        <Box sx={{ mt:"20px" }}>
          <Button sx={{ border: "1px solid black", width:"100%", bgcolor:"#f5f7fa", color:"inherit"}} >
            + add a new item
          </Button>
        </Box>


        <Typography mt={"20px"} variant="h4" id='regis'>Skills</Typography>
        <Box sx={{ mt:"20px" }}>
          <Button sx={{ border: "1px solid black", width:"100%", bgcolor:"#f5f7fa", color:"inherit"}} >
            + add a new item
          </Button>
        </Box>


        <Typography mt={"20px"} variant="h4" id='regis'>Languages</Typography>
        <Box sx={{ mt:"20px" }}>
          <Button sx={{ border: "1px solid black", width:"100%", bgcolor:"#f5f7fa", color:"inherit"}} >
            + add a new item
          </Button>
        </Box>

        <Typography mt={"20px"} variant="h4" id='regis'>Projects</Typography>
        <Box sx={{ mt:"20px" }}>
          <Button sx={{ border: "1px solid black", width:"100%", bgcolor:"#f5f7fa", color:"inherit"}} >
            + add a new item
          </Button>
        </Box>

        <Box sx={{ mt:"20px" }}>
          <Button sx={{ border: "1px solid black", width:"100%", bgcolor:"#1e1e2f", color:"white"}} >
            Preview
          </Button>
        </Box>


        </Box>
      </form>
    </Container>
  )
}

export default Form


