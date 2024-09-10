"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ast_errors_mockup_1 = require("./ast-errors.mockup");
const fs_errors_mockup_1 = require("./fs-errors.mockup");
const standard_errors_mockup_1 = require("./standard-errors.mockup");
const responseMockup = (type, serviceType, key) => {
    let errorResponse;
    errorResponse || (errorResponse = (0, standard_errors_mockup_1.standardResponseMockup)(type, serviceType, key));
    errorResponse || (errorResponse = (0, fs_errors_mockup_1.fsResponseMockup)(type, key));
    errorResponse || (errorResponse = (0, ast_errors_mockup_1.astResponseMockup)(type, key));
    return errorResponse;
};
exports.default = responseMockup;
