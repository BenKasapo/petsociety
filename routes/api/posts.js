const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const Profile = require("../../models/Profile");
const User = require("../../models/User");
const Post = require("../../models/Post");

// @route  Post api/posts
// @desc   Create Post
// @access Private
router.post(
  "/",
  [
    auth,
    [check("text", "Text is required").not().isEmpty()],
    [check("petName", "petName is required").not().isEmpty()],
    [check("petType", "petType is required").not().isEmpty()],
    [check("petLostLocation", "petLostLocation is required").not().isEmpty()],
    [check("postType", "postType is required").not().isEmpty()],
    // [check("petPicture", "petPicture is required").not().isEmpty()],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      //const user = await User.findById(req.user.id).select("-password");
      const user = await User.findById(req.user.id).select("-password");

      console.log(req.body);

      const newPost = new Post({
        text: req.body.text,
        name: user.name,
        user: req.user.id,
        petName: req.body.petName,
        petType: req.body.petType,
        petLostLocation: req.body.petLostLocation,
        postType: req.body.postType,
        petPicture: req.body.petPicture,
      });

      const post = await newPost.save();
      res.json(post);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

// @route  Get api/posts
// @desc   Get all Post
// @access Public
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().populate("user", ["name"]);
    console.log("number of posts returned : ", posts.length);
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

/**
 *  @route  Get api/posts/user_posts
    @desc   Get Post by userID
    @access Private
 */
router.get("/user_posts", auth, async (req, res) => {
  try {
    const posts = await Post.find({ user: req.user.id });
    console.log("number of posts returned : ", posts.length);
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route  Get api/posts/:id
// @desc   Get Post by ID
// @access Private
router.get("/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(400).json({ msg: "Post not found " });
    }

    res.json(post);
  } catch (err) {
    if (err.kind == "ObjectId") {
      return res.status(400).json({ msg: "Post not found" });
    }
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route  DELETE api/posts/:id
// @desc   DELETE Post
// @access Private
router.delete("/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }

    //Check user
    if (post.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }
    await post.remove();
    res.json({ msg: "Post removed" });
  } catch (err) {
    console.error(err.message);
    if (err.kind == "ObjectId") {
      return res.status(400).json({ msg: "Post not found" });
    }
    res.status(500).send("Server error");
  }
});

// @route  Post api/posts
// @desc   Update a Post
// @access Private
router.patch(
  "/:id",

  auth,
  /*    [check("text", "Text is required").not().isEmpty()],
    [check("petName", "petName is required").not().isEmpty()],
    [check("petType", "petType is required").not().isEmpty()],
    [check("petLostLocation", "petLostLocation is required").not().isEmpty()],
    [check("postType", "postType is required").not().isEmpty()],
    [check("petPicture", "petPicture is required").not().isEmpty()], */
  async (req, res) => {
    //const errors = validationResult(req);
    /*  if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
 */

    try {
      //const user = await User.findById(req.user.id).select("-password");
      /*  const post = await Post.findById(req.params.id); */
      const user = await User.findById(req.user.id).select("-password");

      const updatedPost = {
        text: req.body.text,
        name: user.name,
        user: req.user.id,
        petName: req.body.petName,
        petType: req.body.petType,
        petLostLocation: req.body.petLostLocation,
        postType: req.body.postType,
        petPicture: req.body.petPicture,
      };
      /*  const { id } = req.params; */

      if (!updatedPost) {
        return res.status(404).json({ msg: "Post not found" });
      }

      //Check user
      if (updatedPost.user.toString() !== req.user.id) {
        return res.status(401).json({ msg: "User not authorized" });
      }
      await Post.findByIdAndUpdate(req.params.id, updatedPost, {
        new: true,
      });
      res.json(updatedPost);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

// @route  Post api/posts/comment/:id
// @desc   Comment on a post
// @access Private
router.patch(
  "/comment/:id",
  [auth, [check("text", "Text is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select("-password");
      const post = await Post.findById(req.params.id);

      const newComment = {
        text: req.body.text,
        name: user.name,
        user: req.user.id,
      };

      post.comments.unshift(newComment);

      await post.save();
      res.json(post.comments);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

// @route  Delete api/posts/comment/:id/:comment_id
// @desc   Delete Comment
// @access Private

router.delete("/comment/:id/:comment_id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    //Pull out comment
    const comment = post.comments.find(
      (comment) => comment.id === req.params.comment_id
    );

    //Make sure comment exixts
    if (!comment) {
      return res.status(404).json({ msg: "Comment not found" });
    }

    //Check user
    if (comment.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authoriZed" });
    }
    // Get remove index
    const removeIndex = post.comments
      .map((comment) => comment.user.toString())
      .indexOf(req.user.id);

    post.comments.splice(removeIndex, 1);

    await post.save();

    res.json(post.comments);
  } catch (err) {
    console.error(err.message);
    if (err.kind == "ObjectId") {
      return res.status(400).json({ msg: "Post not found" });
    }
    res.status(500).send("Server error");
  }
});

module.exports = router;
