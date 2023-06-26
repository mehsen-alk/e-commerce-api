import { timeStamp } from "console";
import mongoose from "mongoose";



const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "category name is required"],
      unique: [true, "there is another category with the same name"],
      minLength: [3, "too short category name"],
      maxLength: [32, "too long category name"],
    },
    slug: {
      type: String,
      lowercase: true,
    },
  },
  {
    timestamps: true,
  }
);

export const CategoryModel = mongoose.model("Category", CategorySchema);

// module.exports.CategoryModel = CategoryModel;
