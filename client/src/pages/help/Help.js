import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './help.css'

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
      <div className='formDiv'>
        <h1>Fill out the form below</h1>
        <p>Please fill out every box </p>
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

        <TextField
          required
          id="outlined-disabled"
          label="Personal Email"
        />
        
      </div>
     
      
    </Box>
  );
}
  
  export default Help;