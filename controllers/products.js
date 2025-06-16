const products = [];

const getAddProductPage = (req, res, next) => {
  res.render("add-products", {
    docTitle: "Add Product",
    activeAddProduct: true,
    productCSS: true,
    path: "/admin/add-product",
  });
};

const getAddedProducts = (req, res, next) => {
  res.render("shop", {
    prods: products,
    docTitle: "Shop",
    hasProducts: products.length,
    activeShop: true,
    productCSS: true,
    path: "/",
  });
};

const postAddproduct = (req, res) => {
  products.push({ title: req.body.title });
  res.redirect("/");
};

module.exports = {
  getAddProductPage,
  postAddproduct,
  getAddedProducts,
};
