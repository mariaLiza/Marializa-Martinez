import React, { useState, useEffect } from "react";
import "../css/NavBar.css";
import { NavLink } from "react-router-dom";
// import { useInput } from "../util/customHooks";
// import Home from "../components/Home";

const NavBar = () => {
  //   const search = useInput("");

  return (
    <nav>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/login">
        Log In
      </NavLink>
      <NavLink exact to="/signup">
        Sign Up
      </NavLink>
      <NavLink exact to="/users/:id">
        User Profile
      </NavLink>
    </nav>
  );
};

{
  /* once signed in     */
}
{
  /* <NavLink to="/profile" >
          Profile
        </NavLink> */
}
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
{
  /* <NavLink
          to="/login"
        //   onClick={() => setLoggedIn(false)}
          //   className="navAnchor"
        >
          Logout
        </NavLink> */
}

export default NavBar;
