import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import 'bootstrap'
import './help.css'



const Help = () => {
  return (
    <Box
    className='mt-5 '
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '90%' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className='formDiv ps-5'>
        <h1 className='mt-4'>Fill out the form below</h1>
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
        
        <TextField
          required
          id="outlined-disabled"
          label="Phone number"
        />
        <br/>
          <TextField
          
          className='textarea'
          id="outlined-multiline-static"
          label="Reason for submission"
          multiline
          rows={8}
          columns={8}
          
        />
    <Stack direction="row" spacing={2} className='mb-3 mt-1'>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Stack>
      </div>
     
      
    </Box>
  );
}
  
  export default Help;