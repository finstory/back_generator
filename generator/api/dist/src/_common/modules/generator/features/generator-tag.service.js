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
const _services_injector_1 = require("../../../config/services/service-injector.ts");
const code_edition_util_1 = require("../_utils/code-edition.util");
const transform_util_1 = require("../../ast/_utils/transform.util");
const wordsManager_1 = require("../../../helpers/wordsManager");
class GeneratorTagService extends _services_injector_1.Injectable {
    constructor() {
        super(...arguments);
        this.addCodeAfterTag = (filePath_1, tagName_1, codeToAdd_1, ...args_1) => __awaiter(this, [filePath_1, tagName_1, codeToAdd_1, ...args_1], void 0, function* (filePath, tagName, codeToAdd, addSpace = false) {
            let textCode = yield this._fs_file.getFile(filePath);
            const pos = this._ast_comment.getPosComment(textCode, tagName);
            textCode = (0, code_edition_util_1.insertCodeAfterPosition)(textCode, codeToAdd, pos, addSpace);
            yield this._fs_file.createFile(filePath, yield (0, transform_util_1.formatCode)(textCode));
            (0, wordsManager_1.printInfo)("GENERATOR", `Code added after tag '${tagName}'.`);
        });
    }
}
__decorate([
    _services_injector_1.Inject,
    __metadata("design:type", Object)
], GeneratorTagService.prototype, "_fs_file", void 0);
__decorate([
    _services_injector_1.Inject,
    __metadata("design:type", Object)
], GeneratorTagService.prototype, "_ast_comment", void 0);
exports.default = GeneratorTagService;
