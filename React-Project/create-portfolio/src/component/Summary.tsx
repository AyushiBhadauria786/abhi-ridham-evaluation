// import { Box, TextareaAutosize, Typography } from '@mui/material'
// import React from 'react'

// const Summary = () => {
//   return (
//     <> <Typography mt={"20px"} variant="h4" id='regis'>Summary</Typography>
//       <Box>
//         <TextareaAutosize
//           maxRows={4}

//           style={{ width: 200,  backgroundColor:"#f5f7fa"}}
//         />
//       </Box>
//     </>

//   )
// }

// export default Summary


import { Box, TextareaAutosize, Typography } from '@mui/material';
import React from 'react';

const Summary = () => {
  return (
    <>
    
      <Typography mt={"20px"} variant="h4" id='regis'>Summary</Typography>
      <Box sx={{mt:"20px"}}>
        <TextareaAutosize
          minRows={4}
          placeholder="Enter your summary"
          style={{
            width: '99.35%',
            backgroundColor: "#f5f7fa",
            height : "30px"
          }}
        />
      </Box>
    </>
  );
};

export default Summary;
