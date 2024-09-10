"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const class_transformer_1 = require("class-transformer");
const V = __importStar(require("class-validator"));
const formatErrors_1 = __importDefault(require("./formatErrors"));
const errorResponse_1 = __importDefault(require("./errorResponse"));
const parametersValidator = (req, res, next, parameters) => __awaiter(void 0, void 0, void 0, function* () {
    const { Params, Query, Body } = parameters;
    let myReq;
    const params = new Params();
    const query = new Query();
    const body = new Body();
    Object.assign(params, (0, class_transformer_1.plainToClassFromExist)(Params, req.params));
    Object.assign(query, (0, class_transformer_1.plainToClassFromExist)(Query, req.query));
    Object.assign(body, (0, class_transformer_1.plainToClass)(Body, req.body));
    const checkParams = yield V.validate(params);
    const checkQuery = yield V.validate(query);
    const checkBody = yield V.validate(body);
    Object.assign(params, (0, class_transformer_1.plainToClass)(Params, req.params));
    Object.assign(query, (0, class_transformer_1.plainToClass)(Query, req.query));
    if (checkParams.length > 0 || checkQuery.length > 0 || checkBody.length > 0) {
        const formattedErrors = [
            ...(0, formatErrors_1.default)(checkParams, 'params'),
            ...(0, formatErrors_1.default)(checkQuery, 'query'),
            ...(0, formatErrors_1.default)(checkBody, 'body'),
        ];
        (0, errorResponse_1.default)(res, formattedErrors);
    }
    else {
        console.log('Validation succeeded');
        req.params = params;
        req.query = query;
        req.body = body;
        next();
    }
});
exports.default = parametersValidator;
