import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ModalFormData as ModalFormConfigData } from "../../data/ModalFormData";
import TextField from "@mui/material/TextField";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import {  SectionData, FormField, ListSectionName, SectionName } from "../../types/type";
// import { useFormContext as useAppFormContext } from "../../context/FormContext";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import CloseIcon from '@mui/icons-material/Close';
import IconButton from "@mui/material/IconButton";
import { AppDispatch } from "../../store/store";
import { addListItemData as addListItemAction, updateListItemData as updateListItemAction } from "../../store/formSlice";
import { useDispatch } from "react-redux";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: '95%', sm: '80%', md: '60%', lg: '50%' },
  maxHeight: "90vh",
  overflowY: "auto",
  bgcolor: "background.paper",
  border: "1px solid #ccc",
  borderRadius: 2,
  boxShadow: 24,
  p: { xs: 2, sm: 3, md: 4 },
};



interface CommonModalProps {
  open: boolean;
  onClose: () => void;
  sectionName: ListSectionName;
  editIndex?: number | null;
  initialData?: SectionData | null;
  
}

const CommonModal: React.FC<CommonModalProps> = ({open,onClose,sectionName,editIndex = null, initialData = null}) => {

  // const { addListItemData, updateListItemData } = useAppFormContext();
     const dispatch = useDispatch<AppDispatch>();


  const sectionConfig = ModalFormConfigData.find((item) => item.Name === sectionName);
  const fields = sectionConfig?.data || [];

  const { handleSubmit, control, reset, formState: { errors, isSubmitting, isValid } } = useForm<SectionData>({
    mode: "onChange",
    defaultValues: {}, 
  });

  useEffect(() => {
    if (open) {
       const defaultValues: SectionData = {};
       if (editIndex !== null && initialData) {
            fields.forEach(field => {
                defaultValues[field.name] = initialData[field.name] ?? '';
            });
       } else {
            fields.forEach(field => {
                defaultValues[field.name] = '';
            });
       }
       reset(defaultValues); 
    }
  }, [open, reset, fields, editIndex, initialData,sectionName]);

  const onSubmit: SubmitHandler<SectionData> = (formData) => {
    try {
      const cleanedData: SectionData = {};
      for(const key in formData){
        const value = formData[key];
        if(typeof value === 'string') {
          const trimmedValue = value.trim();
          if(trimmedValue !== ''){
            cleanedData[key] = trimmedValue;
          }else if (value !== undefined && value !== null){
            cleanedData[key] = value
          }
        }
      }
      const hasRequiredFields = fields.some(f => f.validation?.required);
      if (Object.keys(cleanedData).length === 0 && hasRequiredFields) {
        console.warn("Empty form");
        return;
      }

      if (editIndex !== null) {
        dispatch(updateListItemAction({ section: sectionName, index: editIndex, data: cleanedData }));
      } else {
        dispatch(addListItemAction({ section: sectionName, data: cleanedData }));
      }
      onClose();
    } catch (error) {
      console.error("Failed to save data:", error);
    }
  };

  if (!sectionConfig) {
    console.error(`No modal configuration found for section: ${sectionName}`);
    return null;
  }

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
         <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h6" component="h2">
                {editIndex !== null ? `Edit Item` : `Add ${sectionName} Item`}
            </Typography>
            <IconButton onClick={onClose} size="small">
                <CloseIcon />
            </IconButton>
         </Box>

        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          {fields.map((field: FormField) => (
            <Controller
              key={field.name}
              name={field.name}
              control={control}
              rules={{
                 required: field.validation?.required ? (typeof field.validation.required === 'string' ? field.validation.required : 'This field is required') : false,
                 validate: (value: string | number | undefined) => {
                  if (typeof value === 'string' && value.trim() === '') {
                      return 'Blank spaces are not allowed';
                  }
                  return true;
              },
              }}
              render={({ field: controllerField, fieldState: { error } }) => (
                <TextField
                  {...controllerField}
                  label={field.label}
                  placeholder={field.placeholder || field.label}
                  // type={field.type}
                  fullWidth
                  variant="outlined"
                  error={!!error}
                  helperText={error?.message}
                  multiline={field.multiline}
                  rows={field.rows}
                  value={controllerField.value ?? ''}
                  onChange={(e) => controllerField.onChange(e.target.value)}
                />
              )}
            />
          ))}

          <Button
             type="submit"
             variant="contained"
             color="primary"
            //  disabled={isSubmitting || !isValid && Object.keys(errors).length > 0} 
             sx={{ mt: 3, alignSelf: 'flex-end' }}
           >
            {isSubmitting ? 'Saving...' : (editIndex !== null ? 'Save Changes' : 'Add Item')}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default CommonModal;