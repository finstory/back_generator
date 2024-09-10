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
const lowdb_1 = __importDefault(require("lowdb"));
const FileAsync_1 = __importDefault(require("lowdb/adapters/FileAsync"));
const _envs_1 = __importDefault(require("../../../config/plugins/env/env-var.plugin.ts"));
const defaultSchema = { module: [] };
class JsonDBConfig {
    initializeDB() {
        return __awaiter(this, void 0, void 0, function* () {
            const filePath = _envs_1.default.JSON_DB_PATH;
            const adapter = new FileAsync_1.default(filePath);
            yield (0, lowdb_1.default)(adapter)
                .then((db) => {
                this.db = db;
            });
            yield this.db.defaults(defaultSchema).write();
        });
    }
}
exports.default = JsonDBConfig;
