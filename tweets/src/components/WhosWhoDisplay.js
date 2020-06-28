import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../providers/AuthContext";
import { apiURL } from "../util/apiURL";
import axios from "axios";
import twitterLogo from "../images/Twitter_logo.png";
import banner from "../images/banner.jpg";
import WhosPosts from "./WhosPosts";

const WhosWhoDisplay = () => {
  const [thisUser, setThisUser] = useState({});
  const [users, setUsers] = useState([]);
  const { loading } = useContext(AuthContext);
  const { username } = useParams();
  const API = apiURL();

  console.log(username);

  useEffect(() => {
    getUsers();
    
  }, []);

  const getUsers = async () => {
    try {
      let res = await axios.get(`${API}/api/users`);
      setUsers(res.data.users);
    } catch (error) {
      console.log(error);
    }
  };


  let theUser = users.map((user, i) => {
    if (username === user.username)
      return (
        <div className="userInfoDiv" id="divUserInfo">
          <h1 id="userH1">{username}</h1>
          <div id="userInfoContainer">
            <img id="backgroundLogo" src={banner} alt={twitterLogo} />
            <div id="updateDiv">
              {" "}
              <img
                src={
                  "https://ya-webdesign.com/transparent250_/blank-profile-picture-png-2.png"
                }
                alt="user"
                id="userProfilePic"
              />
              <button type="submit" id="updateProfileBtn">
                Edit Profile
              </button>
            </div>

            <div id="userNames">
              <h2 id="userNameH2">@{username}</h2>
              <p>{user.email}</p>
              <p>Fullname: {user.fullname}</p>
            </div>

            <p id="bioP">Bio: {user.bio}</p>
          </div>
        </div>
      );
  });
  console.log(theUser);

  return <>{theUser}
  <WhosPosts username={username} />
  </>;
};

export default WhosWhoDisplay;
