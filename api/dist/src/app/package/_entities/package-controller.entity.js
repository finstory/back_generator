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
exports.validation = exports.controller = exports.PackageController = void 0;
//<IMPORTS>
const C = __importStar(require("../_validations/_index"));
const getValidations_1 = __importDefault(require("../../../_common/config/validations/getValidations"));
class PackageController {
    constructor() {
        //<CONTROLLERS>
        this.test = (req, res) => __awaiter(this, void 0, void 0, function* () { });
        this.getAllPackage = (req, res) => __awaiter(this, void 0, void 0, function* () { });
        this.patchPackageRename = (req, res) => __awaiter(this, void 0, void 0, function* () { });
        this.postPackage = (req, res) => __awaiter(this, void 0, void 0, function* () { });
        this.deletePackage = (req, res) => __awaiter(this, void 0, void 0, function* () { });
    }
}
exports.PackageController = PackageController;
//<EXPORTS>
exports.controller = new PackageController();
exports.validation = (0, getValidations_1.default)(PackageController, C);
