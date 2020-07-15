const userPosts = require("express").Router({ mergeParams: true });
const {
  getPostByUser,
  getPostByUsername,
} = require("../../../queries/users/userPosts/userPostsQueries");
// const { isUserExisting } = require("../../../queries/users/usersQueries");

// isUserExisting,
userPosts.get("/", getPostByUser, getPostByUsername);
// userPosts.get("/:username", getPostByUsername);

module.exports = userPosts;
