import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthContext";
import { apiURL } from "../util/apiURL";
import axios from "axios";
import "../css/WhosWho.css";

const WhosWho = () => {
  const { loading } = useContext(AuthContext);
  const API = apiURL();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    try {
      let res = await axios.get(`${API}/api/users`);
      setUsers(res.data.users.slice(0, 2));
      debugger;
    } catch (error) {
      console.logz(error);
    }
  };

  const usersDisplay = users.map((user, i) => {
    return (
      <div className="whosWhoEach" key={i}>
        <div className="picNname">
          <p className="whosPic">
            {user.profile_pic ? (
              user.profile_pic
            ) : (
              <img
                id="postProfilePic"
                src={
                  "https://ya-webdesign.com/transparent250_/blank-profile-picture-png-2.png"
                }
                alt="profile image"
              />
            )}
          </p>
          <p className="userNameP">{user.username}</p>
        </div>
        <p>{user.email}</p>
        <p>{user.bio}</p>
      </div>
    );
  });

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(users);

  return (
    <>
      <div className="whosContainer">
        <h1 className="whoH1">Who's Who</h1>
        {usersDisplay}
      </div>
    </>
  );
};

export default WhosWho;
