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
const _throw_error_1 = __importDefault(require("../../../_common/config/errors/throw-error.ts"));
const validation_mockup_1 = require("../../../_common/mockups/validation.mockup");
const _envs_1 = __importDefault(require("../../../_common/config/plugins/env/env-var.plugin.ts"));
const appPath = _envs_1.default.APP_PATH;
const convertToSnakeCase = (text) => {
    return text.replace(/([A-Z])/g, "-$1").toLowerCase();
};
class ValidateModelService extends _services_injector_1.Injectable {
    constructor() {
        super(...arguments);
        this.addBarrelExport = (moduleName, controllerName) => __awaiter(this, void 0, void 0, function* () {
            const filePath = `${appPath}/${moduleName}/_validations/_index.ts`;
            const textCode = (0, validation_mockup_1.export_validation)(controllerName);
            yield this._generator_tag.addCodeAfterTag(filePath, "<EXPORTS>", textCode);
            (0, wordsManager_1.printInfo)("VALIDATION", `Validation model export '${convertToSnakeCase(controllerName)}' added successfully.`);
        });
        this.removeBarrelExport = (moduleName, controllerName) => __awaiter(this, void 0, void 0, function* () {
            const filePath = `${appPath}/${moduleName}/_validations/_index.ts`;
            yield this._fs_file.updateFile(filePath, (textCode) => __awaiter(this, void 0, void 0, function* () {
                const textCodeLines = textCode.split("\n");
                const newCode = textCodeLines.find(line => line.includes(`${convertToSnakeCase(controllerName)}.validate"`));
                !newCode && (0, _throw_error_1.default)("VALIDATION", "not_found", `model export '${convertToSnakeCase(controllerName)}'`);
                return textCodeLines.filter(line => line !== newCode).join("\n");
            }));
            (0, wordsManager_1.printInfo)("VALIDATION", `Validation model export '${convertToSnakeCase(controllerName)}' removed successfully.`);
        });
        this.renameBarrelExport = (moduleName, controllerName, newControllerName) => __awaiter(this, void 0, void 0, function* () {
            yield this.removeBarrelExport(moduleName, controllerName);
            yield this.addBarrelExport(moduleName, newControllerName);
        });
        this.createFile = (moduleName, controllerName) => __awaiter(this, void 0, void 0, function* () {
            const filePath = `${appPath}/${moduleName}/_validations/${convertToSnakeCase(controllerName)}.validate.ts`;
            const textCode = (0, validation_mockup_1.validation_model)();
            yield this._fs_file.createFile(filePath, textCode);
            (0, wordsManager_1.printInfo)("VALIDATION", `Controller entity '${convertToSnakeCase(controllerName)}' added successfully.`);
        });
        this.renameFile = (moduleName, controllerName, newControllerName) => __awaiter(this, void 0, void 0, function* () {
            const filePath = `${appPath}/${moduleName}/_validations/${convertToSnakeCase(controllerName)}.validate.ts`;
            yield this._fs_file.renameFile(filePath, `${convertToSnakeCase(newControllerName)}.validate.ts`);
            (0, wordsManager_1.printInfo)("VALIDATION", `Controller entity '${convertToSnakeCase(controllerName)}' edited successfully.`);
        });
        this.removeFile = (moduleName, controllerName) => __awaiter(this, void 0, void 0, function* () {
            const filePath = `${appPath}/${moduleName}/_validations/${convertToSnakeCase(controllerName)}.validate.ts`;
            yield this._fs_file.deleteFile(filePath);
            (0, wordsManager_1.printInfo)("VALIDATION", `Controller entity '${convertToSnakeCase(controllerName)}' removed successfully.`);
        });
        // createControllerEntity = async (moduleName: string, controllerName: string) => {
        //     const filePath = `${appPath}/${moduleName}/_entities/${moduleName}-controller.entity.ts`;
        //     const textCode = controller_model(controllerName);
        //     await this._generator_tag.addCodeAfterTag(filePath, "<CONTROLLERS>", textCode);
        //     printInfo("CONTROLLER", `Controller entity ${controllerName} added successfully.`);
        // }
        // removeControllerEntity = async (moduleName: string, controllerName: string) => {
        //     const filePath = `${appPath}/${moduleName}/_entities/${moduleName}-controller.entity.ts`;
        //     await this._fs_file.updateFile(filePath, async (textCode) => {
        //         return await this._ast_class.removeProperty(textCode, { className: `${UpFirst(moduleName)}Controller`, propName: controllerName, comment: "<CONTROLLERS>" })
        //     });
        //     printInfo("CONTROLLER", `Controller entity ${controllerName} removed successfully.`);
        // }
        // editControllerEntity = async (moduleName: string, controllerName: string, newControllerName: string) => {
        //     const filePath = `${appPath}/${moduleName}/_entities/${moduleName}-controller.entity.ts`;
        //     await this._fs_file.updateFile(filePath, async (textCode) => {
        //         textCode = textCode.replace(new RegExp(controllerName, "g"), newControllerName);
        //         return textCode;
        //     });
        //     printInfo("CONTROLLER", `Controller entity edited successfully.`);
        // }
    }
}
__decorate([
    _services_injector_1.Inject,
    __metadata("design:type", Object)
], ValidateModelService.prototype, "_fs_file", void 0);
__decorate([
    _services_injector_1.Inject,
    __metadata("design:type", Object)
], ValidateModelService.prototype, "_generator_tag", void 0);
exports.default = ValidateModelService;
