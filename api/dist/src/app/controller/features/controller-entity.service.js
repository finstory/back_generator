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
Object.defineProperty(exports, "__esModule", { value: true });
const wordsManager_1 = require("../../../_common/helpers/wordsManager");
const controller_mockup_1 = require("../../../_common/mockups/controller.mockup");
const _services_injector_1 = require("../../../_common/config/services/service-injector.js");
const appPath = "D:/Programacion_Extra/Node_ts/_generator/_ts/src/test/folder-tester/app";
class ControllerEntityService extends _services_injector_1.Injectable {
    constructor() {
        super(...arguments);
        this.createControllerEntity = (moduleName, controllerName) => __awaiter(this, void 0, void 0, function* () {
            const filePath = `${appPath}/${moduleName}/_entities/${moduleName}-controller.entity.ts`;
            const textCode = (0, controller_mockup_1.controller_model)(controllerName);
            yield this._generator_tag.addCodeAfterTag(filePath, "<CONTROLLERS>", textCode);
            (0, wordsManager_1.printInfo)("CONTROLLER", `Controller entity ${controllerName} added successfully.`);
        });
        this.removeControllerEntity = (moduleName, controllerName) => __awaiter(this, void 0, void 0, function* () {
            const filePath = `${appPath}/${moduleName}/_entities/${moduleName}-controller.entity.ts`;
            yield this._fs_file.updateFile(filePath, (textCode) => __awaiter(this, void 0, void 0, function* () {
                return yield this._ast_class.removeProperty(textCode, { className: `${(0, wordsManager_1.UpFirst)(moduleName)}Controller`, propName: controllerName, comment: "<CONTROLLERS>" });
            }));
            (0, wordsManager_1.printInfo)("CONTROLLER", `Controller entity ${controllerName} removed successfully.`);
        });
        this.editControllerEntity = (moduleName, controllerName, newControllerName) => __awaiter(this, void 0, void 0, function* () {
            const filePath = `${appPath}/${moduleName}/_entities/${moduleName}-controller.entity.ts`;
            yield this._fs_file.updateFile(filePath, (textCode) => __awaiter(this, void 0, void 0, function* () {
                textCode = textCode.replace(new RegExp(controllerName, "g"), newControllerName);
                return textCode;
            }));
            (0, wordsManager_1.printInfo)("CONTROLLER", `Controller entity edited successfully.`);
        });
    }
}
__decorate([
    _services_injector_1.Inject,
    __metadata("design:type", Object)
], ControllerEntityService.prototype, "_fs_file", void 0);
__decorate([
    _services_injector_1.Inject,
    __metadata("design:type", Object)
], ControllerEntityService.prototype, "_ast_class", void 0);
__decorate([
    _services_injector_1.Inject,
    __metadata("design:type", Object)
], ControllerEntityService.prototype, "_generator_tag", void 0);
exports.default = ControllerEntityService;
