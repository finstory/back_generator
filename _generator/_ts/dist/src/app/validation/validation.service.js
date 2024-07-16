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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _services_injector_1 = require("../../_common/config/services/service-injector.js");
const validation_model_service_1 = __importDefault(require("./features/validation-model.service"));
let ValidationService = class ValidationService {
};
__decorate([
    _services_injector_1.Initial,
    _services_injector_1.Auto,
    __metadata("design:type", validation_model_service_1.default)
], ValidationService.prototype, "model", void 0);
ValidationService = __decorate([
    _services_injector_1.AutoInstance,
    _services_injector_1.Initialization
], ValidationService);
exports.default = ValidationService;
