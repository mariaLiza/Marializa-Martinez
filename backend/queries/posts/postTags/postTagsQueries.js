const db = require("../../../db/index");

const getTagOfPost = async (req, res, next) => {
  const { id } = req.params;
  try {
    let tags = await db.any("SELECT tag,id FROM tags WHERE post_id =$1", id);
    if (tags.length) {
      res.status(200).json({
        status: "ok",
        tags,
        message: "Retrieved all tags for post",
      });
    } else {
      throw { status: 404, error: `Post ID ${id} has no tags` };
    }
  } catch (error) {
    next(error);
  }
};

module.exports = getTagOfPost;
