import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

interface CardData {
  icon?: string;
  title?: string;
  description?: string;
  color?: string;
}

const Cart: React.FC<CardData> = () => {
  const [data, setData] = useState<CardData[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/card")
      // .then(res => console.log(res))
      .then((res) => setData(res.data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#F6FBFF",
          margin: "96px 0px 0px",
          px: { xs: 2, sm: 4, md: 8 },
          minHeight: "85vh",
        }}
      >
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
                  p: 2.5,
                  borderRadius: 3,
                  textAlign: "center",
                  backgroundColor: "#fff",
                  boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.12)",
                  },
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "16px",
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
                  <Typography
                    variant="body2"
                    component="p"
                    sx={{ fontSize: 12 }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Cart;
