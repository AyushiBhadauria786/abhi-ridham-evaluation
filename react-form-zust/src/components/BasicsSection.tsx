import { Box, Button, Container, Grid, Paper, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
// import { useFormContext as useAppFormContext } from "../context/FormContext";
import { useFormStore } from "../store/formStore"; 
import { BasicData } from "../types/type";


const BasicsSection: React.FC = () => {
  // const { updateBasicsData, formData } = useAppFormContext(); 
  const updateBasicsData = useFormStore((state) => state.updateBasicsData);
  const formData = useFormStore((state) => state.formData);


  const { formState: { errors },control,handleSubmit,reset} = useForm<BasicData>({
    defaultValues: {
      fullName: "",
      headline: "",
      email: "",
      website: "",
      phone: "",
      location: "",
      summary: "",
    },
  });

  useEffect(() => {
    if (formData.Basics) {
      reset(formData.Basics);
    } else {
        reset({
            fullName: "",
            headline: "",
            email: "",
            website: "",
            phone: "",
            location: "",
            summary: "",
          });
    }
  }, [formData.Basics, reset]);

  const onSubmit: SubmitHandler<BasicData> = (data) => {
    const cleanedData: BasicData = {
        ...data,
        fullName: data.fullName.trim(),
        headline: data.headline.trim(),
        email: data.email.trim(),
        website: data.website?.trim() || '',
        phone: data.phone.trim(),
        location: data.location.trim(),
        summary: data.summary?.trim() || '',
    };
    updateBasicsData(cleanedData);
  };

  const hasOnlySpecialCharacters = (value: string) => {
    const onlySpecialCharsRegex = /^[^a-zA-Z0-9]+$/;
    return onlySpecialCharsRegex.test(value);
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Basics Section
      </Typography>


      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2.5 }}>
          <Box sx={{flex: 1}}>
            <Controller
              name="fullName"
              control={control}
              rules={{
                required: 'FullName is required',
                validate: (value: string) =>{
                  if (value.trim() === "") return "Blank spaces are not allowed";
                  if (hasOnlySpecialCharacters(value)) return "Input cannot contain only special characters";
                  return true;
                }
              }}
              render={({ field }) => (
                <TextField label="Full Name" {...field} fullWidth placeholder="Enter Full Name" variant="outlined" error={!!errors.fullName}  helperText={errors.fullName?.message}/>
              )}
            />
          </Box>

          <Box sx={{flex: 1}}>
            <Controller
              name="headline"
              control={control}
              rules={{
                required: 'Headline is required',
                validate: (value: string) => {
                  if (value.trim() === "") return "Blank spaces are not allowed";
                  if (hasOnlySpecialCharacters(value)) return "Input cannot contain only special characters";
                  return true;
                }
              }}
              render={({ field }) => (
                <TextField label="Headline" {...field} fullWidth placeholder="Sofware Developer" variant="outlined" error={!!errors.headline} helperText={errors.headline?.message}  />
              )}
            />
          </Box>
        </Box>
        

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2.5 }}>      
        <Box sx={{flex: 1 }}>
        <Controller
              name="email"
              control={control}
              rules={{
                required: 'Email is required',
                pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address" },
                validate: (value: string) =>
                  value.trim() !== '' || 'Blank spaces are not allowed',
              }}
              render={({ field }) => (
                <TextField label="Email" type="email" {...field} fullWidth placeholder="Enter Email" variant="outlined" error={!!errors.email} helperText={errors.email?.message}  />
              )}
              />
            </Box>
            <Box sx={{flex: 1 }}>
            <Controller
              name="website"
              control={control}
              rules={{
                required: 'Website url is required',
                validate: (value) => {
                  if(typeof value === 'string'){
                    if(value.trim() === '' && value !== ''){
                      return 'Blank spaces are not allowed if field is not empty'
                    }
                    if (value.trim() !== '' && hasOnlySpecialCharacters(value)) return "Input cannot contain only special characters";
                    return true;
                  }
                  return true;
                }
              }}
              render={({ field }) => (
                <TextField label="Website" {...field} type="url" fullWidth placeholder="https://example.com" variant="outlined" error={!!errors.website} helperText={errors.website?.message}   value={field.value ?? ''} />
              )}
              />
            </Box>
          </Box>

      
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2.5 }}>      
          <Box sx={{flex: 1 }}>
          <Controller
              name="phone"
              control={control}
              rules={{
                required: 'Phone number is required',
                validate: (value: string) =>{
                  if (value.trim() === "") return "Blank spaces are not allowed";
                  if (hasOnlySpecialCharacters(value)) return "Input cannot contain only special characters";
                  return true;
                }
              }}
              render={({ field }) => (
                <TextField label="Phone" type="tel" {...field} fullWidth placeholder="Enter Phone Number" variant="outlined" error={!!errors.phone} helperText={errors.phone?.message}  />
              )}
              />
            </Box>
            <Box sx={{flex: 1 }}>
            <Controller
              name="location"
              control={control}
              rules={{
                required: 'Location is required',
                validate: (value: string) => {
                  if (value.trim() === "") return "Blank spaces are not allowed";
                  if (hasOnlySpecialCharacters(value)) return "Input cannot contain only special characters";
                  return true;
                }
              }}
              render={({ field }) => (
                <TextField label="Location" {...field} fullWidth placeholder="Enter Location" variant="outlined" error={!!errors.location} helperText={errors.location?.message}  />
              )}
              />
            </Box>
          </Box>

          <Box> 
              <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>
                Summary
              </Typography>
              <Controller
                  name="summary"
                  control={control}
                  rules={{
                    required: 'Summay is required',
                    validate: (value: string | undefined) => { 
                      if (typeof value === 'string') {
                        if (value.trim() === "" && value !== "") return "Blank spaces are not allowed if field is not empty";
                        if (value.trim() !== "" && hasOnlySpecialCharacters(value)) return "Input cannot contain only special characters";
                      }
                      return true;
                    }
                  }}
                  render={({ field }) => (
                    <TextField  {...field} fullWidth multiline rows={4} variant="outlined" error={!!errors.summary} helperText={errors.summary?.message} value={field.value ?? ''}/>
                  )}
              />
            </Box>
      
          <Button type="submit" variant="outlined" sx={{ mt: 1, alignSelf: 'flex-end' }}>
            Save Details
          </Button>
      </Box>
    </>
  );
};

export default BasicsSection;