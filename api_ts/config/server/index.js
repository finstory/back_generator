"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var body_parser_1 = __importDefault(require("body-parser"));
var morgan_1 = __importDefault(require("morgan"));
var path_1 = __importDefault(require("path"));
var cors_1 = __importDefault(require("cors"));
var index_1 = require("../../src/routes/index");
var pathManager_1 = require("../../src/helpers/pathManager");
//% Initial Methods:
(0, pathManager_1.createAllPaths)();
var server = (0, express_1.default)();
server.use((0, cors_1.default)());
server.use(express_1.default.static(path_1.default.join(__dirname, "public")));
// server.name = "API";
server.use(body_parser_1.default.urlencoded({ extended: true, limit: "1000mb" }));
server.use(body_parser_1.default.json({ limit: "1000mb" }));
server.use((0, cookie_parser_1.default)());
// DEBUG
server.use((0, morgan_1.default)("dev"));
server.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PATCH, POST, OPTIONS, PUT, DELETE");
    next();
});
server.use("/", index_1.routes);
//$ ERROR CATCHING.
server.use(function (err, req, res, next) {
    var status = err.status || 500;
    var message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});
//$ END.
exports.default = server;
