import React from 'react';
import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { field } from './Section';

interface Props {
  open: boolean;
  onClose: () => void;
  onCreate: (data: any) => void;
  title: string;
  fields: field[];
}

const FModal = ({ open, onClose, onCreate, title, fields }: Props) => {
  const { control, handleSubmit, reset, formState: { errors } } = useForm();

  const handleCreate = (data: any) => {
    onCreate(data);
    reset();
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{  bgcolor: 'white',p: 4,width: 600,maxHeight: '80vh',overflowY: 'auto',mx: 'auto',mt: '5vh',borderRadius: '5px',position: 'relative' }}>
      <Button variant="outlined" onClick={onClose}sx={{ position: 'absolute', top: 10, right: 10 ,mt:"18px",mr:"20px" , bgcolor:"#1e1e2f", color:"white" }}>X</Button>


        <Typography variant="h6" mb={"20px"}>{title}</Typography>


        <form onSubmit={handleSubmit(handleCreate)}>
          {fields.map(field => (
            <Controller
              key={field.name}
              name={field.name}
              control={control}
              rules={field.validation}
              render={({ field : newfield }) => (


                <TextField
                  {...newfield}
                  label={field.label}
                  fullWidth
                  margin="normal"
                  
                  //   type={field.type}
                  // />
                  type={field.type === 'textarea' ? 'text' : field.type}
                  multiline={field.type === 'textarea'}
                  rows={field.type === 'textarea' ? 4 : undefined}
                  error={!!errors[field.name]}
                  helperText={errors[field.name]?.message?.toString()}
                />
              )}
            />
          ))}


          <Button  type="submit" fullWidth variant="contained" sx={{ mt: 2,border: "1px solid black", width:"100%", bgcolor:"#1e1e2f", color:"white" }}>Create</Button>
          

        </form>
      </Box>
    </Modal>
  );
};

export default FModal;

                                                                                                                          