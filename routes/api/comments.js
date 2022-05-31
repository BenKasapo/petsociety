const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const Profile = require("../../models/Profile");
const User = require("../../models/User");
const Post = require("../../models/Post");
const Comment = require("../../models/Comment");

// @route  Post api/comments
// @desc   Create comment
// @access Private
router.post("/:id", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(400).json({ msg: "Post not found " });
    }

    console.log(req.body);

    const newCommentPost = new Comment({
      text: req.body.text,
      name: user.name,
      user: req.user.id,
    });

    const comments = await newCommentPost.save();
    console.log(comments);
    res.json(comments);
  } catch (err) {
    if (err.kind == "ObjectId") {
      return res.status(400).json({ msg: "Post not found" });
    }
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
