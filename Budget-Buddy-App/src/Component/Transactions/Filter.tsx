import {Box,Button,Card,CardContent,Grid,MenuItem,Select,TextField,Typography,} from '@mui/material';
import React, { useState } from 'react';



interface FiltersType {
    searchTerm: string;
    selectedType: string;
    selectedCategory: string;
    fromDate: string;
    toDate: string;
  }
  
  interface FilterProps {
    filters: FiltersType;
    setFilters: React.Dispatch<React.SetStateAction<FiltersType>>;
  }


  const Filter: React.FC<FilterProps> = ({ filters, setFilters }) => {
    const categories = ['All', 'Groceries', 'Utilities', 'Salary', 'Entertainment', 'Rent'];
    const types = ['All', 'Income', 'Expense'];

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedType, setSelectedType] = useState('All');
    const [selectedCategory, setSelectedCategory] = useState('All');

    return (
        <Box sx={{ marginBottom: '16px', width: '1200px' }}>
            <Grid>
                <Card>
                    <CardContent>
                        <Typography
                            sx={{
                                fontSize: '25px',
                                fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                                fontWeight: 'bold',
                            }}
                        >
                            Filters
                        </Typography>


                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignSelf:"center",
                                margin:"10px",
                                gap: 3,
                                mt: 3,
                                flexWrap: 'wrap',
                            }}
                        >

                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <label
                                    htmlFor="search"
                                    style={{
                                        marginBottom: 4,
                                        fontSize: '16px',
                                        color: 'rgb(51 65 85)',
                                        fontWeight: 500,
                                        fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                                    }}
                                >
                                    Search
                                </label>
                                <TextField
                                    id="search"
                                    placeholder="Search by description"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    sx={{ width: '250px', color: 'rgb(51 65 85)' }}
                                    size="small"
                                />
                            </Box>


                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <label
                                    htmlFor="type"
                                    style={{
                                        marginBottom: 4,
                                        fontSize: '16px',
                                        color: 'rgb(51 65 85)',
                                        fontWeight: 500,
                                        fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                                    }}
                                >
                                    Type
                                </label>
                                <Select
                                    id="type"
                                    value={selectedType}
                                    onChange={(e) => setSelectedType(e.target.value)}
                                    sx={{ width: '200px', color: 'rgb(51 65 85)' }}
                                    size="small"
                                    displayEmpty
                                >
                                    {types.map((type) => (
                                        <MenuItem key={type} value={type}>
                                            {type}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </Box>


                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <label
                                    htmlFor="category"
                                    style={{
                                        marginBottom: 4,
                                        fontSize: '16px',
                                        color: 'rgb(51 65 85)',
                                        fontWeight: 500,
                                        fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                                    }}
                                >
                                    Category
                                </label>
                                <Select
                                    id="category"
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    sx={{ width: '200px', color: 'rgb(51 65 85)' }}
                                    size="small"
                                    displayEmpty
                                >
                                    {categories.map((cat) => (
                                        <MenuItem key={cat} value={cat}>
                                            {cat}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </Box>


                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <label
                                    htmlFor="fromdate"
                                    style={{
                                        marginBottom: 4,
                                        fontSize: '16px',
                                        color: 'rgb(51 65 85)',
                                        fontWeight: 500,
                                        fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                                    }}
                                >
                                    From date
                                </label>
                                <TextField
                                    id="from-date"
                                    type="date"

                                    sx={{ width: '180px', color: 'rgb(51 65 85)' }}
                                    size="small"

                                />
                            </Box>


                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <label
                                    htmlFor="fromdate"
                                    style={{
                                        marginBottom: 4,
                                        fontSize: '16px',
                                        color: 'rgb(51 65 85)',
                                        fontWeight: 500,
                                        fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                                    }}
                                >
                                    To date
                                </label>
                                <TextField
                                    id="to-date"
                                    type="date"

                                    sx={{ width: '180px', color: 'rgb(51 65 85)' }}
                                    size="small"

                                />
                            </Box>

                            <Box component={"div"}>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                    alignItems: 'flex-end',
                                    gap: 3,
                                    flexWrap: 'wrap',
                                }}>

                                    <Button
                                        variant="outlined"
                                        onClick={() => {
                                            setSearchTerm('');
                                            setSelectedType('All');
                                            setSelectedCategory('All');
                                            setFilters({
                                              searchTerm: '',
                                              selectedType: 'All',
                                              selectedCategory: 'All',
                                              fromDate: '',
                                              toDate: ''
                                            });
                                            // Optional: also clear date fields
                                            (document.getElementById("from-date") as HTMLInputElement).value = '';
                                            (document.getElementById("to-date") as HTMLInputElement).value = '';
                                          }}

                                        sx={{
                                            textTransform: 'none',
                                            fontSize: '13px',
                                            color: 'rgb(51 65 85)',
                                            borderColor: 'rgb(51 65 85)',
                                            fontWeight: 500,
                                            fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                                            borderRadius: '5px'
                                        }}
                                    >
                                        Clear Filter
                                    </Button>
                                    <Button
                                        variant="contained"
                                        onClick={() => setFilters({
                                            searchTerm,
                                            selectedType,
                                            selectedCategory,
                                            fromDate: (document.getElementById("from-date") as HTMLInputElement).value,
                                            toDate: (document.getElementById("to-date") as HTMLInputElement).value,
                                          })}

                                        sx={{
                                            textTransform: 'none',
                                            fontSize: '13px',
                                            backgroundColor: 'rgb(51 65 85)',
                                            fontWeight: 500,
                                            fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                                            borderRadius: '8px',
                                        }}
                                    >
                                        Apply Filter
                                    </Button>
                                </Box>

                            </Box>

                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </Box>
    );
};

export default Filter;
