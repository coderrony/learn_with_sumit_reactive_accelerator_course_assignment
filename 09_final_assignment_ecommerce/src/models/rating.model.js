import mongoose from "mongoose";

const ratingSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    rating: { type: Number, required: true, min: 1, max: 5 },
    review: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

export const RatingModel =
  mongoose.models.ratings || mongoose.model("ratings", ratingSchema);
