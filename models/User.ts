import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email is already registered"],
  },
  googleId: {
    type: String,
    unique: true,
    sparse: true, // This makes the unique index only consider the documents where the field exists
  },
  profilePicture: String,
  todos: [
    {
      type: Schema.Types.ObjectId,
      ref: "Todo",
    },
  ],
  darkMode: {
    type: Boolean,
    default: false, // Default theme is light
  },
});

const User = models.User || model("User", userSchema);

export default User;
