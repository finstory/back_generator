"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareObjects = compareObjects;
exports.compareAstCode = compareAstCode;
function compareObjects(objB, objA, path = []) {
    const results = [];
    const keys = new Set([...Object.keys(objA), ...Object.keys(objB)]);
    keys.forEach((key) => {
        const valueA = objA[key];
        const valueB = objB[key];
        const currentPath = [...path, key];
        if (typeof valueA === 'object' && valueA !== null && typeof valueB === 'object' && valueB !== null) {
            // Recursive comparison for nested objects
            results.push(...compareObjects(valueA, valueB, currentPath));
        }
        else {
            // Direct comparison for primitive values
            results.push({
                origin: currentPath,
                equal: valueA === valueB
            });
        }
    });
    return results;
}
function compareAstCode(jsonAstCodeA, jsonAstCodeB) {
    const comparisonResult = compareObjects(jsonAstCodeA, jsonAstCodeB);
    const checkAll = comparisonResult.every((result) => result.equal);
    return { comparisonResult, checkAll };
}
