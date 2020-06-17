import React, { useState, useContext } from "react";
import "../css/NavBar.css";
import { NavLink, useHistory, Link, useLocation, Route } from "react-router-dom";
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
  // const location = useLocation();

  const onSubmit = (e) => {
    e.preventDefault();
    const getTags = async () => {
      let res = await axios.get(`${API}/api/tags/${search.value}`);
      setTagPosts(res.data.posts);
      // location = {
        //   pathname: "/tagposts",
        //   state: { tagPosts: true },
        // };
        // history.push(location);
        
        
        // debugger;
        console.log(res.data.posts)
      };
      getTags();
    };
    console.log(tagPosts)
    history.push("/tagposts", { state: tagPosts });
  // let tagPostsList = tagPosts.map((post, i) => {
  //   return (
  //     <div key={i} className="userPostsListDiv">
  //       <div className="rowContainer">
  //         <p id="picP">
  //           {" "}
  //           <img
  //             id="postProfilePic"
  //             src={
  //               "https://ya-webdesign.com/transparent250_/blank-profile-picture-png-2.png"
  //             }
  //             alt="profile image"
  //           />
  //         </p>
  //         <p id="userNameP">@{post.username}</p>
  //         <p id="dateStampP">{post.created_at}</p>
  //       </div>
  //       <p id="postBodyP">{post.body}</p>
  //       <p id="tag">#{post.tags[0]}</p>
  //     </div>
  //   );
  // });

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

  if (loading) return <div>Loading...</div>;

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
