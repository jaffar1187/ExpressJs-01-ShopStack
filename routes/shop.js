const express = require("express");
const path = require("path");
const rootDirectory = require("./../utils/pathCreate");

const router = express.Router();

const { products } = require("./../routes/admin");

router.get("/", (req, res, next) => {
  res.render("shop", {
    prods: products,
    docTitle: "Shop",
    hasProducts: products.length,
  });
});

module.exports = router;
