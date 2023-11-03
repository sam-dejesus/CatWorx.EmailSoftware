import React, { useState } from "react";
import './deleteUser.css'
import { useLazyQuery, gql, useMutation } from "@apollo/client";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import 'bootstrap'

import { FaRegUserCircle } from "react-icons/fa";

const DELETE_USER = gql`
  mutation DeleteUser($employeeID: Int) {
    deleteUser(employeeID: $employeeID) 
  }
`;

const SEARCH_USERS = gql`
  query SearchUser( $employeeID: Int) {
    SearchUsers( employeeID: $employeeID) {
      _id
      employeeID
      firstName
      lastName
      email
      admin
      rootUser
    }
  }
`;
const DeleteUser = () => {


    const [searchQuery, setSearchQuery] = useState("");
    const [searchUser, { loading, data }] = useLazyQuery(SEARCH_USERS)

    const [deleteUser] = useMutation(DELETE_USER);

    const handleFormSubmit = async (event) => {
      if (searchQuery.trim() !== "") { 
        searchUser({ variables: { employeeID: parseInt(searchQuery) } });
      }
    };


    const handleDeleteUser = async (employeeID) => {
     
      
      try {
        
         await deleteUser({
          variables: { employeeID },
        });

      } catch (error) {
      
      }
    };

    return(
        <Box
        component="form"
        className="searchDiv d-flex flex-column"
        sx={{
          '& > :not(style)': { m: 1, width: '100%' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Search User" variant="outlined" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        <Stack direction="row" spacing={2} className='mb-3 mt-1'>
      <Button variant="contained"  onClick={handleFormSubmit}>
        Search
      </Button>
          </Stack>
          {loading ? (
        <p>Loading...</p>
      ) : data && data.SearchUsers ? (
        <div className="searchResultsContainer">
          {data.SearchUsers
          .filter(user => user.admin === false)
          .map((user) => (
            <div key={user._id} className="searchResult ps-5" >
              <FaRegUserCircle className="stockimg"/>
              <p>First Name: {user.firstName} </p>
              <p>Last Name: {user.lastName}</p>
              <p>ID Number: {user.employeeID}</p>
              <p>Email: {user.email}</p>
              <button className="btn btn-danger" onClick={() => handleDeleteUser(user.employeeID)}>Delete</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No data available.</p>
      )}






    </Box>
    )

}

export default DeleteUser