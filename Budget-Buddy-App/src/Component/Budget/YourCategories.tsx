import {Box,Button,Card,CardContent,Grid,Typography,Table,TableHead,TableRow,TableCell,TableBody,IconButton,Modal,TextField} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const YourCategories = ({
    categories,
    fetchCategories,
}: {
    categories: any[];
    fetchCategories: () => void;
}) => {

    const [openModal, setOpenModal] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<any>(null);

    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [deleteCategoryId, setDeleteCategoryId] = useState<string | null>(null);



    const handleEdit = (category: any) => {
        setSelectedCategory(category);
        setOpenModal(true);
    };

    const handleClose = () => {
        setOpenModal(false);
        setSelectedCategory(null);
    };

    const handleUpdate = async () => {
        try {
            await axios.put(`http://localhost:3000/Budget/${selectedCategory.id}`, selectedCategory);
            fetchCategories();
            handleClose();
        } catch (error) {
            console.error("Failed to update category:", error);
        }
    };

    const handleDelete = async () => {
        if (!deleteCategoryId) return;
        try {
            await axios.delete(`http://localhost:3000/Budget/${deleteCategoryId}`);
            fetchCategories();
            setOpenDeleteModal(false);
            setDeleteCategoryId(null);
        } catch (error) {
            console.error("Failed to delete category:", error);
        }
    };


    return (
        <>
            <Box sx={{ marginBottom: '12px', width: '1200px' }}>
                <Grid>
                    <Card>
                        <CardContent>
                            <Typography component={"h6"}
                                sx={{
                                    fontSize: '20px',
                                    fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                                    fontWeight: 'bold',
                                    color: "rgb(51 65 85 / var(--tw-text-opacity, 1))"
                                }}
                            >
                                Your Categories
                            </Typography>

                            <Box sx={{ mt: 3 }}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ fontWeight: 'bold' }}>Category Name</TableCell>
                                            <TableCell sx={{ fontWeight: 'bold' }}>Monthly Budget Limit</TableCell>
                                            <TableCell sx={{ fontWeight: 'bold' }}>Actions</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {categories.map((cat: any) => (
                                            <TableRow key={cat.id}>
                                                <TableCell>{cat.name}</TableCell>
                                                <TableCell>${parseFloat(cat.monthlyLimit).toFixed(2)}</TableCell>
                                                <TableCell>
                                                    <IconButton onClick={() => handleEdit(cat)}>
                                                        <Edit sx={{ fontSize: '20px', color: 'rgb(71, 85, 105)' }} />
                                                    </IconButton>
                                                    <IconButton onClick={() => {
                                                        setDeleteCategoryId(cat.id);
                                                        setOpenDeleteModal(true);
                                                    }}>
                                                        <Delete sx={{ fontSize: '20px', color: 'rgb(239, 68, 68)' }} />
                                                    </IconButton>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                        {categories.length === 0 && (
                                            <TableRow>
                                                <TableCell colSpan={3}>No categories found.</TableCell>
                                            </TableRow>
                                        )}
                                    </TableBody>
                                </Table>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Box>


            <Modal open={openModal} onClose={handleClose}>
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 2,
                }}>
                    <Typography sx={{ fontWeight: 'bold', mb: 2 }}>Edit Category</Typography>
                    <TextField
                        label="Category Name"
                        value={selectedCategory?.name || ''}
                        onChange={(e) =>
                            setSelectedCategory({ ...selectedCategory, name: e.target.value })
                        }
                        fullWidth
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        label="Monthly Budget Limit"
                        type="number"
                        value={selectedCategory?.monthlyLimit || ''}
                        onChange={(e) =>
                            setSelectedCategory({ ...selectedCategory, monthlyLimit: e.target.value })
                        }
                        fullWidth
                        sx={{ mb: 2 }}
                    />
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                        <Button sx={{
                            fontSize: 14,
                            border: "1px solid #ccc",
                            color: "rgb(51 65 85 / var(--tw-text-opacity, 1))",
                            backgroundColor: "white",
                        }} onClick={handleClose}>Cancel</Button>
                        <Button variant="contained" onClick={handleUpdate} sx={{ backgroundColor: 'rgb(51 65 85)' }}>
                            Update
                        </Button>
                    </Box>
                </Box>
            </Modal>


            <Modal open={openDeleteModal} onClose={() => setOpenDeleteModal(false)}>
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 360,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 2,
                }}>
                    <Typography sx={{ fontWeight: 'bold', mb: 2 }}>
                        Confirm Delete
                    </Typography>
                    <Typography sx={{ mb: 3 }}>
                        Are you sure you want to delete this category?
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                        <Button sx={{
                            fontSize: 14,
                            border: "1px solid #ccc",
                            color: "rgb(51 65 85 / var(--tw-text-opacity, 1))",
                            backgroundColor: "white",
                        }} onClick={() => setOpenDeleteModal(false)}>Cancel</Button>
                        <Button
                            variant="contained"
                            sx={{ backgroundColor: 'rgb(51 65 85)' }}
                            onClick={handleDelete}
                        >
                            Delete
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </>
    );
};

export default YourCategories;
