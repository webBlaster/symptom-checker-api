//Require Mongoose
const mongoose = require("mongoose");

//Define a schema
const Schema = mongoose.Schema;

//User schema
const UserSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  gender: { type: String, required: true },
  year_of_birth: { type: String, required: true },
  token: { type: String },
});

// Compile model from schema
const User = mongoose.model("User", UserSchema);

module.exports = {
  User,
};
