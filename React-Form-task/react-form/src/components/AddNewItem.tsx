import { Box, Button, IconButton, Paper, Typography, } from "@mui/material";
import React, { useState } from "react";
import CommonModal from "./Modal/CommonModal";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add'; 
import { useFormContext as useAppFormContext } from "../context/FormContext"; 
import { ListSectionName, SectionData } from "../types/type";

interface Props {
  sectionName: ListSectionName;
}


const AddNewItem: React.FC<Props> = ({ sectionName }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [initialData, setInitialData] = useState<SectionData | null>(null);

  const { formData, deleteListItemData, getListItem } = useAppFormContext();

  const sectionItems: SectionData[] = formData[sectionName] || [];

  const handleOpenModalToAdd = () => {
    setEditIndex(null); 
    setInitialData(null);
    setModalOpen(true);
  };

  const handleOpenModalToEdit = (index: number) => {
    const itemToEdit = getListItem(sectionName, index);
    if (itemToEdit) {
        setEditIndex(index);
        setInitialData(itemToEdit);
        setModalOpen(true);
    } else {
        console.error("Could not find item to edit at index:", index);
    }
};

const handleDeleteItem = (index: number) => {
  
  deleteListItemData(sectionName, index);
  
};

const handleCloseModal = () => {
  setModalOpen(false);
  setEditIndex(null);
  setInitialData(null);
};

  return (
    <>
      {sectionItems.map((item, idx) => (
        <Paper
            key={idx}
            elevation={2} 
            sx={{
                mt: 2,
                p: 2,
                position: 'relative', 
                '&:hover .action-buttons': { 
                    opacity: 1,
                }
            }}
        >
          {Object.entries(item).map(([key, value]) => (
            value != null && value !== '' ? (
              <Typography key={key} variant="body2" sx={{ mb: 0.5 }}>
                <strong style={{ textTransform: 'capitalize' }}>{key.replace(/([A-Z])/g, ' $1').trim()}:</strong> 
                 {String(value)}
              </Typography>
            ) : null
          ))}

           <Box
                className="action-buttons"
                sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    display: 'flex',
                    gap: 0.5,
                    opacity: 0, 
                    transition: 'opacity 0.2s ease-in-out',
                }}
            >
                <IconButton size="small" color="primary" onClick={() => handleOpenModalToEdit(idx)} aria-label={`Edit ${sectionName} item ${idx + 1}`}>
                    <EditIcon fontSize="small"/>
                </IconButton>
                <IconButton size="small" color="error" onClick={() => handleDeleteItem(idx)} aria-label={`Delete ${sectionName} item ${idx + 1}`}>
                    <DeleteIcon fontSize="small"/>
                </IconButton>
           </Box>
        </Paper>
      ))}


      <Button
        variant="outlined"
        fullWidth
        startIcon={<AddIcon />} 
        sx={{ mt: sectionItems.length > 0 ? 2 : 1, 
             py: 1.5, 
             fontSize: 15 }}
        onClick={handleOpenModalToAdd}
      >
        Add New Item
      </Button>

  
      {modalOpen && (
         <CommonModal
            open={modalOpen}
            onClose={handleCloseModal}
             sectionName={sectionName}
            editIndex={editIndex}
            initialData={initialData}
         />
       )}
    </>
  );
};

export default AddNewItem;                                                 