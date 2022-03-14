// Mongoose and Moment
const { Schema, model } = require("mongoose");

const UsersSchema = new Schema(
  {
    username: {
      type: String,
      unique: [true, "Username must be unique."],
      trim: true,
      required: [true, "Username is required."],
    },
    email: {
      type: String,
      unique: [true, "Email must be unique."],
      match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/], // Regex is used to validate email
    },
    userCreated: {
      type: Date,
      default: Date.now,
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thoughts",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "Users",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// get friends' total count
UsersSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const Users = model("Users", UsersSchema);

module.exports = Users;
