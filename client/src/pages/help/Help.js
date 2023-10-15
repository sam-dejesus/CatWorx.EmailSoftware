import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Help = () => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="First Name"
          
        />
        <TextField
          required
          id="outlined-disabled"
          label="Last Name"
        />
        <TextField
          required
          id="outlined-disabled"
          label="Id Number"
        />
        
      </div>
     
      
    </Box>
  );
}
  
  export default Help;