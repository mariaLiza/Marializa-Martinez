const db = require("../../db/index");

// const isUserExisting = async (req, res, next) => {
//   const getId = req.params.id;
//   const postId = req.body.poster_id;

//   const id = getId ? getId : postId;
//   try {
//     if (!id) {
//       throw { status: 400, error: "No ID given." };
//     } else {
//       let user = await db.one("SELECT * FROM users WHERE id=$1", id);
//       next();
//     }
//   } catch (error) {
//     if (error.received === 0) {
//       res
//         .status(404)
//         .json({ status: 404, error: `User ID: ${id} doesn't exist` });
//     } else {
//       next(error);
//     }
//   }
// };

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
    console.log(error)
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

//may use these queries later on - getAllUsers, logIn, updateUser, deleteUser//

// const getAllUsers = async (req, res, next) => {
//   try {
//     let users = await db.any("SELECT * FROM users ORDER BY id ASC");
//     if (users.length) {
//       res.status(200).json({
//         status: "ok",
//         users,
//         message: "Retrieved all users",
//       });
//     } else {
//       throw { status: 404, error: "No users found" };
//     }
//   } catch (error) {
//     next(error);
//   }
// };

// const logIn = async (req, res, next) => {
//   const { email } = req.body;
//   try {
//     let user = await db.one(`SELECT * FROM users WHERE email=$1`, email);
//     res.status(200).json({
//       status: "ok",
//       user,
//       message: "Retrieved user by email",
//     });
//   } catch (error) {
//     if (error.received === 0) {
//       res.status(404).json({
//         status: 404,
//         error: `Email doesn't exist`,
//       });
//     }
//     next(error);
//   }
// };

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { username, profile_pic } = req.body;
    let user;

    if (username) {
      user = await db.one(
        `UPDATE users SET username=$1 WHERE id=$2 RETURNING *`,
        [username, id]
      );
    }
    if (profile_pic) {
      user = await db.one(
        `UPDATE users SET profile_pic=$1 WHERE id=$2 RETURNING *`,
        [profile_pic, id]
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
  // isUserExisting,
  getUserById,
  createNewUser,
  //   deleteUser,
    updateUser,
  // logIn,
  // getAllUsers,
};
