import { AppBar, Avatar, Box, Button, Card, CardContent, Grid, LinearProgress, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Dashboard = () => {
  return (
    <>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: "#F6FBFF",
        boxSizing: "border-box",
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: "24px",
        borderRight: "1px solid #ccc",
        width: "100%",
        height: "100vh",
        position: "relative"
      }}>
        <Box sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px"

        }}>
          <Typography sx={{ fontSize: "25px", fontFamily: "ui-sans-serif, system-ui, sans-serif", fontWeight: "bold" }}>
            Financial Overview
          </Typography>


          <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 2 }}>
            <Button sx={{ display: "flex", minWidth: "40px", bgcolor: "white", borderRadius: "7px", border: "1px solid #ccc" }}>
              {'<'}
            </Button>

            <Typography
              component="span"
              sx={{
                display: "block",
                border: "1px solid #ccc",
                padding: "5px 10px",
                textAlign: "center",
                bgcolor: "white"
              }}
            >
              Jun 2025
            </Typography>

            <Button sx={{ display: "flex", minWidth: "40px", bgcolor: "white", borderRadius: "7px", border: "1px solid #ccc" }}>
              {'>'}
            </Button>
          </Box>
        </Box>


        <Box sx={{ marginTop: "20px", alignContent: "center", alignItems: "center", padding: "20px 20px 0px 20px", justifyContent: "center", alignSelf: "center" }}>
          <Grid container spacing={3}>

            <Box sx={{ marginBottom: "16px", width: "280px", alignContent: "center" }}>
              <Grid>
                <Card>
                  <CardContent>
                    <Box sx={{ p: "24px 24px 0px 24px", fontSize: "18px", mb: "5px", fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>Current Balance </Box>
                    <Box sx={{ p: "0px 24px 24px 24px" }}>
                      <Box fontSize={"20px"} mb={"3px"}>$ 12,850.67</Box>
                      <Typography component={"p"} fontSize={"11px"} fontFamily={"ui-sans-serif, system-ui, sans-serif"}>as of june 15, 2025</Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Box>

            <Box sx={{ marginBottom: "16px", width: "280px", alignContent: "center" }}>
              <Grid>
                <Card>
                  <CardContent>
                    <Box sx={{ p: "24px 24px 0px 24px", fontSize: "18px", mb: "5px", fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>Total Income </Box>
                    <Box sx={{ p: "0px 24px 24px 24px" }}>
                      <Box fontSize={"20px"} mb={"3px"}>$ 6,500</Box>
                      <Typography component={"p"} fontSize={"11px"} fontFamily={"ui-sans-serif, system-ui, sans-serif"}>This Month</Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Box>

            <Box sx={{ marginBottom: "16px", width: "280px", alignContent: "center" }}>
              <Grid>
                <Card>
                  <CardContent>
                    <Box sx={{ p: "24px 24px 0px 24px", fontSize: "18px", mb: "5px", fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>Total Expenses </Box>
                    <Box sx={{ p: "0px 24px 24px 24px" }}>
                      <Box fontSize={"20px"} mb={"3px"}>$ 3,200.45</Box>
                      <Typography component={"p"} fontSize={"11px"} fontFamily={"ui-sans-serif, system-ui, sans-serif"}>This Month</Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Box>

            <Box sx={{ marginBottom: "16px", width: "280px", alignContent: "center" }}>
              <Grid>
                <Card>
                  <CardContent>
                    <Box sx={{ p: "24px 24px 0px 24px", fontSize: "18px", mb: "5px", fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>Remaining Budget</Box>
                    <Box sx={{ p: "0px 24px 24px 24px" }}>
                      <Box fontSize={"20px"} mb={"3px"}>$ 2,299.55</Box>
                      <Typography component={"p"} fontSize={"11px"} fontFamily={"ui-sans-serif, system-ui, sans-serif"}>Left to spend</Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Box>
          </Grid>
        </Box>


        <Box sx={{ alignContent: "center", alignItems: "center", padding: "20px", justifyContent: "center", maxwidth: "10px", alignSelf: "center" }}>
          <Grid container spacing={3}>

            <Box sx={{ marginBottom: "16px", width: "585px", alignContent: "center" }}>
              <Grid>
                <Card sx={{ height: "350px" }}>
                  <CardContent>
                    <Box sx={{ fontFamily: "ui-sans-serif, system-ui, sans-serif", fontSize: "25px", fontWeight: "bold", margin: "24px" }} >
                      Monthly Budget Overview
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Box>

            <Box sx={{ marginBottom: "16px", width: "585px", alignContent: "center" }}>
              <Grid>
                <Card sx={{ height: "350px" }}>
                  <CardContent>
                    <Box sx={{ fontFamily: "ui-sans-serif, system-ui, sans-serif", fontSize: "25px", fontWeight: "bold", margin: "24px" }} >
                      Budget Categories
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                      <Typography component={"span"}>Groceries</Typography>
                      <Typography component={"span"}>$ 450 / $ 500</Typography>
                      
                    </Box>

                  </CardContent>
                </Card>
              </Grid>
            </Box>
          </Grid>

        </Box>


















      </Box>

    </>
  )
}

export default Dashboard