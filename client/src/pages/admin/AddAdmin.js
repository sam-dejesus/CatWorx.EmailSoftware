import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import {ADD_USER} from '../../utils/mutations'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import 'bootstrap'

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddAdmin = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    employeeID: 0,
    email: "",
    password: "password",
    admin: true,
    rootUser: false,
  });

  const [addAdmin, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
  
    let fieldValue = value;
  

  
    setFormState({
      ...formState,
      [name]: fieldValue,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    formState.employeeID = parseInt(formState.employeeID)

    try {
      const { data } = await addAdmin({
        variables: { ...formState },
      });

      toast.success("User created successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
      });

    } catch (e) {
      toast.error("An error occurred while creating the User.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
      });
      console.error(e);
    }
  };

return(
    <div>
     <Box
    className='mt-5 '
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '90%' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className='formDiv ps-5' onSubmit={handleFormSubmit}>
        <h1 className='mt-4'>Fill out the form below</h1>

        <TextField
          required
          id="employeeID"
          label="Employee ID"
          name="employeeID"
          value={formState.employeeID}
          onChange={handleChange}
          
        />

        <TextField
          required
          id="firstName"
          label="First Name"
          name="firstName"
          value={formState.firstName}
          onChange={handleChange}
          
        />
        <TextField
          required
          id="lastName"
          label="Last Name"
          name="lastName"
          value={formState.lastName}
          onChange={handleChange}
        />


        <TextField
          required
          id="email"
          label="Email"
          name="email"
          value={formState.email}
          onChange={handleChange}
        />
        
        <br/>

    <Stack direction="row" spacing={2} className='mb-3 mt-1'>
      <Button variant="contained" endIcon={<SendIcon />} onClick={handleFormSubmit}>
        Send
      </Button>
    </Stack>
      </div>
     
      
    </Box>
    </div>
)
}

export default AddAdmin