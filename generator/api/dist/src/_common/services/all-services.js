"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllServices = void 0;
const initial_services_1 = __importDefault(require("../config/services/initial-services"));
const generator_service_1 = __importDefault(require("../modules/generator/generator.service"));
const fs_service_1 = __importDefault(require("../modules/fs/fs.service"));
const ast_service_1 = __importDefault(require("../modules/ast/ast.service"));
const endpoint_service_1 = __importDefault(require("../../app/endpoint/endpoint.service"));
const package_service_1 = __importDefault(require("../../app/package/package.service"));
const controller_service_1 = __importDefault(require("../../app/controller/controller.service"));
const validation_service_1 = __importDefault(require("../../app/validation/validation.service"));
let AllServices = class AllServices {
    constructor() {
        this.generator = new generator_service_1.default();
        this.fs = new fs_service_1.default();
        this.ast = new ast_service_1.default();
        this.package = new package_service_1.default();
        this.validation = new validation_service_1.default();
        this.endpoint = new endpoint_service_1.default();
        this.controller = new controller_service_1.default();
    }
};
exports.AllServices = AllServices;
exports.AllServices = AllServices = __decorate([
    initial_services_1.default
], AllServices);
const S = new AllServices();
exports.default = S;
