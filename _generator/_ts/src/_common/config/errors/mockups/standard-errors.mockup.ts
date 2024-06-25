import { ServiceType } from "@services";
import { PreviewErrorResponse } from "../interfaces/error-format.interface";
import { ErrorResponseType } from "../interfaces/error-response.interface";

const typesList = [
    "bad_request",
    "not_found",
    "unauthorized",
    "forbidden",
    "conflict",
    "already_exists",
    "internal_server_error",
    "not_implemented",
    "service_unavailable",
    "not_allowed",
    "request_timeout",
    "bad_gateway",
    "gateway_timeout"
];

export const standardResponseMockup = (type: ErrorResponseType, serviceType: | "PROMISE", key: string,): PreviewErrorResponse => {
    if (!typesList.includes(type)) return;
    let upperKey: string = key.charAt(0).toUpperCase() + key.slice(1);

    const errorsResponseList = [
        {
            type: "bad_request",
            status: 400,
            message: `Bad request to input '${key}'.`,
            internalMessage: `[${serviceType}] Bad request to input '${key}'.`
        },
        {
            type: "not_found",
            status: 404,
            message: `'${upperKey}' not found.`,
            internalMessage: `[${serviceType}] '${key}' not found.`
        },
        {
            type: "unauthorized",
            status: 401,
            message: `'${upperKey}' is unauthorized.`,
            internalMessage: `[${serviceType}] '${key}' is unauthorized.`
        },
        {
            type: "forbidden",
            status: 403,
            message: `The '${key}' is forbidden.`,
            internalMessage: `[${serviceType}] '${key}' is forbidden.`
        },
        {
            type: "conflict",
            status: 409,
            message: `Conflict in '${key}'.`,
            internalMessage: `[${serviceType}] Conflict in '${key}'.`
        },
        {
            type: "already_exists",
            status: 409,
            message: `'${upperKey}' already exists.`,
            internalMessage: `[${serviceType}] '${key}' already exists.`
        },
        {
            type: "internal_server_error",
            status: 500,
            message: `Internal server error, check '${key}'.`,
            internalMessage: `[${serviceType}] Internal server error, check '${key}'.`
        },
        {
            type: "not_implemented",
            status: 501,
            message: `'${upperKey}' is not Implemented.`,
            internalMessage: `[${serviceType}] '${key}' is not Implemented.`
        },
        {
            type: "service_unavailable",
            status: 503,
            message: `Service unavailable.`,
            internalMessage: `[${serviceType}] Service unavailable.`
        },
        {
            type: "not_allowed",
            status: 405,
            message: `Method or '${key}' not allowed.`,
            internalMessage: `[${serviceType}] Method or '${key}' not allowed.`
        },
        {
            type: "request_timeout",
            status: 408,
            message: `Request timed out.`,
            internalMessage: `[${serviceType}] Request timed out.`
        },
        {
            type: "bad_gateway",
            status: 502,
            message: `Bad gateway error.`,
            internalMessage: `[${serviceType}] Bad gateway error.`
        },
        {
            type: "gateway_timeout",
            status: 504,
            message: `Gateway timeout.`,
            internalMessage: `[${serviceType}] Gateway timeout.`
        }
    ]

    return errorsResponseList.find((error) => error.type === type);
}