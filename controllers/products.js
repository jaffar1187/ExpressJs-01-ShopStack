const ProductModel = require("../models/ProductModel");

const getAddProductPage = (req, res, next) => {
  res.render("add-products", {
    docTitle: "Add Product",
    activeAddProduct: true,
    productCSS: true,
    path: "/admin/add-product",
  });
};

const fetchProducts = (req, res, next) => {
  const products = ProductModel.fetchAll();

  res.render("shop", {
    prods: products,
    docTitle: "Shop",
    hasProducts: products.length,
    activeShop: true,
    productCSS: true,
    path: "/",
  });
};

const postAddproduct = async (req, res) => {
  const product = new ProductModel(req.body.title);
  await product.save();
  res.redirect("/");
};

module.exports = {
  getAddProductPage,
  postAddproduct,
  fetchProducts,
};
