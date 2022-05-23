const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  text: { type: String, required: true },
  name: { type: String },
  comments: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
      text: { type: String, required: true },
      name: { type: String },
    },
  ],
  petName: { type: String, required: true },
  petType: { type: String, required: true },
  petPicture: { type: String, required: true },
  petLostLocation: { type: String, required: true },
  postType: { type: String, required: true },
});
module.exports = Post = mongoose.model("post", PostSchema);
