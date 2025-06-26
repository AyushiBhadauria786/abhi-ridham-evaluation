import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Card } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';

const commonStyles = {
  bgcolor: 'background.paper',
  m: 1,
  p: 3,
  width: '17.5rem',
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
      catch (err: any) {
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
    <>
    <Grid container spacing={1}>
    {data.map((item: any, index: number) => (
        <CardContent>
          <Box sx={{ ...commonStyles, borderRadius: 2, boxShadow: 5 }}>
         
            
            <Box sx={{
              background: `${item.bgcolor}`,
              borderRadius: "16px",
              height: "64px",
              width: "64px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              alignContent:"center"
            }}>

            {item.image && (
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '15px'
                }}
              />
            )}
            </Box>
            <Typography variant="h6" component="div" sx={{ mt: "20px", fontFamily: "ui-sans-serif, system-ui, sans-serif"}}>
              {item.name}
            </Typography>
            <Typography variant="body2" sx={{ mt: "15px",fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>
              {item.description}
            </Typography>
          </Box>
        </CardContent>

    ))}
  </Grid>
</>  
  );
}
