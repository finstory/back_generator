import * as fs from "fs";

import promise from "@helpers/promiseWrapper";
import ServicesInjector, { Injector } from "@services_injector";
import { Path, TextCode } from "@interfaces";

import { getName } from "../_utils/path.util";
import { printInfo } from "@/_common/helpers/wordsManager";

class FSFile {


    getFile = async (filePath: string, jsonFormat: boolean = true): Promise<TextCode> => {
        const nameFile = getName(filePath);
        const textCode: TextCode = await promise<string>((resolve, reject) => {
            fs.readFile(filePath, "utf8", (err, data) => {
                if (err) reject({ type: "file_not_found", key: nameFile });
                resolve(data);
            });
        }).then((data: string) => {
            printInfo("FS", `File '${nameFile}' read.`);
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
        }).then(() => printInfo("FS", `File '${nameFile}' created.`));
    };

    createFilesList = async (filesList: { path: string; code: TextCode }[]): Promise<void> => {
        for (const file of filesList) {
            await this.createFile(file.path, file.code);
        }
    };

    replaceFile = async (filePath: string, code: TextCode): Promise<void> => {
        const nameFile = getName(filePath);
        await promise<void>((resolve, reject) => {
            fs.writeFile(filePath, code, (err) => {
                if (err) reject({ type: "create_file", key: nameFile });
                resolve();
            });
        }).then(() => printInfo("FS", `File '${nameFile}' replaced successfully.`));
    };

    renameFile = async (filePath: string, newName: string): Promise<void> => {
        const nameFile = getName(filePath);
        const newFilePath = filePath.replace(nameFile, newName);

        await promise<void>((resolve, reject) => {
            fs.rename(filePath, newFilePath, (err) => {
                if (err) reject({ type: "rename_file", key: nameFile });
                resolve();
            });
        }).then(() => printInfo("FS", `File '${nameFile}' renamed to '${newName}'.`));
    };

    deleteFile = async (filePath: string): Promise<void> => {
        const nameFile = getName(filePath);
        await promise<void>((resolve, reject) => {
            fs.unlink(filePath, (err) => {
                if (err) reject({ type: "file_not_found", key: nameFile });
                resolve();
            });
        }).then(() => printInfo("FS", `File '${nameFile}' deleted.`));
    };

    updateFile = async (filePath: Path, callback: (textCode: TextCode) => Promise<TextCode>) => {

        let textCode = await this.getFile(filePath);
        const newTextCode = await callback(textCode);
        await this.createFile(filePath, newTextCode);
    }

}

export default FSFile;
