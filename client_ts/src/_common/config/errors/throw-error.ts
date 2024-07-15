import envs from '@envs';
import { s } from "@S";
import { printMsg } from "@/_common/helpers/wordsManager";
import responseMockup from "./mockups/_index";
import ErrorResponse from "./models/error-response";
import { ErrorResponseType } from "./interfaces/error-response.interface";
import { ErrorFormat } from "./interfaces/error-format.interface";

const { PRINT_INTERNAL_ERROR } = envs;

const throwError = (serviceType: ServiceType, typeResponse: ErrorResponseType, key: string) => {
    const errorResponse = responseMockup(typeResponse, serviceType, key);

    if (!errorResponse)
        throw new ErrorResponse("internal_server_error", "Internal server error.", 500, customPayload("internal", "Internal server error."));

    else {
        PRINT_INTERNAL_ERROR && printMsg(errorResponse.internalMessage, "error");
        throw new ErrorResponse(typeResponse, errorResponse.message, errorResponse.status, customPayload(key, errorResponse.message));
    }
}

export const simpleThrowError = (typeResponse: ErrorResponseType, key: string) => {
    const errorResponse = responseMockup(typeResponse, "ERROR", key);

    if (!errorResponse)
        throw new ErrorResponse("internal_server_error", "Internal server error.", 500, customPayload("internal", "Internal server error."));

    else {
        printMsg(errorResponse.internalMessage, "error");
        throw new ErrorResponse(typeResponse, errorResponse.message, errorResponse.status, customPayload(key, errorResponse.message));
    }
}

const customPayload = (key?: string, message?: string): ErrorFormat[] => [
    {
        parameter: "internal",
        from: null,
        property: key || "unknown",
        constraints: {
            internal: message || "Unknown error."
        }
    }
];

export default throwError;