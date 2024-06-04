import * as fs from "fs";

import promise from "@helpers/promiseWrapper";
import ServicesInjector from "@services_injector";

import { getName } from "../_utils/path.util";
import { printInfo } from "@/_common/helpers/wordsManager";

class FSFolder {
    createFolder = async (folderPath: string): Promise<void> => {
        const nameFolder = getName(folderPath);
        await promise<void>((resolve, reject) => {
            fs.mkdir(folderPath, (err) => {
                if (err) reject({ type: "create_folder", key: nameFolder });
                resolve();
            });
        }).then(() => printInfo("FS", `Folder '${nameFolder}' created.`));
    };

    createFoldersList = async (foldersList: string[]): Promise<void> => {
        for (const folder of foldersList) {
            await this.createFolder(folder);
        }
    };

    renameFolder = async (folderPath: string, newName: string): Promise<void> => {
        const nameFolder = getName(folderPath);
        const newFolderPath = folderPath.replace(nameFolder, newName);

        await promise<void>((resolve, reject) => {
            fs.rename(folderPath, newFolderPath, (err) => {
                if (err) reject({ type: "rename_folder", key: nameFolder });
                resolve();
            });
        }).then(() => printInfo("FS", `Folder '${nameFolder}' renamed to '${newName}'.`));
    };

    deleteFolder = async (folderPath: string): Promise<void> => {
        const nameFolder = getName(folderPath);
        await promise<void>((resolve, reject) => {
            fs.rm(folderPath, { recursive: true }, (err) => {
                if (err) reject({ type: "folder_not_found", key: nameFolder });
                resolve();
            });
        }).then(() => printInfo("FS", `Folder '${nameFolder}' deleted.`));
    };
}

export default FSFolder;
