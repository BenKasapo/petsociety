const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

// User model
const User = require("../../models/User");

// @route  Post api/user
// @desc   Registration route
// @access Public
router.post(
  "/",
  /* [
    check("name", "name is required").isEmpty(),
    check("email", "Please include a valid email").not().isEmail(),
    check("phoneNumber", "Please include a valid phoneNumber").isEmpty(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isEmpty(),
  ],*/
  async (req, res) => {
    /*const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }*/
    const { name, email, phoneNumber, password } = req.body;

    // See if user exixts
    try {
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }

      user = new User({ name, email, phoneNumber, password });

      // Encrypt password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      // Return jsonwebtoken
      const payload = {
        user: { id: user.id },
      };
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
