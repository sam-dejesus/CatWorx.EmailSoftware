import React, { useState } from "react";
import './admin.css'
import { useLazyQuery, gql } from "@apollo/client";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import 'bootstrap'

import { FaRegUserCircle } from "react-icons/fa";


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
const DeleteAdmin = () => {


    const [searchQuery, setSearchQuery] = useState("");
    const [searchAdmin, { loading, data }] = useLazyQuery(SEARCH_USERS)


    const handleFormSubmit = async (event) => {
      if (searchQuery.trim() !== "") { 
        searchAdmin({ variables: { employeeID: parseInt(searchQuery) } });
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
          .filter(user => user.admin === true)
          .filter(user => user.rootUser === false)
          .map((user) => (
            <div key={user._id} className="searchResult ps-5" onClick={() => {alert("hiiii")}}>
              <FaRegUserCircle className="stockimg"/>
              <p>First Name: {user.firstName} </p>
              <p>Last Name: {user.lastName}</p>
              <p>ID Number: {user.employeeID}</p>
              <p>Email: {user.email}</p>
              <button className="btn btn-danger">Delete</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No data available.</p>
      )}






    </Box>
    )

}

export default DeleteAdmin