const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const Profile = require("../../models/Profile");
const User = require("../../models/User");
const { check, validationResult } = require("express-validator");

// @route  Get api/profile/me
// @desc   Get current users profile
// @access Private
router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      "user",
      ["name"]
    );
    if (!profile) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route  Post api/profile
// @desc   Create or update user profile
// @access Private
router.post("/", auth, async (req, res) => {
  const {
    address,
    phoneNumber,
    petName,
    petColor,
    petType,
    petPicture,
    petLostLocation,
  } = req.body;

  //Build profile Object
  const profileFields = {};
  profileFields.user = req.user.id;
  if (address) profileFields.address = address;
  if (petName) profileFields.petName = petName;
  if (petColor) profileFields.petColor = petColor;
  if (petType) profileFields.petType = petType;
  if (petPicture) profileFields.petPicture = petPicture;
  if (petLostLocation) profileFields.petLostLocation = petLostLocation;
  try {
    let profile = await Profile.findOne({ user: req.user.id });
    if (profile) {
      //Update
      profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true }
      );
      return res.json(profile);
    }
    //Create
    profile = new Profile(profileFields);
    await profile.save();
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route  Get api/profile/
// @desc   Get all profile
// @access Private
router.get("/", async (req, res) => {
  try {
    const profiles = await Profile.find().populate("user", ["name"]);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route  Get api/profile/user/:user_id
// @desc   Get profile by user ID
// @access Public
router.get("/user/:user_id", async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id,
    }).populate("user", ["name"]);

    if (!profile) {
      return res.status(404).json({ msg: "Profile not found " });
    }
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    if (err.kind == "ObjectId") {
      return res.status(400).json({ msg: "Profile not found" });
    }
    res.status(500).send("Server error");
  }
});

// @route  Delete api/profile
// @desc   Delete profile,user,posts
// @access Private
router.delete("/", auth, async (req, res) => {
  try {
    //@todo -remove users posts

    //Remove profile
    await Profile.findOneAndRemove({ user: req.user.id });
    //Remove User
    await Profile.findOneAndRemove({ _id: req.user.id });
    res.json({ msg: "User deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
