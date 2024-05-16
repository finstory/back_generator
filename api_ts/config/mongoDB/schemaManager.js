"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSchema = void 0;
var mongoose_1 = require("mongoose");
var getSchema = function (name, schema) {
    var ModelResult = (0, mongoose_1.model)(name, schema);
    return ModelResult;
};
exports.getSchema = getSchema;
var createSchema = function (name, options, timestamps) {
    var schema = new mongoose_1.Schema(__assign(__assign({}, options), { deleted: { type: Boolean, required: false, default: false }, deletedAt: { type: Date, required: false } }), timestamps);
    return (0, exports.getSchema)(name, schema);
};
exports.default = createSchema;
