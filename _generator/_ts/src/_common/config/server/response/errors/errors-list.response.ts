//% Response Errors:

type requestErrors =
    "bad_request" | //! status = 400
    "not_found" | //! status = 404
    "unauthorized" | //! status = 401
    "forbidden" | //! status = 403
    "conflict" | //! status = 409
    "already_exists" | //! status = 409
    "internal_server_error" | //! status = 500
    "not_implemented" | //! status = 501
    "service_unavailable" | //! status = 503
    "not_allowed" | //! status = 405
    "request_timeout" | //! status = 408
    "bad_gateway" | //! status = 502
    "gateway_timeout"; //! status = 504

type successErrors =
    "ok" | //% status = 200
    "created" | //% status = 201
    "accepted" | //% status = 202
    "no_content" | //% status = 204
    "moved_permanently" | //% status = 301
    "found" | //% status = 302
    "not_modified"; //% status = 304


export const errorsList = (defaultError: any, type: typeError, key: string, serviceType?: string) => {
    let upperKey: string = key.charAt(0).toUpperCase() + key.slice(1);

    const listErrors = [
        {
            type: "bad_request",
            status: 400,
            message: `Bad request to input ${key}.`,
            messageWithService: `[${serviceType}] Bad request to input ${key}.`
        },
        {
            type: "not_found",
            status: 404,
            message: `${upperKey} not found.`,
            messageWithService: `[${serviceType}] ${key} not found.`
        },
        {
            type: "unauthorized",
            status: 401,
            message: `${upperKey} is unauthorized.`,
            messageWithService: `[${serviceType}] ${key} is unauthorized.`
        },
        {
            type: "forbidden",
            status: 403,
            message: `The ${key} is forbidden.`,
            messageWithService: `[${serviceType}] ${key} is forbidden.`
        },
        {
            type: "conflict",
            status: 409,
            message: `Conflict in ${key}.`,
            messageWithService: `[${serviceType}] Conflict in ${key}.`
        },
        {
            type: "already_exists",
            status: 409,
            message: `${upperKey} already exists.`,
            messageWithService: `[${serviceType}] ${key} already exists.`
        },
        {
            type: "internal_server_error",
            status: 500,
            message: `Internal server error, check ${key}.`,
            messageWithService: `[${serviceType}] Internal server error, check ${key}.`
        },
        {
            type: "not_implemented",
            status: 501,
            message: `${upperKey} is not Implemented.`,
            messageWithService: `[${serviceType}] ${key} is not Implemented.`
        },
        {
            type: "service_unavailable",
            status: 503,
            message: `Service unavailable.`,
            messageWithService: `[${serviceType}] Service unavailable.`
        },
        {
            type: "not_allowed",
            status: 405,
            message: `Method or ${key} not allowed.`,
            messageWithService: `[${serviceType}] Method or ${key} not allowed.`
        },
        {
            type: "request_timeout",
            status: 408,
            message: `Request timed out.`,
            messageWithService: `[${serviceType}] Request timed out.`
        },
        {
            type: "bad_gateway",
            status: 502,
            message: `Bad gateway error.`,
            messageWithService: `[${serviceType}] Bad gateway error.`
        },
        {
            type: "gateway_timeout",
            status: 504,
            message: `Gateway timeout.`,
            messageWithService: `[${serviceType}] Gateway timeout.`
        }
    ]
    if (serviceType) {
        const errorMessage = listErrors.find((err) => err.type === type);
        defaultError(errorMessage.messageWithService, errorMessage.status);

    }
    else {
        const errorMessage = listErrors.find((error) => error.type === type);
        fsErrorsList(defaultError, type, key);
        astErrorsList(defaultError, type, key);
        defaultError(errorMessage.message, errorMessage.status);
    }

}

//% File System Errors:

type fsErrors =
    "file_not_found" | //! status = 404 
    "create_file" | //! status = 409
    "rename_file" | //! status = 409
    "delete_file" | //! status = 404

    "folder_not_found" | //! status = 404
    "create_folder" | //! status = 409
    "rename_folder" | //! status = 409
    "delete_folder"; //! status = 404

const fsErrorsList = (defaultError: any, type: typeError, key: string) => {
    let upperKey: string = key.charAt(0).toUpperCase() + key.slice(1);

    switch (type) {

        //% Files:

        case "file_not_found":
            defaultError(`[FS] File '${key}' not found.`, 404);
            break;

        case "create_file":
            defaultError(`[FS] Error to create file '${key}'.`, 409);
            break;

        case "rename_file":
            defaultError(`[FS] Conflict to rename file '${key}'.`, 409);
            break;

        case "delete_file":
            defaultError(`[FS] Error to delete file '${key}'.`, 404);
            break;

        //% Folders:

        case "folder_not_found":
            defaultError(`[FS] Folder '${key}' not found.`, 404);
            break;

        case "create_folder":
            defaultError(`[FS] Error to create folder '${key}'.`, 409);
            break;

        case "rename_folder":
            defaultError(`[FS] Conflict to rename folder '${key}'.`, 409);
            break;

        case "delete_folder":
            defaultError(`[FS] Error to delete folder '${key}'.`, 404);
            break;
    }

}

type astErrors =
    "transform_code" | //! status = 500
    "parse_code"; //! status = 500

//% Abstract Syntax Tree Errors:

const astErrorsList = (defaultError: any, type: typeError, key: string) => {
    let upperKey: string = key.charAt(0).toUpperCase() + key.slice(1);

    switch (type) {

        case "transform_code":
            defaultError(`[AST] Error to transform code '${key}'.`, 422);
            break;

        case "parse_code":
            defaultError(`[AST] Error to parse code '${key}'.`, 422);
            break;
    }
}

export type typeError = requestErrors | fsErrors | astErrors;
export type typeSuccess = successErrors;