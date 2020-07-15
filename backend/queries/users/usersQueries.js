const db = require("../../db/index");

const getUserById = async (req, res, next) => {
  const { id } = req.params;
  try {
    let user = await db.one("SELECT * FROM users WHERE id=$1", id);
    res.status(200).json({
      status: "ok",
      user,
      message: "Retrieved user",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getUserByUsername = async (req, res, next) => {
  const { username } = req.params;
  try {
    let user = await db.any("SELECT users.* FROM users WHERE users.username=$1", username);
    res.status(200).json({
      status: "ok",
      user,
      message: "Retrieved user",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const createNewUser = async (req, res, next) => {
  try {
    const { fullname, email, username, bio, id } = req.body;

    let user = await db.one(
      `INSERT INTO users 
                          (fullname, email, username, bio, id)
                          VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [fullname, email, username, bio, id]
    );

    res.status(200).json({
      status: "ok",
      user,
      message: "Created new user",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    let users = await db.any("SELECT * FROM users ORDER BY id ASC");
    if (users.length) {
      res.status(200).json({
        status: "ok",
        users,
        message: "Retrieved all users",
      });
    } else {
      throw { status: 404, error: "No users found" };
    }
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { username, profile_pic, bio } = req.body;
    let user;

    if (username) {
      user = await db.one(
        `UPDATE users SET username=$1 WHERE id=$2 RETURNING *`,
        [username, id]
      );
    }
    if (profile_pic) {
      user = await db.one(
        `UPDATE users SET profile_pic=$1, bio=$1 WHERE id=$2 RETURNING *`,
        [profile_pic, id, bio]
      );
    }
    if (user) {
      res.status(200).json({
        status: "ok",
        user,
        message: "Updated user",
      });
    } else {
      res.status(400).json({
        status: 400,
        error: "No updates made",
      });
    }
  } catch (error) {
    next(error);
  }
};

// const deleteUser = async (req, res, next) => {
//   const { id } = req.params;
//   try {
//     let user = await db.one(`DELETE FROM users WHERE id=$1 RETURNING *`, id);
//     res.status(200).json({
//       status: "ok",
//       user,
//       message: "Deleted user"
//     });
//   } catch (error) {
//     next(error);
//   }
// };

module.exports = {
  getUserById,
  createNewUser,
  //   deleteUser,
  updateUser,
  getAllUsers,
  getUserByUsername
};
