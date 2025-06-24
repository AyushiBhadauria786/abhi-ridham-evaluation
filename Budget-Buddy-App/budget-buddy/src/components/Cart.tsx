import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

interface CardData {
  icon?: string;
  title?: string;
  description?: string;
}

const Cart: React.FC<CardData> = () => {
  const [data, setData] = useState<CardData | null>();

  useEffect(() => {
    axios
      .get("http://localhost:3001/card")
      // .then(res => console.log(res))
      .then((res) => setData(res.data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ mt: "76px" }}
      >
        {data?.map((item) => (
          <Grid size={4} mt={2} gap={2}>
            <Card
              sx={{
                padding: 1,
                margin: 1,
                boxSizing: "border-box",
                fontSize: "16px",
                border: "1px solid black",
              }}
            >
              <CardContent
              sx={{
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                gap:"16px"
              }}
              >
                <Box
                  sx={{
                    background: `${item.color}`,
                    borderRadius: "16px", 
                    height: "64px",
                    width: "64px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    style={{
                      borderRadius: 8,
                      width: "32px",
                      height: "32px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  />
                </Box>
                <Typography
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 14 }}
                >
                  {item.title}
                </Typography>
                <Typography variant="body2" component="p" sx={{ fontSize: 12 }}>
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Cart;
