import React, { useState } from "react";
import './login.css'
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import {GiSaberToothedCatHead} from "react-icons/gi"

import { login } from "../../utils/auth";


const Login = (props) => {
  const [formState, setFormState] = useState({ username: "", password: "" });
  const [loginMutation, { error, data }] = useMutation(LOGIN_USER);

//-----------------------
  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await loginMutation({
        variables: { ...formState },
      });

      login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };
//-----------------------
  return (
    
    <main className="">

      <div className="logoDiv">
        < GiSaberToothedCatHead  className="logo"/>
        <h1 className="logoName">CatWorx</h1>
      </div>
      
      <div className="card">
        <h1 className="form-header">Welcome</h1>
        <div className="card-body">
          <form className="" onSubmit={handleFormSubmit}>
            <div className="form-inputs-container">
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                onChange={handleChange}
                name="email"
              />
            </div>
            <div className="form-inputs-container" >
              <TextField
                label="Password"
                variant="outlined"
                fullWidth
                placeholder="******"
                name="password"
                type="password"
                onChange={handleChange}
              />
            </div>
            <div className="ButtonContainer">
              <Button
                variant="contained"
                color="warning"
                type="submit"
              >
                Log in
              </Button>
              <Button
                variant="contained"
                color="warning"
                type="submit"
              >
                <Link className="lessImportantLink" to="/signup">
                   Help
                </Link>
               
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}


export default Login;