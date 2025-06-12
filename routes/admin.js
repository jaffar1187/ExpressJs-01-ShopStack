const express = require("express");
const path = require("path");
const rootDirectory = require("../utils/pathCreate");

const router = express.Router();

const products = [];

router.get("/add-product", (req, res, next) => {
  res.render("add-products", {
    docTitle: "Add Product",
    activeAddProduct: true,
    productCSS: true,
  });
});

router.post("/add-product", (req, res) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

module.exports = { router, products };
