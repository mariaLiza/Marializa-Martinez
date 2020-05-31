import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "../css/UserProfileInfo.css";
import { AuthContext } from "../providers/AuthContext";
import { apiURL } from "../util/apiURL";

const UserProfileInfo = () => {
  const { currentUser } = useContext(AuthContext);
  const API = apiURL();
//   const [bio, setBio] = useState("");
//   const [fullName] = useState("");
//   const [profilePic] = useState(null);
//   const [userName] = useState("");

  useEffect(() => {
    const getUserInfo = () => {
      try {

      } catch (err) {
        console.log(err);
      }
    };
    getUserInfo()
  });

  return (
    <>
      UserProfileInfo
      <div>{currentUser.email}</div>
    </>
  );
};

export default UserProfileInfo;
