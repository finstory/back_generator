import { AllServices as S, BasicInject, BasicInjectable } from "@services_injector";
import throwError from "@throw_error";
import { json_db } from "@/_common/db/json";
import { module_controller, controller_entity, module_service, module_route } from "@mockups";
import { printInfo } from "@/_common/helpers/wordsManager";

const appPath = "D:/Programacion_Extra/Node_ts/_generator/_ts/src/test/folder-tester/app";

class PackageService extends BasicInjectable {

    @BasicInject private _fs_folder: S["fs"]["folder"];
    @BasicInject private _fs_file: S["fs"]["file"];

    getAllModuleDB = async () => {
        printInfo("JSON_DB", "Getting all modules from the database.");
        return await json_db.module.getAll();
    };

    createModule = async (moduleName: string, moduleCommon: boolean = false) => {
        let folderPath: string;

        await json_db.module.create(moduleName);

        if (!moduleCommon) {
            folderPath = `${appPath}/${moduleName}`;

            //% Creation of the folders

            const foldersList = [
                folderPath,
                `${folderPath}/_dtos`,
                `${folderPath}/_entities`,
                `${folderPath}/_routes`,
                `${folderPath}/_utils`,
                `${folderPath}/_validations`,
                `${folderPath}/features`
            ];

            await this._fs_folder.createFoldersList(foldersList);

            //% Creation of the files
            const filesList = [
                {
                    path: `${folderPath}/_entities/${moduleName}-controller.entity.ts`,
                    code: controller_entity(moduleName)
                },
                {
                    path: `${folderPath}/${moduleName}.controller.ts`,
                    code: module_controller(moduleName)
                },
                {
                    path: `${folderPath}/_validations/_index.ts`,
                    code: "export default {};",
                },
                {
                    path: `${folderPath}/${moduleName}.service.ts`,
                    code: module_service(moduleName)
                },
                {
                    path: `${folderPath}/_routes/${moduleName}.route.ts`,
                    code: module_route(moduleName)
                }
            ];

            await this._fs_file.createFilesList(filesList);

        }
        else {
            folderPath = `${appPath}/${moduleName}`;

            //% Creation of the folders

            const foldersList = [
                folderPath,
                `${folderPath}/_utils`,
                `${folderPath}/features`
            ];

            await this._fs_folder.createFoldersList(foldersList);

            //% Creation of the files

            const filesList = [{
                path: `${folderPath}/${moduleName}.service.ts`,
                code: module_service(moduleName)
            }];

            await this._fs_file.createFilesList(filesList);
        }

        return `Module '${moduleName}' created successfully.`;
    }

    deleteModule = async (moduleName: string) => {
        await json_db.module.delete(moduleName);

        const folderPath = `${appPath}/${moduleName}`;
        await this._fs_folder.deleteFolder(folderPath);

        printInfo("PACKAGE", `Module '${moduleName}' deleted successfully.`);
    }
}

export default PackageService;