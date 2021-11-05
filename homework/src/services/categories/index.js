import express from "express";
import models from "../../db/models/index.js";

const { Category } = models;

const router = express.Router();

router.route("/").get(async (req, res, next) => {
  try {
    const categories = await Category.findAll();
    res.send(categories);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export default router;


