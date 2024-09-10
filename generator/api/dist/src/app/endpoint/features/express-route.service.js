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
const _services_injector_1 = require("../../../_common/config/services/service-injector.ts");
const _throw_error_1 = __importDefault(require("../../../_common/config/errors/throw-error.ts"));
const _mockups_1 = require("../../../_common/mockups/_index.ts");
const wordsManager_1 = require("../../../_common/helpers/wordsManager");
const _envs_1 = __importDefault(require("../../../_common/config/plugins/env/env-var.plugin.ts"));
const appPath = _envs_1.default.APP_PATH;
class ExpressRouteService extends _services_injector_1.Injectable {
    constructor() {
        super(...arguments);
        this.updateControllerImport = (moduleName, features) => __awaiter(this, void 0, void 0, function* () {
            const endpointPath = `${appPath}/${moduleName}/_routes/${moduleName}.route.ts`;
            yield this._fs_file.updateFile(endpointPath, (textCode) => __awaiter(this, void 0, void 0, function* () {
                return yield this._ast_import.editImport(textCode, "controller", "controller", `../${moduleName}.controller`);
            }));
            (0, wordsManager_1.printInfo)("ROUTE", `Updated import to module '${moduleName}'.`);
        });
        this.createRoute = (moduleName, route) => __awaiter(this, void 0, void 0, function* () {
            const { endpointName, requestType, controllerName } = route;
            const endpointPath = `${appPath}/${moduleName}/_routes/${moduleName}.route.ts`;
            const textCode = (0, _mockups_1.express_endpoint)(endpointName, requestType, controllerName);
            yield this._generator_tag.addCodeAfterTag(endpointPath, "<ROUTES>", textCode);
            (0, wordsManager_1.printInfo)("ROUTE", "Endpoint added successfully.");
        });
        this.editRoute = (moduleName, route, newRoute) => __awaiter(this, void 0, void 0, function* () {
            let { endpointName, requestType } = route;
            const filePath = `${appPath}/${moduleName}/_routes/${moduleName}.route.ts`;
            let message = `to endpoint '${endpointName}' successfully.`;
            !endpointName || !requestType && (0, _throw_error_1.default)("ENDPOINT", "bad_request", "endpoint or requestType");
            yield this._fs_file.updateFile(filePath, (textCode) => __awaiter(this, void 0, void 0, function* () {
                if (newRoute.endpointName) {
                    textCode = yield this._ast_routeFunction.renameEndpoint(textCode, { endpointName, requestType }, newRoute.endpointName);
                    endpointName = newRoute.endpointName;
                    message = `endpoint_name | ${message}`;
                }
                if (newRoute.requestType) {
                    textCode = yield this._ast_routeFunction.changeRequestType(textCode, { endpointName, requestType }, newRoute.requestType);
                    requestType = newRoute.requestType;
                    message = `request_type_name | ${message}`;
                }
                if (newRoute.endpointName || newRoute.requestType || newRoute.controllerName) {
                    const newControllerName = newRoute.controllerName || route.controllerName;
                    textCode = yield this._ast_routeFunction.renameController(textCode, { endpointName, requestType }, newControllerName);
                    message = `controller_name | ${message}`;
                }
                if (typeof newRoute.validateActive === "boolean")
                    textCode = yield this._ast_routeFunction.switchValidation(textCode, { endpointName, requestType, validateActive: newRoute.validateActive });
                return textCode;
            }));
            (0, wordsManager_1.printInfo)("ROUTE", `Reissue | ${message} `);
        });
        this.removeRoute = (moduleName, route) => __awaiter(this, void 0, void 0, function* () {
            const { endpointName, requestType } = route;
            const filePath = `${appPath}/${moduleName}/_routes/${moduleName}.route.ts`;
            yield this._fs_file.updateFile(filePath, (textCode) => __awaiter(this, void 0, void 0, function* () {
                textCode = yield this._ast_routeFunction.removeRoute(textCode, { endpointName, requestType });
                return textCode;
            }));
            (0, wordsManager_1.printInfo)("ROUTE", `Endpoint '${endpointName}' removed.`);
        });
    }
}
__decorate([
    _services_injector_1.Inject,
    __metadata("design:type", Object)
], ExpressRouteService.prototype, "_fs_file", void 0);
__decorate([
    _services_injector_1.Inject,
    __metadata("design:type", Object)
], ExpressRouteService.prototype, "_ast_import", void 0);
__decorate([
    _services_injector_1.Inject,
    __metadata("design:type", Object)
], ExpressRouteService.prototype, "_ast_routeFunction", void 0);
__decorate([
    _services_injector_1.Inject,
    __metadata("design:type", Object)
], ExpressRouteService.prototype, "_generator_tag", void 0);
exports.default = ExpressRouteService;
