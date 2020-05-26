import React, { useState, useEffect } from "react";
import "../css/UserProfile.css";
import { apiURL } from "../util/apiURL";
import axios from "axios";
import LeftSideBar from "./LeftSideBar";

const UserProfile = () => {
  const API = apiURL();
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUserById = async () => {
      let res = await axios({
        method: "get",
        url: `${API}/api/users/:id`,
      });
      setUser(res.data.users);
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
