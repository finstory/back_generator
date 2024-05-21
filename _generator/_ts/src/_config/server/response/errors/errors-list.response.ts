//% Response Errors:

type requestErrors =
    "bad_request" | //! status = 400
    "not_found" | //! status = 404
    "unauthorized" | //! status = 401
    "forbidden" | //! status = 403
    "conflict" | //! status = 409
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


export const errorsList = (defaultError: any, type: typeError, key: string) => {
    let upperKey: string = key.charAt(0).toUpperCase() + key.slice(1);

    switch (type) {

        case "bad_request":
            defaultError(`Bad request to input ${key}.`, 400);
            break;

        case "not_found":
            defaultError(`${upperKey} not found.`, 404);
            break;

        case "unauthorized":
            defaultError(`${upperKey} is unauthorized.`, 401);
            break;

        case "forbidden":
            defaultError(`The ${key} is forbidden.`, 403);
            break;

        case "conflict":
            defaultError(`Conflict in ${key}.`, 409);
            break;

        case "internal_server_error":
            defaultError(`Internal server error, check ${key}.`, 500);
            break;

        case "not_implemented":
            defaultError(`${upperKey} is not Implemented.`, 501);
            break;

        case "service_unavailable":
            defaultError(`Service unavailable.`, 503);
            break;

        case "not_allowed":
            defaultError(`Method or ${key} not allowed.`, 405);
            break;

        case "request_timeout":
            defaultError(`Request timed out.`, 408);
            break;

        case "bad_gateway":
            defaultError(`Bad gateway error.`, 502);
            break;

        case "gateway_timeout":
            defaultError(`Gateway timeout.`, 504);
            break;
    }

    fsErrorsList(defaultError, type, key);
}

//% File System Errors:

type fsErrors =
    "file_not_found" | //! status = 404 
    "create_file" | //! status = 409
    "rename_file" | //! status = 409
    "create_folder"; //! status = 409

const fsErrorsList = (defaultError: any, type: typeError, key: string) => {
    let upperKey: string = key.charAt(0).toUpperCase() + key.slice(1);

    switch (type) {

        case "file_not_found":
            defaultError(`File '${upperKey}' not found.`, 404);
            break;

        case "create_file":
            defaultError(`Error creating file '${upperKey}'.`, 409);
            break;

        case "rename_file":
            defaultError(`Conflict to rename file '${upperKey}'.`, 409);
            break;

        case "create_folder":
            defaultError(`Error creating folder '${upperKey}'.`, 409);
            break;
    }


}

export type typeError = requestErrors | fsErrors;
export type typeSuccess = successErrors;