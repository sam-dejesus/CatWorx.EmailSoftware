import React, { useState } from "react";
import { getProfile } from "../../utils/auth";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button'
import { BsEnvelopePlusFill } from "react-icons/bs";
import './profile.css'

const Profile = () => {
    const [userData, setUserData] = useState(getProfile().data);
    console.log(userData)
  
    const [profileImagePreviewUrl, setProfileImagePreviewUrl] = useState(null);
  
  
    const navigate = useNavigate();


  
  
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
            <h1>{userData.firstName}'s Profile</h1>

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
                >view contacts</Button>
            <Button
            className="mx-3" 
             variant="outlined"
                color="warning"
                type="submit"
                >view inbox</Button>
            </div>


              

            </div>
            
            {userData.admin ? (

              <div className=" dashboard">
                <h2>Admin Dashboard</h2>
                <div className="adminOptions options">
                  <Button 
                  className="mx-3"
                   variant="outlined"
                color="warning"
                type="submit"
                >add new user</Button>
                  <Button 
                  className="mx-3"
                   variant="outlined"
                color="warning"
                type="submit"
                >delete user</Button>
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
                >add new admin</Button>
                  <Button
                  className="mx-3" 
                   variant="outlined"
                color="warning"
                type="submit"
                >delete admin</Button>
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
  