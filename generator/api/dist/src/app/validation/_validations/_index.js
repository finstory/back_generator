"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postValidationRequestParams = exports.deleteValidationRequestParams = exports.patchValidationRequestParams = exports.postValidationValidateParams = exports.patchValidationValidateParams = exports.deleteValidationValidateParams = exports.patchValidationReload = void 0;
//<EXPORTS>
exports.patchValidationReload = __importStar(require("./patch-validation-reload.validate"));
exports.deleteValidationValidateParams = __importStar(require("./delete-validation-validate-params.validate"));
exports.patchValidationValidateParams = __importStar(require("./patch-validation-validate-params.validate"));
exports.postValidationValidateParams = __importStar(require("./post-validation-validate-params.validate"));
exports.patchValidationRequestParams = __importStar(require("./patch-validation-request-params.validate"));
exports.deleteValidationRequestParams = __importStar(require("./delete-validation-request-params.validate"));
exports.postValidationRequestParams = __importStar(require("./post-validation-request-params.validate"));
exports.default = {};
