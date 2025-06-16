const express = require("express");
const {
  getAddProductPage,
  postAddproduct,
} = require("./../controllers/products");

const router = express.Router();

router.get("/add-product", getAddProductPage);
router.post("/add-product", postAddproduct);

module.exports = router;
