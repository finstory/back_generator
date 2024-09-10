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
exports.getRoutes = exports.ranPosition = exports.SDok230_230 = exports.check = void 0;
const axios_1 = __importDefault(require("axios"));
const _envs_1 = __importDefault(require("../plugins/env/env-var.plugin.ts"));
const check = () => __awaiter(void 0, void 0, void 0, function* () {
    const url = _envs_1.default.URL_CHECK;
    const queryParams = {
        token: _envs_1.default.ADMIN_TOKEN_KEY,
    };
    try {
        const response = yield axios_1.default.get(url, { params: queryParams });
        // console.log(response.data);
    }
    catch (error) {
        throw new Error(error.data);
    }
});
exports.check = check;
const SDok230_230 = () => __awaiter(void 0, void 0, void 0, function* () {
    const url = _envs_1.default.URL_CHECK;
    const queryParams = {
        token: _envs_1.default.ADMIN_TOKEN_KEY,
    };
    try {
        const response = yield axios_1.default.get(url, { params: queryParams });
    }
    catch (error) {
        throw new Error(error.data);
    }
});
exports.SDok230_230 = SDok230_230;
const ranPosition = () => __awaiter(void 0, void 0, void 0, function* () {
    const url = _envs_1.default.URL_CHECK;
    const queryParams = {
        token: _envs_1.default.ADMIN_TOKEN_KEY,
    };
    try {
        const response = yield axios_1.default.get(url, { params: queryParams });
    }
    catch (error) {
        throw new Error(error.data);
    }
});
exports.ranPosition = ranPosition;
const getRoutes = () => __awaiter(void 0, void 0, void 0, function* () { (0, exports.check)(); });
exports.getRoutes = getRoutes;
