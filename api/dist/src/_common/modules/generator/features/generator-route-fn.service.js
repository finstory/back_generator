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
const _services_injector_1 = require("../../../config/services/service-injector.js");
const _throw_error_1 = __importDefault(require("../../../config/errors/throw-error.js"));
const wordsManager_1 = require("../../../helpers/wordsManager");
class GeneratorRouteFn extends _services_injector_1.Injector {
    constructor() {
        super(...arguments);
        this.test = () => __awaiter(this, void 0, void 0, function* () {
            console.log(this._ast_route_function);
            console.log(this._fs_file);
        });
        this.edit = (filePath_1, _a, _b) => __awaiter(this, [filePath_1, _a, _b], void 0, function* (filePath, { endpointName, requestType, validateActive }, { newEndpoint, newRequestType, newController }) {
            console.log("ok");
            !endpointName || !requestType && (0, _throw_error_1.default)("GENERATOR", "bad_request", "endpoint or requestType");
            const textCode = yield this._fs_file.getFile(filePath);
            let newTextCode;
            if (newEndpoint) {
                newTextCode = yield this._ast_route_function.renameEndpoint(textCode, { endpointName, requestType }, newEndpoint);
            }
            if (newRequestType) {
                newTextCode = yield this._ast_route_function.changeRequestType(textCode, { endpointName, requestType }, newRequestType);
            }
            if (newController) {
                !newController && (0, _throw_error_1.default)("GENERATOR", "bad_request", "newController");
                newTextCode = yield this._ast_route_function.renameController(textCode, { endpointName, requestType }, newController);
            }
            newTextCode = yield this._ast_route_function.switchValidation(textCode, { endpointName, requestType, validateActive });
            yield this._fs_file.createFile(filePath, newTextCode);
        });
        this.remove = (filePath_1, _a) => __awaiter(this, [filePath_1, _a], void 0, function* (filePath, { endpointName, requestType }) {
            let textCode = yield this._fs_file.getFile(filePath);
            const newTextCode = yield this._ast_route_function.removeRoute(textCode, { endpointName, requestType });
            yield this._fs_file.createFile(filePath, newTextCode);
            (0, wordsManager_1.printInfo)("GENERATOR", "Route removed successfully.");
        });
    }
}
exports.default = GeneratorRouteFn;
