import React, { useState, useContext } from "react";
import "../css/NavBar.css";
import { NavLink } from "react-router-dom";
import { logout } from "../util/firebaseFunctions";
import { AuthContext } from "../providers/AuthContext";
import whiteBird from "../images/utilityIcons/whiteBird.png";
import profilePic from "../images/sidebarIcons/profile white.png";
import searchGlass from "../images/sidebarIcons/search-12-xl.png";
import { useInput } from "../util/customHooks";
import { apiURL } from "../util/apiURL";
import axios from "axios";

const NavBar = (params) => {
  const API = apiURL();
  const search = useInput("");
  const { currentUser } = useContext(AuthContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const getTags = async () => {
      let res = await axios.get(`${API}/api/tags/${search.value}`);

      debugger;
    };
    getTags();
  };

  const displayButtons = () => {
    if (currentUser) {
      return (
        <>
          <form id="searchForm" onSubmit={onSubmit}>
            <img id="searchIcon" src={searchGlass} alt="search" />
            <input
              {...search}
              id="searchInput"
              type="search"
              placeholder="Search Twitter by hashtag"
            />
          </form>
          <a id="logout" onClick={logout}>
            Log Out
          </a>
          <NavLink id="profile" className="active" to="/profile">
            Profile <img id="profilePic" src={profilePic} alt="profile image" />
          </NavLink>
        </>
      );
    } else {
      return (
        <>
          <NavLink className="active" id="login" exact to="/login">
            <div>Log In</div>
          </NavLink>
          <NavLink className="active" id="signup" exact to="/signup">
            <div>Sign Up</div>
          </NavLink>
        </>
      );
    }
  };

  return (
    <nav>
      <NavLink exact to="/">
        <img id="home" src={whiteBird} alt="home" />
      </NavLink>
      {displayButtons()}
    </nav>
  );
};

//for searching by hashtag on navbar
{
  /* <form
          onSubmit={(e) => {
            e.preventDefault();
            onSearch(search.value);
          }}
          className="searchForm"
        >
          <input
            type="search"
            placeholder="Search By Tag"
            className="search"
            {...search}
          />
        </form> */
}

export default NavBar;
