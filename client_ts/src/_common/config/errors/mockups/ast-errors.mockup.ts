import { PreviewErrorResponse } from "../interfaces/error-format.interface";
import { ErrorResponseType } from "../interfaces/error-response.interface";

const typesList = [
    "transform_code",
    "parse_code"
];

export const astResponseMockup = (type: ErrorResponseType, key: string): PreviewErrorResponse => {
    if (!typesList.includes(type)) return;

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
    ]

    return errorsResponseList.find((error) => error.type === type);
}