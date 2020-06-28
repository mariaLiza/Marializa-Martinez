import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../providers/AuthContext";
import { apiURL } from "../util/apiURL";
import axios from "axios";
import twitterLogo from "../images/Twitter_logo.png";
import banner from "../images/banner.jpg";
import "../css/UserProfileInfo.css";

const UserProfileInfo = ({ user }) => {
  const { username, bio, profilePic, email, fullname } = user;
  const { currentUser, token } = useContext(AuthContext);
  const API = apiURL();
  //   const [user, setUser] = useState([])
  // const [bio, setBio] = useState("");
  // // const [user, setUser] = useState("");
  // const [email, setEmail] = useState("");
  // const [fullName, setFullName] = useState("");
  // const [profilePic, setProfilePic] = useState(null);
  // const [userName, setUserName] = useState("");

  // useEffect(() => {
  //   const getUser = async () => {
  //     try {
  //       let res = await axios({
  //         method: "get",
  //         url: `${API}/api/users/${user.id}`,
  //         headers: {
  //           AuthToken: token,
  //         },
  //       });
  //       // setUser(res.data.user);
  //       debugger;
  //       setEmail(res.data.user.email);
  //       setBio(res.data.user.bio);
  //       setFullName(res.data.user.fullname);
  //       setUserName(res.data.user.username);
  //       setProfilePic(res.data.user.profile_pic);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getUser();
  // }, []);

  return (
    <>
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
            <p>{email}</p>
            <p>Fullname: {fullname}</p>
          </div>

          <p id="bioP">Bio: {bio}</p>
        </div>
      </div>
    </>
  );
};

export default UserProfileInfo;
