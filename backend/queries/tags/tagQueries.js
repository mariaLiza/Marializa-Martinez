const db = require("../../db/index");

const getAllTags = async (req, res, next) => {
  try {
    let tags = await db.any(`SELECT * FROM tags`);
    if (tags.length) {
      res.status(200).json({
        status: "ok",
        tags,
        message: "Retrieved all tags",
      });
    } else {
      throw { status: 404, error: "No tags found" };
    }
  } catch (error) {
    next(error);
  }
};

const getTagByName = async (req, res, next) => {
  const { tag } = req.params;
  try {
    let posts = await db.any(
      `SELECT tags.*, posts.*, users.username, users.profile_pic FROM posts LEFT JOIN users ON posts.poster_id = users.id LEFT JOIN tags ON tags.post_id = posts.id WHERE tags.tag = $1 ORDER BY created_at DESC`,
      tag
    );
    if (posts.length) {
      res.status(200).json({
        status: "ok",
        posts,
        message: "Retrieved all posts by search",
      });
    } else {
      throw { status: 404, error: `No tags found by search: ${tag}` };
    }
  } catch (error) {
    next(error);
  }
};

const createTag = async (req, res, next) => {
  const { post_id, tags } = req.body;
  try {
    let tag = await db.one(
      `INSERT INTO tags (post_id, tag) VALUES($1, $2) RETURNING *`,
      [post_id, tags]
    );
    res.status(200).json({
      status: "ok",
      tag,
      message: "Created new tag",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllTags, getTagByName, createTag };
