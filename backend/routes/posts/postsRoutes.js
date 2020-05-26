const posts = require("express").Router();
const postTagsRouter = require("./postTags/postTagsRoutes");

const {
  getAllPosts,
  getPostById,
  createPost,
  deletePost,
  isPostExisting,
} = require("../../queries/posts/postQueries");

posts.use("/:id/tags", postTagsRouter);

posts.get("/", getAllPosts);
posts.get("/:id", isPostExisting, getPostById);
posts.post("/", createPost);
posts.delete("/:id", isPostExisting, deletePost);

module.exports = posts;
