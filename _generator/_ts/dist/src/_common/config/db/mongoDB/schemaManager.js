"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSchema = void 0;
const mongoose_1 = require("mongoose");
const getSchema = (name, schema) => {
    let ModelResult = (0, mongoose_1.model)(name, schema);
    return ModelResult;
};
exports.getSchema = getSchema;
const createSchema = (name, options, timestamps) => {
    const schema = new mongoose_1.Schema(Object.assign(Object.assign({}, options), { deleted: { type: Boolean, required: false, default: false }, deletedAt: { type: Date, required: false } }), timestamps);
    return (0, exports.getSchema)(name, schema);
};
exports.default = createSchema;
