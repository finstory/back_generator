"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncInitial = void 0;
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("../../routes");
const json_1 = require("../../db/json");
//? Async Initial Methods:
const asyncInitial = () => __awaiter(void 0, void 0, void 0, function* () {
    yield json_1.json_db._initial();
});
exports.asyncInitial = asyncInitial;
//% Initial Methods:
const server = (0, express_1.default)();
server.use((0, cors_1.default)());
server.use(express_1.default.static(path_1.default.join(__dirname, "public")));
// server.name = "API";
server.use(body_parser_1.default.urlencoded({ extended: true, limit: "100mb" }));
server.use(body_parser_1.default.json({ limit: "100mb" }));
server.use((0, cookie_parser_1.default)());
// DEBUG
server.use((0, morgan_1.default)("dev"));
server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PATCH, POST, OPTIONS, PUT, DELETE");
    next();
});
server.use("/", routes_1.routes);
//$ ERROR CATCHING.
server.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});
//$ END.
exports.default = server;
