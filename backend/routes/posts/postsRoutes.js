const posts = require("express").Router();
const postTagsRouter = require("./postTags/postTagsRoutes");
const uploads = require("../../queries/posts/uploads");
// const { checkFirebaseToken } = require("../../middleware/auth");

const {
  showAllPosts,
  getPostById,
  createPost,
  deletePost,
  isPostExisting,
} = require("../../queries/posts/postQueries");

posts.use("/:id/tags", postTagsRouter);

posts.get("/", showAllPosts);
posts.get("/:id", isPostExisting, getPostById);
posts.post("/", uploads, createPost);
posts.delete("/:id", isPostExisting, deletePost);

module.exports = posts;
