"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fsResponseMockup = void 0;
const typesList = [
    "file_not_found",
    "create_file",
    "rename_file",
    "delete_file",
    "folder_not_found",
    "create_folder",
    "rename_folder",
    "delete_folder"
];
const fsResponseMockup = (type, key) => {
    if (!typesList.includes(type))
        return;
    const errorsResponseList = [
        //% Files:
        {
            type: "file_not_found",
            status: 404,
            message: `File '${key}' not found.`,
            internalMessage: `[FS] File '${key}' not found.`
        },
        {
            type: "create_file",
            status: 409,
            message: `Error to create file '${key}'.`,
            internalMessage: `[FS] Error to create file '${key}'.`
        },
        {
            type: "rename_file",
            status: 409,
            message: `Conflict to rename file '${key}'.`,
            internalMessage: `[FS] Conflict to rename file '${key}'.`
        },
        {
            type: "delete_file",
            status: 404,
            message: `Error to delete file '${key}'.`,
            internalMessage: `[FS] Error to delete file '${key}'.`
        },
        //% Folders:
        {
            type: "folder_not_found",
            status: 404,
            message: `Folder '${key}' not found.`,
            internalMessage: `[FS] Folder '${key}' not found.`
        },
        {
            type: "create_folder",
            status: 409,
            message: `Error to create folder '${key}'.`,
            internalMessage: `[FS] Error to create folder '${key}'.`
        },
        {
            type: "rename_folder",
            status: 409,
            message: `Conflict to rename folder '${key}'.`,
            internalMessage: `[FS] Conflict to rename folder '${key}'.`
        },
        {
            type: "delete_folder",
            status: 404,
            message: `Error to delete folder '${key}'.`,
            internalMessage: `[FS] Error to delete folder '${key}'.`
        }
    ];
    return errorsResponseList.find((error) => error.type === type);
};
exports.fsResponseMockup = fsResponseMockup;
