import React, { useState } from "react";
import { getProfile } from "../../utils/auth";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button'

import { BsEnvelopePlusFill } from "react-icons/bs";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BiSolidContact } from "react-icons/bi";
import { FaUserMinus } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { PiGearSixFill } from "react-icons/pi";
import { FaRegUserCircle } from "react-icons/fa";
import { logout } from "../../utils/auth";



import './profile.css'

const Profile = () => {
    const [userData, setUserData] = useState(getProfile().data);
    console.log(userData)
  
    const [profileImagePreviewUrl, setProfileImagePreviewUrl] = useState(null);
  
  
    const navigate = useNavigate();


    const logoutAction = (event) => {
      event.preventDefault();
      navigate("/")
      logout();
  
  
    };

    const addUser = ()=>{
      navigate("/add user")
    }
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
  
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const imagePreviewUrl = e.target.result;
          setProfileImagePreviewUrl(imagePreviewUrl);
           console.log(imagePreviewUrl)
        };
        reader.readAsDataURL(file);
  
      }
    };
    
  
    return (
      <div>
        {userData && (
          <div className="profileDiv">
  
              <label htmlFor="profileImageInput" className="mt-3 ms-5 ps-5">
                <FaRegUserCircle className="stockimg"/>
              </label>
              <input
                type="file"
                id="profileImageInput"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
      
            {profileImagePreviewUrl && (
              <img
                src={profileImagePreviewUrl}
                alt="Profile Preview"
                className="test"
              />
            )}
            <div className="d-flex flex-row justify-content-between">
              <h1>{userData.firstName}'s Profile</h1>
              <Button 
                className=""
                color="secondary"
                type="submit"
                onClick={logoutAction}
              > Log out </Button>

              <Button 
                className=""
                color="secondary"
                type="submit"
              > < PiGearSixFill className="settingsBtn" /> </Button>
             
            </div>
            

            <div className="dashboard">
            <div className="userOptions options ">
            <Button 
                className="mx-3"
                variant="outlined"
                color="warning"
                type="submit"
              >compose new message <BsEnvelopePlusFill className="icons"/> </Button>
              
            <Button 
            className="mx-3"
             variant="outlined"
                color="warning"
                type="submit"
                >view contacts < BiSolidContact className="icons"/></Button>
            <Button
            className="mx-3" 
             variant="outlined"
                color="warning"
                type="submit"
                >view inbox <HiMail className='icons' /></Button>
            </div>


              

            </div>
            
            {userData.admin ? (

              <div className=" dashboard">
                <h2>Admin Dashboard</h2>
                <div className="adminOptions options">
                  <Button 
                  onClick={addUser}
                className="mx-3"
                variant="outlined"
                color="warning"
                type="submit"
                >add new user < BsFillPersonPlusFill className="icons"/> </Button>
                  <Button 
                  className="mx-3"
                   variant="outlined"
                color="warning"
                type="submit"
                >delete user <FaUserMinus className="icons"/></Button>
                  <Button 
                  className="mx-3"
                   variant="outlined"
                color="warning"
                type="submit"
                >
                  test
                </Button>
                </div>
              </div>
            ) : (
              <>
                

              </>
            )}

            {userData.rootUser ? (
              <div className=" dashboard">
                
                <h2>Root User Dashboard</h2>
                <div className="rootUserOptions options">
                  <Button
                  className="mx-3" 
                   variant="outlined"
                color="warning"
                type="submit"
                >add new admin < BsFillPersonPlusFill className="icons"/></Button>
                  <Button
                  className="mx-3" 
                   variant="outlined"
                color="warning"
                type="submit"
                >delete admin  <FaUserMinus className="icons"/></Button>
                  <Button
                  className="mx-3" 
                   variant="outlined"
                color="warning"
                type="submit"
                >self destruct</Button>
                </div>
              </div>
            ) : (
              <>
                

              </>
            )}
          </div>
        )}
      </div>
    );
  
  
  };
  
  export default Profile;
  