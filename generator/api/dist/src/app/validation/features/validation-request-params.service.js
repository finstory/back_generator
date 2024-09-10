"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
const wordsManager_1 = require("../../../_common/helpers/wordsManager");
const _services_injector_1 = require("../../../_common/config/services/service-injector.ts");
const promiseWrapper_1 = __importDefault(require("../../../_common/helpers/promiseWrapper"));
const uuid_1 = require("uuid");
const _envs_1 = __importDefault(require("../../../_common/config/plugins/env/env-var.plugin.ts"));
const appPath = _envs_1.default.APP_PATH;
class ValidationRequestParamsService extends _services_injector_1.Injectable {
    constructor() {
        super(...arguments);
        this.getAllProperties = (moduleName, controllerName, from) => __awaiter(this, void 0, void 0, function* () {
            const result = [];
            const className = (0, wordsManager_1.underscoreToClassName)(from);
            const hyphenControllerName = (0, wordsManager_1.upperCaseToHyphen)(controllerName);
            const filePath = `${appPath}/${moduleName}/_validations/${hyphenControllerName}.validate.ts`;
            const textCode = yield this._fs_file.getFile(filePath);
            const requestParamsList = yield this._ast_class.getAllProperties(textCode, className);
            yield (0, promiseWrapper_1.default)((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                for (let prop of requestParamsList) {
                    result.push({
                        from,
                        id: (0, uuid_1.v4)(),
                        name: prop.name,
                        type: prop.typeStringified,
                        optional: prop.optional,
                        validations: yield this._ast_classDecorator.getDecoratorByProperty(textCode, { className, name: prop.name })
                    });
                }
                resolve();
            }));
            return result;
        });
        this.addProperty = (moduleName_1, controllerName_1, _a) => __awaiter(this, [moduleName_1, controllerName_1, _a], void 0, function* (moduleName, controllerName, { from, name, type }) {
            const hyphenControllerName = (0, wordsManager_1.upperCaseToHyphen)(controllerName);
            const className = (0, wordsManager_1.hyphenToClassName)(from);
            const filePath = `${appPath}/${moduleName}/_validations/${hyphenControllerName}.validate.ts`;
            yield this._fs_file.updateFile(filePath, (textCode) => __awaiter(this, void 0, void 0, function* () {
                textCode = yield this._ast_class.addProperty(textCode, { className, name, typeStringified: type });
                return textCode;
            }));
            (0, wordsManager_1.printInfo)("VALIDATION", `Validation model added to '${(0, wordsManager_1.UpFirst)(from)}' : '${name}' in ${controllerName}.validate.ts  successfully.`);
        });
        this.createUser = () => __awaiter(this, void 0, void 0, function* () {
        });
        this.addValidation = (moduleName_1, controllerName_1, _a, _b) => __awaiter(this, [moduleName_1, controllerName_1, _a, _b], void 0, function* (moduleName, controllerName, { from, name, type }, { decoratorName, decoratorType, decoratorArguments }) {
            const hyphenControllerName = (0, wordsManager_1.upperCaseToHyphen)(controllerName);
            const className = (0, wordsManager_1.hyphenToClassName)(from);
            const filePath = `${appPath}/${moduleName}/_validations/${hyphenControllerName}.validate.ts`;
            yield this._fs_file.updateFile(filePath, (textCode) => __awaiter(this, void 0, void 0, function* () {
                textCode = yield this._ast_classDecorator.addDecoratorToProperty(textCode, { className, name, typeStringified: type }, { decoratorName, decoratorType, decoratorArguments });
                return textCode;
            }));
            (0, wordsManager_1.printInfo)("VALIDATION", `Validation model added to '${(0, wordsManager_1.UpFirst)(from)}' : '${name}' in ${controllerName}.validate.ts  successfully.`);
        });
    }
}
__decorate([
    _services_injector_1.Inject,
    __metadata("design:type", Object)
], ValidationRequestParamsService.prototype, "_fs_file", void 0);
__decorate([
    _services_injector_1.Inject,
    __metadata("design:type", Object)
], ValidationRequestParamsService.prototype, "_ast_classDecorator", void 0);
__decorate([
    _services_injector_1.Inject,
    __metadata("design:type", Object)
], ValidationRequestParamsService.prototype, "_ast_class", void 0);
exports.default = ValidationRequestParamsService;
