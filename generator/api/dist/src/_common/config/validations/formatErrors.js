"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = require("validator");
function formatErrors(errors, parameter) {
    const result = [];
    function traverse(errors, path = []) {
        errors.forEach(error => {
            const currentPath = [...path];
            if (error.constraints) {
                result.push({
                    parameter,
                    from: currentPath.length > 0 ? currentPath : null,
                    property: error.property,
                    constraints: error.constraints,
                });
            }
            if (error.children && error.children.length) {
                const errorProperty = (0, validator_1.isNumeric)(error.property) ? Number(error.property) : error.property;
                traverse(error.children, [...currentPath, errorProperty]);
            }
        });
    }
    traverse(errors);
    return result;
}
exports.default = formatErrors;
