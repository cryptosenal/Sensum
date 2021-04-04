const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const axios = require("axios");
const path = require("path");
const routes = require("./routes");

//* Setting App

app.set("port", process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, "public")));

//* Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

//* Routes
app.use(routes);

//* manage all errors
app.use((req, res, next) => {
  res.status(404).send("Unable to find the requested resource!");
});

module.exports = app;
