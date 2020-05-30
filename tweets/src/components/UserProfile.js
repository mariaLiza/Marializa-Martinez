import React, { useState, useEffect, useContext } from "react";
import "../css/UserProfile.css";
import { apiURL } from "../util/apiURL";
import axios from "axios";
import LeftSideBar from "./LeftSideBar";
import { AuthContext } from "../providers/AuthContext";

const UserProfile = () => {
  const API = apiURL();
  const [user, setUser] = useState([]);
  const { token, currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchUserById = async () => {
      // console.log(token);
      // console.log(currentUser);
      let res = await axios({
        method: "get",
        url: `${API}/api/users/${currentUser.uid}`,
        headers: {
          AuthToken: token,
        },
      });
      setUser(res.data.user);
      console.log(user, "user");
      debugger;
    };
    fetchUserById();
  }, []);

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
