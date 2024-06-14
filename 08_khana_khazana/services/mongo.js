import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb+srv://ronydas3030:ronydas123@clusterlwsassignment.kfuw88e.mongodb.net/khanaKhazana",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 30000, // Increase to 30 seconds
        socketTimeoutMS: 45000, // Increase to 45 seconds
      }
    );
    console.log("Database connected successfully");
    return connect;
  } catch (err) {
    console.error("Database connection error:", err);
    throw err; // It's good to rethrow the error after logging it
  }
};
