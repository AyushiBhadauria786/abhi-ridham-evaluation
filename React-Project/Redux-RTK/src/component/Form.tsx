import { Box, Button, Container, TextareaAutosize, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import Section from './Section';
import FModal from './Fmodal';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import { type BasicData, setBasicData, setSectionData } from '../Slice/portfolioSlice';






const Form = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  

  const navigate = useNavigate();
  

  const dispatch = useDispatch();
  const basicData = useSelector((state: RootState) => state.portfolio.basicData);
  const sectionData = useSelector((state:RootState) => state.portfolio.sectionData)


  const { register, handleSubmit, setValue, formState: { errors }, reset, control } = useForm<BasicData>({
    mode: 'onChange'
  });

  

  const onSubmit = (data: BasicData) => {
    dispatch(setBasicData(data));
    console.log(basicData);
   
  };

  useEffect(() => {
    if (basicData) {
      Object.entries(basicData).forEach(([key, value]: any) => setValue(key, value));
    }
  }, [basicData, setValue]);


  return (
    <Container maxWidth="lg">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ border: "2px solid black", margin: "20px", padding: "20px" }}>
          <Typography align="left" mt={"20px"} variant="h4" id='regis'>Basic</Typography>
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

            {/* <Typography mt={"20px"} variant="h4" id='regis'>Summary</Typography> */}
               <Box sx={{ mt: "20px" }} className='form-content'>
                      <Controller
                        control={control}
                        name="Summary"
                        rules={{
                          required: "Summary is required",
                          validate: (value) => {
                            if (value.trim() === "") return "Summary cannot be blank"
                            return true;
                          },
                          pattern: {
                            value: /[A-Za-z0-9'\.\-\s\,]/,
                            message: "Summary must be valid",
                          },
                        }}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            label="Summary"
                            multiline
                            minRows={4}
                            fullWidth
                            margin="normal"
                            className="reg"
                            placeholder="Enter the Summary"
                            error={!!errors.Summary}
                            helperText={errors.Summary?.message}
                          />
                        )}
                      />
                    </Box>
          
        {/* <Summary/> */}



          {Section.map(section => (
            <Box key={section.title} sx={{ mt: "20px" }}>
              <Typography align='left' mt={"20px"} mb={"20px"} variant="h4">{section.title}</Typography>


              {(sectionData[section.title] || []).map((item, index) => (
                <Box key={index} sx={{ mt: 1, mb: 2,border: "1px solid black", borderRadius: 1 }}>
                  {section.fields.map(f => (
                    <Typography align='left' sx={{ ml: "10px" }} key={f.name}>{f.name}: {item[f.name]}</Typography>
                  ))}
                  
                </Box>
              ))}
              <Button
                sx={{ border: "1px solid black", width: "100%", bgcolor: "#f5f7fa", color: "inherit" }}
                onClick={() => {
                  setSelectedSection(section.title);
                  setOpenModal(true);
                }}
              >
                + add a new item
              </Button>


              
            </Box>
          ))}

          <FModal
            open={openModal}
            onClose={() => setOpenModal(false)}
            onCreate={(data) => {
              if (!selectedSection) return;
              dispatch(setSectionData(data))
              setOpenModal(false);
            }}

            title={selectedSection || ""}
            fields={Section.find(s => s.title === selectedSection)?.fields || []}

          />

          <Box sx={{ mt: "20px" }}>
            <Button
              sx={{ border: "1px solid black", width: "100%", bgcolor: "#1e1e2f", color: "white" }}
              onClick={handleSubmit((data) => {
                dispatch(setBasicData(data));
                navigate("/preview");
              })}
            >
              Preview
            </Button>

          </Box>


        </Box>
      </form>
    </Container>
  )
}

export default Form



