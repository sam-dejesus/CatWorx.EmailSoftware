import React from "react";
import './login.css'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import {GiSaberToothedCatHead} from "react-icons/gi"


export default function Login() {
  return (
    
    <main className="">

      <div className="logoDiv">
        < GiSaberToothedCatHead  className="logo"/>
        <h1 className="logoName">CatWorx</h1>
      </div>
      
      <div className="card">
        <h1 className="form-header">Welcome</h1>
        <div className="card-body">
          <form className="">
            <div className="form-inputs-container">
              <TextField
                label="Your username"
                variant="outlined"
                fullWidth
                placeholder="Your username"
                name="username"
              />
            </div>
            <div className="form-inputs-container">
              <TextField
                label="Password"
                variant="outlined"
                fullWidth
                placeholder="******"
                name="password"
                type="password"
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
                Help
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
