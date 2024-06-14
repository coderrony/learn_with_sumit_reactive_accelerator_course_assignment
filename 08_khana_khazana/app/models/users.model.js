import mongoose from "mongoose";

// Define the user schema with correct options
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true, // Correct option name
    },
    lastName: {
      type: String,
      required: true, // Correct option name
    },
    email: {
      type: String,
      unique: true,
      required: true, // Correct option name
    },
    password: {
      type: String,
      required: true, // Correct option name
    },
    favourites: {
      type: Array,
    },
  },
  { timestamps: true }
);
export const userModel =
  mongoose.models.users ?? mongoose.model("users", userSchema);
