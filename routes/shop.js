const express = require("express");
const path = require("path");
const rootDirectory = require("../utils/pathCreate");

const router = express.Router();

const { products } = require("./admin");

router.get("/", (req, res, next) => {
  res.render("shop", {
    prods: products,
    docTitle: "Shop",
    hasProducts: products.length,
    activeShop: true,
    productCSS: true,
    path: "/",
  });
});

module.exports = router;
