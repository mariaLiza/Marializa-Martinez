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
      `SELECT *, tags.id AS id, posts.id AS post_id, users.id AS poster_id FROM tags 
                              LEFT JOIN posts ON posts.id=tags.post_id 
                              LEFT JOIN users ON users.id=posts.poster_id WHERE tag=$1`,
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
  const { post_id, tag } = req.body;
  try {
    let tags = await db.one(
      `INSERT INTO tags (post_id, tag) VALUES($1, $2) RETURNING *`,
      [post_id, tag]
    );
    res.status(200).json({
      status: "ok",
      tags,
      message: "Created new tag",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllTags, getTagByName, createTag };
