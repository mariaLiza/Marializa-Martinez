import React, { useContext } from "react";
import "../css/NavBar.css";
import { NavLink } from "react-router-dom";
import { logout } from "../util/firebaseFunctions";
import { AuthContext } from "../providers/AuthContext";


// import { useInput } from "../util/customHooks";
// import Home from "../components/Home";

const NavBar = (params) => {
  //   const search = useInput("");
  const { currentUser } = useContext(AuthContext);

  const displayButtons = () => {
    if (currentUser) {
      return <button onClick={logout}>Log Out</button>;
    } else {
      return (
        <>
          <NavLink exact to="/login">
            Log In
          </NavLink>
          <NavLink exact to="/signup">
            Sign Up
          </NavLink>
        </>
      );
    }
  };

  return (
    <nav>
      <NavLink exact to="/">
        Home
      </NavLink>
      {displayButtons()}
      {/* <NavLink exact to="/users/:id">
        User Profile
      </NavLink> */}
      <NavLink to="/profile">Profile</NavLink>
    </nav>
  );
};

{
  /* once signed in     */
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
