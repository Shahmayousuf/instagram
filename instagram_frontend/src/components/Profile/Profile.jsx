import React from "react";
import './profile.css'
import profile from "../assets/profile.jpg";
import pic from '../assets/pic.webp'
const Profile = () => {
  return (
    <div className="profile">
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "18px 0px",
          borderBottom: "1px solid black",
        }}
      >
        <div className="profile_icon">
          <img
            src={profile}
            style={{ width: "160px", height: "160px", }}
          ></img>
        </div>
        <div>
          <h4>Ramesh Varma</h4>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "108%",
            }}
          >
            <h6>40 posts</h6>
            <h6>45 followers</h6>
            <h6>40 following</h6>
          </div>
        </div>
      </div>
      <div className="gallary">
        <img className="item"
          src={pic}
          style={{ width: "160px", height: "160px", }}
        ></img>
                <img className="item"

          src={pic}
          style={{ width: "160px", height: "160px", }}
        ></img>
        <img className="item"
          src={pic}
          style={{ width: "160px", height: "160px", }}
        ></img>
        <img className="item"

          src={pic}
          style={{ width: "160px", height: "160px", }}
        ></img>
        <img className="item"
          src={pic}
          style={{ width: "160px", height: "160px",  }}
        ></img>
         <img className="item"
          src={pic}
          style={{ width: "160px", height: "160px", }}
        ></img>
        
      </div>
    </div>
  );
};

export default Profile;
