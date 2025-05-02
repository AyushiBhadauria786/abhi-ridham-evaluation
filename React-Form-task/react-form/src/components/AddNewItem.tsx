import { Button } from '@mui/material'
import React, { useState } from 'react'
import CommonModal from './Modal/CommonModal';

const AddNewItem: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <Button variant="outlined" fullWidth sx={{fontSize: 15}} onClick={handleOpen}>
        Add a new item 
      </Button>

      <CommonModal open={showModal} onclose={handleClose} />
    </>
  )
}

export default AddNewItem
