const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username field should not be empty"],
      unique: [true, "Username should be unique"],
    },
    email: {
      type: String,
      required: [true, "Email field should not be empty"],
      unique: [true, "Email should be unique"],
    },
    password: {
      type: String,
      required: [true, "Password field should not be empty"],
      minlength: [5, "Password should be at least 5 characters long"],
    },
  },
  { 
    timestamps: true 
  }
);

module.exports = mongoose.model("User", userSchema);
