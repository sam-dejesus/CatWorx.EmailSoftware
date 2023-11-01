import React, { useState } from "react";
import { useLazyQuery, gql } from "@apollo/client";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import 'bootstrap'


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


    const handleFormSubmit = async (event) => {
      if (searchQuery.trim() !== "") { 
        searchUser({ variables: { employeeID: parseInt(searchQuery) } });
      }
    };

    return(
        <Box
        component="form"
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
          {loading ? (
        <p>Loading...</p>
      ) : data && data.SearchUsers ? (
        <ul className="searchResults">
          {data.SearchUsers.map((user) => (
            <li key={user._id} className="liDiv" onClick={() => {alert("hiiii")}}>
              <p>Name: {`${user.firstName} ${user.lastName}`}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No data available.</p>
      )}



    </Stack>


    </Box>
    )

}

export default DeleteUser