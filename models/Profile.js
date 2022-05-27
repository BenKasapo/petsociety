const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  address: { type: String },
  text: { type: String, required: true },
  name: { type: String },
  comments: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
      text: { type: String },
      name: { type: String },
    },
  ],
  petName: { type: String },
  petType: { type: String },
  petPicture: { type: String },
  petLostLocation: { type: String },
  postType: { type: String },
});
module.exports = User = mongoose.model("profile", ProfileSchema);
