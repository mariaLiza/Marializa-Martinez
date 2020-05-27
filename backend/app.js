const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const usersRouter = require("./routes/users/usersRoutes");
const postsRouter = require("./routes/posts/postsRoutes");
const tagsRouter = require("./routes/tags/tagsRoutes");

const PORT = process.env.PORT;
const path = require("path");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "./public")));

//routes here
app.use("/api/users", usersRouter);
app.use("/api/posts", postsRouter);
app.use("/api/tags", tagsRouter);

//error handling
app.use((err, req, res, next) => {
  console.log(err);
  if (err.status) {
    res.status(err.status).json(err);
  } else {
    res.status(500).json(err);
  }
});

app.get("*", (req, res, next) => {
  res.status(404).json({
    status: 404,
    error: "No route found",
  });
});

app.listen(PORT, () => {
  console.log("listening on ", PORT);
});
