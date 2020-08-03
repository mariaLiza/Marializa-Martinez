import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { logout } from "../util/firebaseFunctions";
import { AuthContext } from "../providers/AuthContext";
import { useInput } from "../util/customHooks";
import whiteBird from "../images/utilityIcons/whiteBird.png";
import profilePic from "../images/sidebarIcons/profile white.png";
import searchGlass from "../images/sidebarIcons/search-12-xl.png";
import "../css/NavBar.css";

const NavBar = () => {
  const history = useHistory();
  const search = useInput("");
  const { currentUser, loading } = useContext(AuthContext);

  const tagsRedirect = (searchValue) => history.push(`/tag/${searchValue}`);
  const searchValue = search.value;

  const handleSubmit = (e) => {
    e.preventDefault();
    tagsRedirect(searchValue);
  };

  const displayButtons = () => {
    if (currentUser) {
      return (
        <>
          <form id="searchForm" onSubmit={handleSubmit}>
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

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <nav className="navBar">
        <NavLink exact to="/">
          <img id="home" src={whiteBird} alt="home" />
        </NavLink>
        {displayButtons()}
      </nav>
    </>
  );
};

export default NavBar;
