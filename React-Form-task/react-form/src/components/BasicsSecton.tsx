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
        <Typography variant="body1" fontStyle="">Full Name</Typography>
        <Controller
          name="fullName"
          control={control}
          rules={{
            required: 'FullName is required',
            validate: (value: string) =>
            value.trim() !== '' || 'Blank spaces are not allowed',
          }}
          render={({ field }) => (
            <TextField {...field} fullWidth placeholder="Enter Full Name" variant="outlined"  helperText={errors.fullName?.message}/>
          )}
        />
      </Box>

      <Box mb={2}>
      <Typography variant="body1" fontStyle="">Headline</Typography>
        <Controller
          name="headline"
          control={control}
          rules={{
            required: 'headline is required',
            validate: (value: string) =>
            value.trim() !== '' || 'Blank spaces are not allowed',
          }}
          render={({ field }) => (
            <TextField {...field} fullWidth placeholder="Enter Headline" variant="outlined" helperText={errors.headline?.message}  />
          )}
        />
      </Box>
      
      <Box display="flex" justifyContent="space-between" gap={2} >
      <Typography variant="body1" >Email</Typography>
      <Typography variant="body1" sx={{justifyContent: "space-between"}}>Website</Typography>
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
            <TextField {...field} fullWidth placeholder="Enter Email" variant="outlined" helperText={errors.email?.message}  />
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
            <TextField {...field} fullWidth placeholder="Enter Website" variant="outlined" helperText={errors.website?.message} />
          )}
        />
      </Box>

      <Box display="flex" justifyContent="space-between" gap={2} >
      <Typography variant="body1" >Phone</Typography>
      <Typography variant="body1" sx={{justifyContent: "space-between"}}>Location</Typography>
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
            <TextField {...field} fullWidth placeholder="Enter Phone Number" variant="outlined" helperText={errors.phone?.message}  />
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
            <TextField {...field} fullWidth placeholder="Enter Location" variant="outlined" helperText={errors.location?.message}  />
          )}
        />
      </Box>
        {/* <Button variant="contained" type="submit" onClick={() => console.log("all data")} sx={{mt: 2}}>Submit</Button> */}
    
    </>
  );
};

export default BasicsSecton;

