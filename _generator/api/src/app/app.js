const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("../routes/_index.js");
const path = require("path");

//$ LOAD ESSENTIAL METHODS.

//% Load DB.
// require("../helpers/keyPress.js");
const fsServices = require("../newServices/generator/fs.services.js");
const astServices = require("../newServices/generator/ast.services.js");
const generatorServices = require("../newServices/generator/generator.services.js");
const routeServices = require("../newServices/route/route.services.js");
const controllerServices = require("../newServices/controller/controller.services.js");
const interfaceServices = require("../newServices/interface/interface.services.js");
// const S = require("../utils/service/injector.js");
// S.addService("generator", generatorServices);
// S.addService("ast", astServices);

//$ END.

const server = express();
const cors = require("cors");
server.use(cors());

server.use(express.static(path.join(__dirname, "public")));
server.name = "API";

server.use(bodyParser.urlencoded({ extended: true, limit: "1000mb" }));
server.use(bodyParser.json({ limit: "1000mb" }));
server.use(cookieParser());
// DEBUG
server.use(morgan("dev"));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, PATCH, POST, OPTIONS, PUT, DELETE"
  );
  next();
});

server.use("/", routes);

//$ ERROR CATCHING.
server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

//$ END.

module.exports = server;
