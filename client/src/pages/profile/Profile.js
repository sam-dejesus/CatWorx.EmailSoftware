import React, { useState } from "react";
import { getProfile } from "../../utils/auth";
import { useNavigate } from "react-router-dom";
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

            <div className="userOptions">
            <button>compose new message</button>
            <button>view contacts</button>
            <button>view inbox</button>

              

            </div>
            
            Status: {userData.admin ? "admin" : "test"}
            {userData.admin ? (
              <div>
                
                <h2>Admin Dashboard</h2>
                <div className="adminOptions">
                  <button>add new user</button>
                  <button>delete user</button>
                  <button></button>
                </div>
              </div>
            ) : (
              <>
                

              </>
            )}

            {userData.rootUser ? (
              <div>
                
                <h2>Root User Dashboard</h2>
                <div className="rootUserOptions">
                  <button>add new admin</button>
                  <button>delete admin</button>
                  <button>self destruct</button>
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
  