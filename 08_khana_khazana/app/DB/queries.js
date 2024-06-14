import mongoose from "mongoose";
import { recipeModel } from "../models/recipes.model";
import { userModel } from "../models/users.model";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-utils";
import { clearString } from "@/utils/clearString";

// Ensure the database is connected before performing any operations
const isDatabaseConnected = () => mongoose.connection.readyState === 1;

const ensureDatabaseConnection = async () => {
  if (!isDatabaseConnected()) {
    try {
      await mongoose.connect(
        "mongodb+srv://ronydas3030:ronydas123@clusterlwsassignment.kfuw88e.mongodb.net/khanaKhazana",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          serverSelectionTimeoutMS: 30000, // Increase to 30 seconds
          socketTimeoutMS: 45000, // Increase to 45 seconds
        }
      );
      console.log("Database connected successfully");
    } catch (err) {
      console.error("Database connection error:", err);
      throw err;
    }
  }
};

// Function to create a user
export const createUser = async (userData) => {
  await ensureDatabaseConnection();
  try {
    return await userModel.create(userData);
  } catch (err) {
    console.error("Error creating user:", err);
    throw err;
  }
};

// Function to login a user
export const loginUser = async (credentials) => {
  await ensureDatabaseConnection();
  try {
    const user = await userModel.findOne(credentials).lean();
    if (user) {
      return replaceMongoIdInObject(user);
    }
    return null;
  } catch (err) {
    console.error("Error logging in user:", err);
    throw err;
  }
};

// Function to get all recipes
export const getAllRecipes = async () => {
  await ensureDatabaseConnection();
  try {
    const recipes = await recipeModel.find().lean();
    return replaceMongoIdInArray(recipes);
  } catch (err) {
    console.error("Error getting all recipes:", err);
    throw err;
  }
};

// Function to get a recipe by ID
export const getRecipeById = async (id) => {
  await ensureDatabaseConnection();
  try {
    const recipe = await recipeModel.findById(id).lean();
    return replaceMongoIdInObject(recipe);
  } catch (err) {
    console.error("Error getting recipe by ID:", err);
    throw err;
  }
};

// Function to get recipes by category
export const categorizedRecipes = async (category) => {
  await ensureDatabaseConnection();
  try {
    const recipes = await recipeModel.find().lean();
    const filterCategory = recipes.filter(
      (item) => clearString(item.category) === category
    );

    if (filterCategory.length) {
      return replaceMongoIdInArray(filterCategory);
    } else {
      return [];
    }
  } catch (err) {
    console.error("Error getting categorized recipes:", err);
    throw err;
  }
};

// Function to update favourites
export const updateFavourite = async (recipeId, userId) => {
  await ensureDatabaseConnection();
  try {
    const user = await userModel.findById(userId);
    if (user) {
      const findFavourites = user?.favourites?.find(
        (id) => id.toString() === recipeId
      );
      if (findFavourites) {
        user?.favourites?.pull(new mongoose.Types.ObjectId(recipeId));
      } else {
        user?.favourites?.push(new mongoose.Types.ObjectId(recipeId));
      }
      await user.save();
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (err) {
    console.error("Error updating favourites:", err);
    throw err;
  }
};
