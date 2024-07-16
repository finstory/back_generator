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
const _services_injector_1 = require("../../_common/config/services/service-injector.js");
const json_1 = require("../../_common/db/json");
const _mockups_1 = require("../../_common/mockups/_index.js");
const wordsManager_1 = require("../../_common/helpers/wordsManager");
const appPath = "D:/Programacion_Extra/Node_ts/_generator/_ts/src/test/folder-tester/app";
class PackageService extends _services_injector_1.BasicInjectable {
    constructor() {
        super(...arguments);
        this.getAllModuleDB = () => __awaiter(this, void 0, void 0, function* () {
            (0, wordsManager_1.printInfo)("JSON_DB", "Getting all modules from the database.");
            return yield json_1.json_db.module.getAll();
        });
        this.createModule = (moduleName_1, ...args_1) => __awaiter(this, [moduleName_1, ...args_1], void 0, function* (moduleName, moduleCommon = false) {
            let folderPath;
            yield json_1.json_db.module.create(moduleName);
            if (!moduleCommon) {
                folderPath = `${appPath}/${moduleName}`;
                //% Creation of the folders
                const foldersList = [
                    folderPath,
                    `${folderPath}/_dtos`,
                    `${folderPath}/_entities`,
                    `${folderPath}/_routes`,
                    `${folderPath}/_utils`,
                    `${folderPath}/_validations`,
                    `${folderPath}/features`
                ];
                yield this._fs_folder.createFoldersList(foldersList);
                //% Creation of the files
                const filesList = [
                    {
                        path: `${folderPath}/_entities/${moduleName}-controller.entity.ts`,
                        code: (0, _mockups_1.controller_entity)(moduleName)
                    },
                    {
                        path: `${folderPath}/${moduleName}.controller.ts`,
                        code: (0, _mockups_1.module_controller)(moduleName)
                    },
                    {
                        path: `${folderPath}/_validations/_index.ts`,
                        code: (0, _mockups_1.validation_barrel)(),
                    },
                    {
                        path: `${folderPath}/${moduleName}.service.ts`,
                        code: (0, _mockups_1.module_service)(moduleName)
                    },
                    {
                        path: `${folderPath}/_routes/${moduleName}.route.ts`,
                        code: (0, _mockups_1.module_route)(moduleName)
                    }
                ];
                yield this._fs_file.createFilesList(filesList);
            }
            else {
                folderPath = `${appPath}/${moduleName}`;
                //% Creation of the folders
                const foldersList = [
                    folderPath,
                    `${folderPath}/_utils`,
                    `${folderPath}/features`
                ];
                yield this._fs_folder.createFoldersList(foldersList);
                //% Creation of the files
                const filesList = [{
                        path: `${folderPath}/${moduleName}.service.ts`,
                        code: (0, _mockups_1.module_service)(moduleName)
                    }];
                yield this._fs_file.createFilesList(filesList);
            }
            return `Module '${moduleName}' created successfully.`;
        });
        this.deleteModule = (moduleName) => __awaiter(this, void 0, void 0, function* () {
            yield json_1.json_db.module.delete(moduleName);
            const folderPath = `${appPath}/${moduleName}`;
            yield this._fs_folder.deleteFolder(folderPath);
            (0, wordsManager_1.printInfo)("PACKAGE", `Module '${moduleName}' deleted successfully.`);
        });
    }
}
__decorate([
    _services_injector_1.BasicInject,
    __metadata("design:type", Object)
], PackageService.prototype, "_fs_folder", void 0);
__decorate([
    _services_injector_1.BasicInject,
    __metadata("design:type", Object)
], PackageService.prototype, "_fs_file", void 0);
exports.default = PackageService;
