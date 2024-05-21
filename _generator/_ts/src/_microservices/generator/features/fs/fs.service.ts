import promise from "@/helpers/promiseWrapper";
import throwError from "@throw_error";
import * as fs from "fs";
import { Code } from "../../_interfaces/fs.interface";

const getName = (filePath: string) => {
    const nameFile = filePath.split("/").pop();
    return nameFile;
}

class FS {

    //% Files:

    getFile = async (filePath: string, jsonFormat: boolean = true): Promise<Code> => {

        const nameFile = getName(filePath);
        const textCode: Code = await promise<string>((resolve, reject) => {

            fs.readFile(filePath, "utf8", (err, data) => {
                if (err) reject({ type: "create_file", key: nameFile });
                resolve(data);
            });

        }, `File '${nameFile}' read.`)

            .then((data: string) => {
                if (!jsonFormat) return JSON.parse(data);
                else return data;
            });

        return textCode;
    };

    createFile = async (filePath: string, code: Code): Promise<void> => {

        const nameFile = getName(filePath);
        await promise<void>((resolve, reject) => {

            fs.writeFile(filePath, code, (err) => {
                if (err) reject({ type: "create_file", key: nameFile });
                resolve();
            });

        }, `File '${nameFile}' created.`);
    };

    replaceFile = async (filePath: string, code: Code): Promise<void> => {

        const nameFile = getName(filePath);
        await promise<void>((resolve, reject) => {

            fs.writeFile(filePath, code, (err) => {
                if (err) reject({ type: "create_file", key: nameFile });
                resolve();
            });

        }, `File '${nameFile}' replaced successfully.`);
    };

    renameFile = async (filePath: string, newName: string): Promise<void> => {

        const nameFile = getName(filePath);
        const newFilePath = filePath.replace(nameFile, newName);

        await promise<void>((resolve, reject) => {

            fs.rename(filePath, newFilePath, (err) => {
                if (err) reject({ type: "rename_file", key: nameFile });
                resolve();
            });

        }, `File '${nameFile}' renamed to '${newName}'.`);
    };

    deleteFile = async (filePath: string): Promise<void> => {

        const nameFile = getName(filePath);
        await promise<void>((resolve, reject) => {

            fs.unlink(filePath, (err) => {
                if (err) reject({ type: "file_not_found", key: nameFile });
                resolve();
            });

        }, `File '${nameFile}' deleted.`);
    };

    //% Folders:

    createFolder = async (folderPath: string): Promise<void> => {

        const nameFolder = getName(folderPath);
        await promise<void>((resolve, reject) => {

            fs.mkdir(folderPath, (err) => {
                if (err) reject({ type: "create_folder", key: nameFolder });
                resolve();
            });

        }, `Folder '${nameFolder}' created.`);
    };

    renameFolder = async (folderPath: string, newName: string): Promise<void> => {

        const nameFolder = getName(folderPath);
        const newFolderPath = folderPath.replace(nameFolder, newName);

        await promise<void>((resolve, reject) => {

            fs.rename(folderPath, newFolderPath, (err) => {
                if (err) reject({ type: "rename_file", key: nameFolder });
                resolve();
            });

        }, `Folder '${nameFolder}' renamed to '${newName}'.`);
    };

    deleteFolder = async (folderPath: string): Promise<void> => {

        const nameFolder = getName(folderPath);
        await promise<void>((resolve, reject) => {

            fs.rmdir(folderPath, { recursive: true }, (err) => {
                if (err) reject({ type: "file_not_found", key: nameFolder });
                resolve();
            });

        }, `Folder '${nameFolder}' deleted.`);
    };
}

export default FS;