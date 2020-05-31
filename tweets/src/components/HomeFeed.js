import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { apiURL } from "../util/apiURL";

// import { AuthContext } from "../providers/AuthContext";

const HomeFeed = () => {
  const API = apiURL();
  // const { currentUser } = useContext(AuthContext);
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const showAllPosts = async () => {
      try {
        let res = await axios({
          method: "get",
          url: `${API}/api/posts`,
        });
        // debugger;
        setFeed(res.data.allPosts);
      } catch (err) {
        console.log(err);
      }
    };
    showAllPosts();
  }, []);

  return (
    <>
      <div>HomeFeed</div>
    </>
  );
};

export default HomeFeed;
