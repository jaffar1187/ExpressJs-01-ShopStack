const express = require("express");

const router = express.Router();

router.use("/", (req, res, next) => {
  res.render("404", { docTitle: "Page Not Found" });
});

module.exports = router;
