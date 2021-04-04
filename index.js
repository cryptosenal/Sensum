//en este inicias express y configuras los set por ejemplo app.set(...)
const express = require('express');
const app = express();
const axios = require("axios");
const path = require("path");
const router = express.Router();
const port = 3000;
//const router = express.Router();

//Aquí haces el llamado a tu custom module de rutas por ejemplo.
var xrouter = require('./module-router.js');
  app.get('*', function (req, res) {
   xrouter.routeo(req, res);
});

app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
