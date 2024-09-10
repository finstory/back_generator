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
const _mockups_1 = require("../../../_common/mockups/_index.ts");
const _envs_1 = __importDefault(require("../../../_common/config/plugins/env/env-var.plugin.ts"));
const appPath = _envs_1.default.APP_PATH;
class ControllerFileService extends _services_injector_1.Injectable {
    constructor() {
        super(...arguments);
        this.updateControllerImport = (moduleName, newModuleName, features) => __awaiter(this, void 0, void 0, function* () {
            const endpointPath = `${appPath}/${moduleName}/${moduleName}.controller.ts`;
            yield this._fs_file.updateFile(endpointPath, (textCode) => __awaiter(this, void 0, void 0, function* () {
                console.log(yield this._ast_import.editImport(textCode, "controller", "controller", `./_entities/${newModuleName}-controller.entity`));
                return yield this._ast_import.editImport(textCode, "controller", "controller", `./_entities/${newModuleName}-controller.entity`);
            }));
            (0, wordsManager_1.printInfo)("ROUTE", `Updated import for controller to '${moduleName}' module.`);
        });
        this.createController = (moduleName, controllerName) => __awaiter(this, void 0, void 0, function* () {
            const filePath = `${appPath}/${moduleName}/${moduleName}.controller.ts`;
            const textCode = (0, _mockups_1.controller)(controllerName);
            yield this._generator_tag.addCodeAfterTag(filePath, "<CONTROLLERS>", textCode);
            (0, wordsManager_1.printInfo)("CONTROLLER", `Controller added successfully.`);
        });
        this.renameController = (moduleName, controllerName, newControllerName) => __awaiter(this, void 0, void 0, function* () {
            const filePath = `${appPath}/${moduleName}/${moduleName}.controller.ts`;
            yield this._fs_file.updateFile(filePath, (textCode) => __awaiter(this, void 0, void 0, function* () {
                return yield this._ast_compilerFunction.renameProperty(textCode, { compilerName: "controller", propName: controllerName }, newControllerName);
            }));
            (0, wordsManager_1.printInfo)("CONTROLLER", `Renaming '${controllerName}' controller.`);
        });
        this.removeController = (moduleName, controllerName) => __awaiter(this, void 0, void 0, function* () {
            const filePath = `${appPath}/${moduleName}/${moduleName}.controller.ts`;
            yield this._fs_file.updateFile(filePath, (textCode) => __awaiter(this, void 0, void 0, function* () {
                return yield this._ast_compilerFunction.removeProperty(textCode, { compilerName: "controller", propName: controllerName });
            }));
            (0, wordsManager_1.printInfo)("CONTROLLER", `Controller removed successfully.`);
        });
        this.getPositionController = (moduleName, controllerName) => __awaiter(this, void 0, void 0, function* () {
            const filePath = `${appPath}/${moduleName}/${moduleName}.controller.ts`;
            const textCode = yield this._fs_file.getFile(filePath);
            const pos = this._ast_compilerFunction.getPosProperty(textCode, { compilerName: "controller", propName: controllerName });
            (0, wordsManager_1.printInfo)("CONTROLLER", `Position obtained for controller: '${controllerName}' successfully.`);
            return pos;
        });
    }
}
__decorate([
    _services_injector_1.Inject,
    __metadata("design:type", Object)
], ControllerFileService.prototype, "_fs_file", void 0);
__decorate([
    _services_injector_1.Inject,
    __metadata("design:type", Object)
], ControllerFileService.prototype, "_ast_compilerFunction", void 0);
__decorate([
    _services_injector_1.Inject,
    __metadata("design:type", Object)
], ControllerFileService.prototype, "_generator_tag", void 0);
__decorate([
    _services_injector_1.Inject,
    __metadata("design:type", Object)
], ControllerFileService.prototype, "_ast_import", void 0);
exports.default = ControllerFileService;
