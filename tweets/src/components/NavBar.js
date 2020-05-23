import React, { useContext } from "react";
import "../css/NavBar.css";
import { NavLink } from "react-router-dom";
import { logout } from "../util/firebaseFunctions";
import { AuthContext } from "../providers/AuthContext";
import whiteBird from "../images/utilityIcons/whiteBird.png";

// import { useInput } from "../util/customHooks";

const NavBar = (params) => {
  //   const search = useInput("");
  const { currentUser } = useContext(AuthContext);

  const displayButtons = () => {
    if (currentUser) {
      return (
        <>
          <button onClick={logout}>Log Out</button>
          <NavLink to="/profile">Profile</NavLink>
        </>
      );
    } else {
      return (
        <>
          <NavLink activeClassName="active" id="login" exact to="/login">
            <div>Log In</div>
          </NavLink>
          <NavLink activeClassName="active" id="signup" exact to="/signup">
            <div>Sign Up</div>
          </NavLink>
        </>
      );
    }
  };

  return (
    <nav>
      <NavLink exact to="/">
        <img activeClassName="active" id="home" src={whiteBird} alt="home" />
      </NavLink>
      {displayButtons()}
      {/* <NavLink exact to="/users/:id">
        User Profile
      </NavLink> */}
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
