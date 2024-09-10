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
const wordsManager_1 = require("../../../helpers/wordsManager");
const _throw_error_1 = __importDefault(require("../../../config/errors/throw-error.ts"));
class ModuleService {
    constructor(db) {
        this.readDB = () => __awaiter(this, void 0, void 0, function* () {
            return yield this.db.read();
        });
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            yield this.db.read();
            return this.db.get('module').value();
        });
        this.create = (name) => __awaiter(this, void 0, void 0, function* () {
            yield this.db.read();
            const moduleExists = this.db.get('module').find({ name }).value();
            if (moduleExists)
                (0, _throw_error_1.default)("JSON_DB", "already_exists", `Module '${name}'`);
            else
                yield this.db.get('module')
                    .push({ name, routes: [] })
                    .write()
                    .then(() => {
                    (0, wordsManager_1.printInfo)("JSON_DB", `Module '${name}' created successfully.`);
                });
        });
        this.rename = (oldName, newName) => __awaiter(this, void 0, void 0, function* () {
            yield this.db.read();
            yield this.db.get('module')
                .find({ name: oldName })
                .tap((module) => { if (!module)
                (0, _throw_error_1.default)("JSON_DB", "not_found", `Module '${oldName}'`); })
                .assign({ name: newName })
                .write()
                .then(() => {
                (0, wordsManager_1.printInfo)("JSON_DB", `Module '${oldName}' updated to ${newName} successfully.`);
            });
        });
        this.delete = (name) => __awaiter(this, void 0, void 0, function* () {
            yield this.db.read();
            const moduleGetting = !this.db.get('module').find({ name }).value();
            if (moduleGetting)
                (0, _throw_error_1.default)("JSON_DB", "not_found", `Module ${name}`);
            else
                yield this.db.get('module')
                    .remove({ name })
                    .write()
                    .then(() => {
                    (0, wordsManager_1.printInfo)("JSON_DB", `Module '${name}' deleted successfully.`);
                });
        });
        this.db = db;
    }
}
exports.default = ModuleService;
