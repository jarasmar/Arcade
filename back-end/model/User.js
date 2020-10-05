const mongoose = require("mongoose");

const UserSchema = mongooseSchema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  totalScore: {
    type: Number,
    default: 0
  },
  tetris: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model("user", userSchema);