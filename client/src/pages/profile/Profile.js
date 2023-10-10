import React, { useState } from "react";
import { getProfile } from "../../utils/auth";
import { useNavigate } from "react-router-dom";
import './profile.css'

const Profile = () => {
    const [userData, setUserData] = useState(getProfile().data);
  
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
            <h1>{userData.username}'s Profile</h1>
            {/* <p>Email: {userData.email}</p> */}
            Status: {userData.status ? "admin" : "test"}
            {userData.status ? (
              <div>
                
                <h2>Menu</h2>
              </div>
            ) : (
              <>
                <h2>ready!!!</h2>

              </>
            )}
          </div>
        )}
      </div>
    );
  
  
  };
  
  export default Profile;
  