const express = require("express");
const router = express.Router();
const { getAddedProducts } = require("./../controllers/products");

router.get("/", getAddedProducts);

module.exports = router;
