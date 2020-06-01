import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "../css/UserProfileInfo.css";
import { AuthContext } from "../providers/AuthContext";
import { apiURL } from "../util/apiURL";
import twitterLogo from "../images/twitter_logo-1200x628.jpg";

const UserProfileInfo = () => {
  const { currentUser, token } = useContext(AuthContext);
  const API = apiURL();
  //   const [user, setUser] = useState([])
  const [bio, setBio] = useState("");
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const getUser = async () => {
      try {
        let res = await axios({
          method: "get",
          url: `${API}/api/users/${currentUser.uid}`,
          headers: {
            AuthToken: token,
          },
        });
        setUser(res.data.user[0]);
        setEmail(res.data.user[0].email);
        setBio(res.data.user[0].bio);
        setFullName(res.data.user[0].fullname);
        setUserName(res.data.user[0].username);
        setProfilePic(res.data.user[0].profile_pic);
        // debugger;
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, []);

  //   profilePic = profilePic
  //     ? profilePic
  //     : "https://ya-webdesign.com/transparent250_/blank-profile-picture-png-2.png";
  {
    /* {currentUser.email}
{user} */
  }

  return (
    <>
      <div className="userInfoDiv" id="divUserInfo">
        <h1 id="userH1">{userName}</h1>
        <div id="userInfoContainer">
          <img id="backgroundLogo" src={twitterLogo} alt="background" />
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
            <h2 id="userNameH2">@{userName}</h2>
            <p>{email}</p>
            <p>Fullname: {fullName}</p>
          </div>

          <p id="bioP">Bio: {bio}</p>
        </div>
      </div>
    </>
  );
};

export default UserProfileInfo;
