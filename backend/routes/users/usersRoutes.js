// const express = require("express");
// const users = express.Router({ mergeParams: true });
const users = require("express").Router();

const {
  // getUserById,
  createNewUser,
  // isUserExisting,
  // logIn,
  //   updateUser,
  //   deleteUser,
  //   getAllUsers,
} = require("../../queries/users/usersQueries");

//nested
// users.use("/:id/posts", userPostsRoutes);
// isUserExisting
// users.get("/:id", getUserById);
users.post("/", createNewUser);

// users.get("/", getAllUsers);

// users.post("/login", logIn);

// users.patch("/:id", isUserExisting, updateUser);

// users.delete("/:id", isUserExisting, deleteUser);

module.exports = users;
