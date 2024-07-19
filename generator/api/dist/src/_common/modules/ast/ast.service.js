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
const _services_injector_1 = require("../../config/services/service-injector.js");
const ast_comment_service_1 = __importDefault(require("./features/ast-comment.service"));
const ast_import_service_1 = __importDefault(require("./features/ast-import.service"));
const ast_router_function_service_1 = __importDefault(require("./features/ast-router-function.service"));
const ast_compiler_function_service_1 = __importDefault(require("./features/ast-compiler-function.service"));
const ast_class_service_1 = __importDefault(require("./features/ast-class.service"));
let Ast = class Ast {
};
__decorate([
    _services_injector_1.Auto,
    __metadata("design:type", ast_comment_service_1.default)
], Ast.prototype, "comment", void 0);
__decorate([
    _services_injector_1.Auto,
    __metadata("design:type", ast_import_service_1.default)
], Ast.prototype, "import", void 0);
__decorate([
    _services_injector_1.Auto,
    __metadata("design:type", ast_compiler_function_service_1.default)
], Ast.prototype, "compilerFunction", void 0);
__decorate([
    _services_injector_1.Auto,
    __metadata("design:type", ast_router_function_service_1.default)
], Ast.prototype, "routeFunction", void 0);
__decorate([
    _services_injector_1.Auto,
    __metadata("design:type", ast_class_service_1.default)
], Ast.prototype, "class", void 0);
Ast = __decorate([
    _services_injector_1.AutoInstance
], Ast);
exports.default = Ast;
