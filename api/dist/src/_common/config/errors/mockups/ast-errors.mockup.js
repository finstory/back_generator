"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.astResponseMockup = void 0;
const typesList = [
    "transform_code",
    "parse_code"
];
const astResponseMockup = (type, key) => {
    if (!typesList.includes(type))
        return;
    const errorsResponseList = [
        {
            type: "transform_code",
            status: 409,
            message: `Error to transform code '${key}'.`,
            internalMessage: `[AST] Error to transform code '${key}'.`
        },
        {
            type: "parse_code",
            status: 409,
            message: `Error to parse code '${key}'.`,
            internalMessage: `[AST] Error to parse code '${key}'.`
        }
    ];
    return errorsResponseList.find((error) => error.type === type);
};
exports.astResponseMockup = astResponseMockup;
