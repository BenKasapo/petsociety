const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  post: { type: mongoose.Schema.Types.ObjectId, ref: "post" },
  postId: { type: String },
  name: { type: String },
  text: { type: String, required: true },
});
/* module.exports = Comment = mongoose.model("comment", CommentSchema); */
module.exports = Comment = mongoose.model("comment", CommentSchema);
