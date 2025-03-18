const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  cartdata:{type:Array, default:{}},
  created_at: { type: Date, default: Date.now },
},{minimize:false});

const Usermodel = mongoose.model("user", UserSchema);
module.exports = Usermodel;