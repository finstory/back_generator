import * as fs from "fs";

import promise from "@helpers/promiseWrapper";
import ServicesInjector from "@services_injector";
import { TextCode } from "@interfaces/fs.interface";

import { getName } from "../_utils/path.util";

class FSFile extends ServicesInjector {

    getFile = async (filePath: string, jsonFormat: boolean = true): Promise<TextCode> => {

        const nameFile = getName(filePath);
        const textCode: TextCode = await promise<string>((resolve, reject) => {

            fs.readFile(filePath, "utf8", (err, data) => {
                if (err) reject({ type: "file_not_found", key: nameFile });
                resolve(data);
            });

        }, `File '${nameFile}' read.`)

            .then((data: string) => {
                if (!jsonFormat) return JSON.parse(data);
                else return data;
            });

        return textCode;
    };

    createFile = async (filePath: string, code: any): Promise<void> => {

        const nameFile = getName(filePath);
        await promise<void>((resolve, reject) => {

            fs.writeFile(filePath, code, (err) => {
                if (err) reject({ type: "create_file", key: nameFile });
                resolve();
            });

        }, `File '${nameFile}' created.`);
    };

    createFilesList = async (filesList: { path: string, code: TextCode }[]): Promise<void> => {
        for (const file of filesList) {
            await this.createFile(file.path, file.code);
        }
    }

    replaceFile = async (filePath: string, code: TextCode): Promise<void> => {

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

}

export default FSFile;