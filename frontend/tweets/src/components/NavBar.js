import React, { useState, useEffect } from "react";
import "../css/NavBar.css";
import { NavLink } from "react-router-dom";
import { useInput } from "../util/customHooks";

const NavBar = () => {
  const search = useInput("");

  return (
    <nav>
      <div>
        <NavLink exact to="/">
          Home
        </NavLink>
      </div>
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
