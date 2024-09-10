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
const _services_injector_1 = require("../../config/services/service-injector.ts");
const generator_fn_service_1 = __importDefault(require("./features/generator-fn.service"));
const generator_import_service_1 = __importDefault(require("./features/generator-import.service"));
const generator_tag_service_1 = __importDefault(require("./features/generator-tag.service"));
const generator_route_fn_service_1 = __importDefault(require("./features/generator-route-fn.service"));
const generator_wrapper_service_1 = __importDefault(require("./features/generator-wrapper.service"));
let GeneratorService = class GeneratorService {
};
__decorate([
    _services_injector_1.Auto,
    _services_injector_1.Initial,
    __metadata("design:type", generator_tag_service_1.default)
], GeneratorService.prototype, "tag", void 0);
__decorate([
    _services_injector_1.Auto,
    __metadata("design:type", generator_fn_service_1.default)
], GeneratorService.prototype, "function", void 0);
__decorate([
    _services_injector_1.Auto,
    __metadata("design:type", generator_import_service_1.default)
], GeneratorService.prototype, "import", void 0);
__decorate([
    _services_injector_1.Auto,
    __metadata("design:type", generator_route_fn_service_1.default)
], GeneratorService.prototype, "routeFunction", void 0);
__decorate([
    _services_injector_1.Auto,
    __metadata("design:type", generator_wrapper_service_1.default)
], GeneratorService.prototype, "wrapper", void 0);
GeneratorService = __decorate([
    _services_injector_1.AutoInstance,
    _services_injector_1.Initialization
], GeneratorService);
exports.default = GeneratorService;
