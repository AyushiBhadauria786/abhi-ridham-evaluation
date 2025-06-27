import { Box, Button, FormLabel, TextField, Typography } from "@mui/material";
import React from "react";

type Props = {};

const Budget = (props: Props) => {
  return (
    <Box sx={{ padding: "24px" }}>
      <Box>
        <Typography
          variant="h5"
          sx={{ fontSize: "24px", fontWeight: 700, color: "rgb(51, 65, 85);" }}
        >
          Manage Budget Categories
        </Typography>
      </Box>

      <Box sx={{ padding: "24px" }}>
        <Typography
          variant="h5"
          sx={{ fontSize: "24px", fontWeight: 600, color: "rgb(51, 65, 85);", padding: "" }}
        >
          Add New Category
        </Typography>

        <Box sx={{ display: "flex", padding: "15px", lineHeight: '24px' }}>
          <Box
            sx={{
              mt: 2,
              margin: "8px 0px 0px",
              padding: "9px 12px",
            }}
          >
            <FormLabel>Category Name</FormLabel>
            <TextField type="text" />
          </Box>
          <Box
            sx={{
              mt: 2,
              margin: "8px 0px 0px",
              padding: "9px 12px",
            }}
          >
            <FormLabel>Monthly Budget Limit</FormLabel>
            <TextField type="text" />
          </Box>
        </Box>
        <Box sx={{padding: "0px", paddingLeft: "24px"}}>
          <Button variant="contained">Add Category</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Budget;
