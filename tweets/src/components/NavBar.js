import React, { useState, useContext } from "react";
import "../css/NavBar.css";
import {
  NavLink,
  useHistory,
  Switch,
  Link,
  useLocation,
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { logout } from "../util/firebaseFunctions";
import { AuthContext } from "../providers/AuthContext";
import whiteBird from "../images/utilityIcons/whiteBird.png";
import profilePic from "../images/sidebarIcons/profile white.png";
import searchGlass from "../images/sidebarIcons/search-12-xl.png";
import { useInput } from "../util/customHooks";
import { apiURL } from "../util/apiURL";
import axios from "axios";
import TagPosts from "./TagPosts";


const NavBar = () => {
  const history = useHistory();
  const API = apiURL();
  const search = useInput("");
  const { currentUser, loading } = useContext(AuthContext);
  const [tagPosts, setTagPosts] = useState([]);

  const tagsRedirect = (tagposts) => history.push(`/tag/${tagposts}`);

  const getTags = async () => {
    try {
      let res = await axios.get(`${API}/api/tags/${search.value}`);
      setTagPosts(res.data.posts);
      
    } catch (error) {
      console.log(error);
    }
  };
 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    getTags();
    tagsRedirect(tagPosts)
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
            {/* <button type="submit" onClick={() => tagsRedirect(tagPosts)}>
              Submit
            </button> */}
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
      <nav>
        <NavLink exact to="/">
          <img id="home" src={whiteBird} alt="home" />
        </NavLink>
        {displayButtons()}
      </nav>
      {/* {tagPosts.length ? <Route to="/tags">
      <TagPosts tagPosts={results} /> : ""
      </Route>
      } */}
      {/* {tagPosts.length ? (
        <Switch>
          <Route
            exact
            to="/tags"
            render={() => <TagPosts results={results} />}
          />
        </Switch>
      ) : (
        ""
      )} */}
      <TagPosts tagPosts={tagPosts} />
    </>
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
