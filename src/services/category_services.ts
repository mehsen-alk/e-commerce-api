import { CategoryModel } from "../models/category";
import { RequestHandler } from "express";
import slugify from "slugify";
import asyncHandler from "express-async-handler";

export const createCategory: RequestHandler = asyncHandler(async (req, res) => {
  const name = req.body.name;

  let category = await CategoryModel.create({ name, slug: slugify(name) });

  res.status(201).send({ date: category });
});

export const getCategories: RequestHandler = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page as string) | 1;
  const limit = parseInt(req.query.limit as string);
  const skip = (page - 1) * limit;

  let categories = await CategoryModel.find({}).skip(skip).limit(limit);
  res.status(200).send({ result: categories.length, data: categories });
});

export const getCategory: RequestHandler = asyncHandler(async (req, res) => {
  const { id } = req.params;

  let category = await CategoryModel.findById(id);

  if (!category) {
    res.status(404).json({ msg: "Not Found" });
  }

  res.status(200).json({ data: category });
});

export const updateCategory: RequestHandler = asyncHandler(async (req, res) => {
  const { id, name } = req.body;

  let category = await CategoryModel.findOneAndUpdate(
    { _id: id },
    { name, slug: slugify(name) },
    { new: true }
  );

  if (!category) {
    res.status(404).json({ msg: "Not Found" });
  }

  res.status(202).send({ data: category, msg: "updated successfully" });
});

export const deleteCategory: RequestHandler = asyncHandler(async (req, res) => {
  const { id } = req.params;

  let category = await CategoryModel.findOneAndDelete({ _id: id });

  if (!category) {
    res.status(404).json({ msg: "Not Found" });
  }

  res.status(202).send({ data: category, msg: "deleted successfully" });
});
