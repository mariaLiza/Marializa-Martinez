// const express = require("express");
// const users = express.Router({ mergeParams: true });
const users = require("express").Router();
const userPostsRouter = require("../users/userPosts/userPostsRoutes");
const { checkFirebaseToken } = require("../../middleware/auth");

const {
  getUserById,
  createNewUser,
  // isUserExisting,
  // logIn,
  updateUser,
  //   deleteUser,
  //   getAllUsers,
} = require("../../queries/users/usersQueries");

//nested
users.use("/:id/posts", checkFirebaseToken, userPostsRouter);
// isUserExisting
users.get("/:id", checkFirebaseToken, getUserById);
users.post("/", createNewUser);

// users.get("/", getAllUsers);

// users.post("/login", logIn);
// isUserExisting,

users.patch("/:id", updateUser);

// users.delete("/:id", isUserExisting, deleteUser);

module.exports = users;
