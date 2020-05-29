import React, { useState, useEffect, useContext } from "react";
import "../css/UserProfile.css";
import { apiURL } from "../util/apiURL";
import axios from "axios";
import LeftSideBar from "./LeftSideBar";
import { AuthContext } from "../providers/AuthContext";

const UserProfile = () => {
  const API = apiURL();
  const [user, setUser] = useState([]);
  const { token } = useContext(AuthContext);

  // useEffect(() => {
  //   const fetchUserById = async () => {
  //     let res = await axios({
  //       method: "get",
  //       url: `${API}/api/users/${token}`,
  //       headers: {
  //         AuthToken: token,
  //       },
  //     });
  //     setUser(res.data.users);
  //   };
  //   fetchUserById();
  // }, []);

  return (
    <>
      <LeftSideBar />
      <h1>UserProfile</h1>
      <h2>If Logged In</h2>
      {/* <div>
        {user.map((user) => {
          return <li key={user.id}>{user.full_name}</li>;
        })}
      </div> */}
    </>
  );
};

export default UserProfile;
