const users = require("express").Router();
const userPostsRouter = require("../users/userPosts/userPostsRoutes");
const { checkFirebaseToken } = require("../../middleware/auth");

const {
  getUserById,
  createNewUser,
  updateUser,
  getAllUsers,
  getUserByUsername,
} = require("../../queries/users/usersQueries");

//nested
users.use("/:id/posts", checkFirebaseToken, userPostsRouter);
users.use("/:username/posts", getUserByUsername);
users.get("/:id", checkFirebaseToken, getUserById);
users.get("/", getAllUsers);
users.post("/", createNewUser);

users.patch("/:id", updateUser);

// users.delete("/:id", deleteUser);

module.exports = users;
