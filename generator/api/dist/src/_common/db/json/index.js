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
exports.json_db = exports.MainDB = void 0;
const db_connection_1 = __importDefault(require("./connection/db.connection"));
const module_service_1 = __importDefault(require("./services/module.service"));
const request_params_service_1 = __importDefault(require("./services/request-params.service"));
const route_service_1 = __importDefault(require("./services/route.service"));
class MainDB extends db_connection_1.default {
    _initial() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.initializeDB();
            this.requestParams = new request_params_service_1.default(this.db);
            this.module = new module_service_1.default(this.db);
            this.route = new route_service_1.default(this.db);
        });
    }
}
exports.MainDB = MainDB;
exports.json_db = new MainDB();
exports.default = { moduleDB: exports.json_db.module, routeDB: exports.json_db.route };
