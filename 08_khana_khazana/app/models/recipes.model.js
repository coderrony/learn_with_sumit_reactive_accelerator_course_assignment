import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  activeTime: {
    type: String,
    required: true,
  },
  totalTime: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  serves: {
    type: String,
  },
  rating: {
    type: String,
  },
  steps: {
    type: Array,
  },
});

export const recipeModel =
  mongoose.models.recipes ?? mongoose.model("recipes", recipeSchema);
