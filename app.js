const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const hbs = require("hbs");
const rootDirectory = require("./utils/pathCreate");

const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");
const router404 = require("./routes/404");

//Body parser
app.use(bodyParser.urlencoded({ extended: false }));

//Serve Static CSS files
app.use(express.static(path.join(rootDirectory, "public")));

//Template Engine
// Pug
// app.set("view engine", "pug");
// app.set("views", path.join(rootDirectory, "views"));

// HandleBars
// app.set("view engine", "hbs");
// app.set("views", path.join(rootDirectory, "views", "hbs"));
// hbs.registerPartials(path.join(rootDirectory, "views", "partials"));

//EJS
app.set("view engine", "ejs");
app.set("views", path.join(rootDirectory, "views", "ejs"));

//Routes
app.get("/favicon.ico", (req, res) => res.status(204).end());
app.use("/admin", adminRouter);
app.use(shopRouter); // --> / or without / this works

//404 Page
app.use("/", router404); // /ddddd

app.listen(3000);
