const userPosts = require("express").Router({ mergeParams: true });
const getPostByUser = require("../../../queries/users/userPosts/userPostsQueries");
// const { isUserExisting } = require("../../../queries/users/usersQueries");

// isUserExisting,
userPosts.get("/", getPostByUser);

module.exports = userPosts;
