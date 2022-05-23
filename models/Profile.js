const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  address: { type: String },
  petName: { type: String },
});
module.exports = User = mongoose.model("profile", ProfileSchema);
