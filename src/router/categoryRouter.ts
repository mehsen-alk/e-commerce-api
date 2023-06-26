import express from "express";
import * as categoryService from "../services/category_services";

export const categoryRouter = express.Router();

categoryRouter
  .route("/")
  .post(categoryService.createCategory)
  .get(categoryService.getCategories)
  .put(categoryService.updateCategory);

categoryRouter
  .route("/:id")
  .get(categoryService.getCategory)
  .delete(categoryService.deleteCategory);
