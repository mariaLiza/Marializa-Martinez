const db = require("../../db/index");
const upload = require("./uploads");

const isPostExisting = async (req, res, next) => {
  const getId = req.params.id;
  const postId = req.body.post_id;
  const id = getId ? getId : postId;
  try {
    if (!id) {
      next();
    } else {
      let post = await db.one("SELECT * FROM posts WHERE id=$1", id);
      next();
    }
  } catch (error) {
    if (error.received === 0) {
      res
        .status(404)
        .json({ status: 404, error: `Post ID: ${id} doesn't exist` });
    } else {
      next(error);
    }
  }
};

const getAllPosts = async (req, res, next) => {
  try {
    let posts;
    let { search } = req.query;
    console.log(req.query);
    if (search) {
      console.log(search);
      posts = await db.any(
        `SELECT users.username , full_posts.*
        FROM  (
            SELECT posts.*, array_remove(ARRAY_AGG(tags.tag), NULL) AS tags
            FROM posts
            LEFT JOIN tags ON tags.post_id = posts.id 
            WHERE tags.tag=$1
            GROUP BY posts.id
            ORDER BY created_at DESC
            ) AS full_posts
         JOIN users ON users.id = full_posts.poster_id`,
        search
      );
    } else {
      posts = await db.any(
        `SELECT users.username , full_posts.*
        FROM  (
            SELECT posts.*, array_remove(ARRAY_AGG(tags.tag), NULL) AS tags
            FROM posts
            LEFT JOIN tags ON tags.post_id = posts.id 
            GROUP BY posts.id
            ORDER BY created_at DESC
            ) AS full_posts
         JOIN users ON users.id = full_posts.poster_id`
      );
    }

    if (posts.length) {
      res.status(200).json({
        status: "ok",
        posts,
        message: "Retrieved all posts",
      });
    } else {
      throw { status: 404, error: "No posts found." };
    }
  } catch (error) {
    next(error);
  }
};

const getPostById = async (req, res, next) => {
  const { id } = req.params;
  try {
    let posts = await db.one(`SELECT * FROM posts WHERE id = $1`, id);
    res.status(200).json({
      status: "ok",
      posts,
      message: "Retrieved Post",
    });
  } catch (error) {
    next(error);
  }
};

const createPost = (req, res, next) => {
  try {
    console.log("create post");
    upload(req, res, (err) => {
      try {
        console.log("upload");
        const { caption, poster_id, created_at } = req.body;
        let picture = "/uploads/" + req.file.filename;

        db.one(
          `INSERT INTO posts (caption, poster_id,picture, created_at) 
                                VALUES($1 ,$2,$3,$4) RETURNING *`,
          [caption, poster_id, picture, created_at]
        ).then((done) => {
          console.log("then");
          res.status(200).json({
            status: "ok",
            post: done,
            message: "Created post",
          });
        });
      } catch (err) {
        console.log(err);
        next(err);
      }
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const deletePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    let post = await db.one(`DELETE FROM posts WHERE id=$1 RETURNING *`, id);
    res.status(200).json({
      status: "ok",
      post,
      message: "Deleted post",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  deletePost,
  isPostExisting,
};
