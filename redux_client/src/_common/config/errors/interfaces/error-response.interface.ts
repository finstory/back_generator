export type RequestErrors =
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

type FsErrors =
    "file_not_found" | //! status = 404 
    "create_file" | //! status = 409
    "rename_file" | //! status = 409
    "delete_file" | //! status = 404

    "folder_not_found" | //! status = 404
    "create_folder" | //! status = 409
    "rename_folder" | //! status = 409
    "delete_folder"; //! status = 404

type AstErrors =
    "transform_code" | //! status = 500
    "parse_code"; //! status = 500

export type ErrorResponseType = RequestErrors | FsErrors | AstErrors;