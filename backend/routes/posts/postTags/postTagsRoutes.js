const postTags = require("express").Router({ mergeParams: true });
const getTagOfPost = require("../../../queries/posts/postTags/postTagsQueries");
const { isPostExisting } = require("../../../queries/posts/postQueries");

postTags.get("/", isPostExisting, getTagOfPost);

module.exports = postTags;
