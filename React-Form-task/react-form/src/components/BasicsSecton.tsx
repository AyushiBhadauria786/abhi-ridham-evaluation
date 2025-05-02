import { Box, Button, Container, Grid, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";

interface IDataFields {
  fullName: string;
  headline: string;
  email: string;
  website: string;
  phone: string;
  location: string;
}

const BasicsSecton: React.FC = () => {
  const { formState: { errors },control,handleSubmit,} = useForm<IDataFields>({
    defaultValues: {
      fullName: "",
      headline: "",
      email: "",
      website: "",
      phone: "",
      location: "",
    },
  });

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Basics Section
      </Typography>
      
       <Box mb={2}>
        <Controller
          name="fullName"
          control={control}
          rules={{
            required: 'FullName is required',
            validate: (value: string) =>
            value.trim() !== '' || 'Blank spaces are not allowed',
          }}
          render={({ field }) => (
            <TextField fullWidth label="Full Name" variant="outlined" {...field} />
          )}
        />
      </Box>

      <Box mb={2}>
        <Controller
          name="headline"
          control={control}
          rules={{
            required: 'headline is required',
            validate: (value: string) =>
            value.trim() !== '' || 'Blank spaces are not allowed',
          }}
          render={({ field }) => (
            <TextField fullWidth label="Headline" variant="outlined" {...field} />
          )}
        />
      </Box>

      <Box display="flex" gap={2} mb={2}>
        <Controller
          name="email"
          control={control}
          rules={{
            required: 'Email is required',
            validate: (value: string) =>
            value.trim() !== '' || 'Blank spaces are not allowed',
          }}
          render={({ field }) => (
            <TextField fullWidth label="Email" variant="outlined" {...field} />
          )}
        />
        <Controller
          name="website"
          control={control}
          rules={{
            validate: (value: string) =>
            value.trim() !== '' || 'Blank spaces are not allowed',
          }}
          render={({ field }) => (
            <TextField fullWidth label="Website" variant="outlined" {...field} />
          )}
        />
      </Box>

      <Box display="flex" gap={2}>
        <Controller
          name="phone"
          control={control}
          rules={{
            required: 'Phone number is required',
            validate: (value: string) =>
            value.trim() !== '' || 'Blank spaces are not allowed',
          }}
          render={({ field }) => (
            <TextField fullWidth label="Phone" variant="outlined" {...field} />
          )}
        />
        <Controller
          name="location"
          control={control}
          rules={{
            required: 'Location is required',
            validate: (value: string) =>
            value.trim() !== '' || 'Blank spaces are not allowed',
          }}
          render={({ field }) => (
            <TextField fullWidth label="Location" variant="outlined" {...field} />
          )}
        />
        <Button variant="contained" type="submit">Submit</Button>
      </Box>
    
    </>
  );
};

export default BasicsSecton;

