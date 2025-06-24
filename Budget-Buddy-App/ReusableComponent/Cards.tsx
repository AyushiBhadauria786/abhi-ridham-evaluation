import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Card, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';


const commonStyles = {
  bgcolor: 'background.paper',
  m: 1,
  p: 2,
  border: 1,
  width: '17rem',
  height: '12rem',
};



export default function Cards() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/card");
        if (!response.ok) {
          throw new Error(`HTTPS Error Status : ${response.status}`)
        }
        const result = await response.json();
        setData(result);
      }
      catch (err:any) {
        setError(err)
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [])

  if (loading) {
    return <div>Loading data...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <React.Fragment>
      <Grid container spacing={5}>
        {data.map((item:any) => 
        <CardContent >
          <Box sx={{ ...commonStyles, border: 1, borderRadius: 3, boxShadow: 3 }}>
            <Typography variant="h5" component="div">
              {item.name}
            </Typography>
            <Typography variant="body2">
              {item.description}
            </Typography>
          </Box>
        </CardContent>
        )}
      </Grid>
    </React.Fragment>
  );
}
