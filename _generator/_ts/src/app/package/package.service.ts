import { AllServices as S, BasicInject, BasicInjectable } from "@services_injector";
import throwError from "@throw_error";
import { module_controller, controller_entity, module_service, module_route } from "@mockups";
import JsonDB from "@/_common/db/json";

const appPath = "D:/Programacion_Extra/Node_ts/_generator/_ts/src/test/folder-tester/app";

class PackageService extends BasicInjectable {

    @BasicInject private _fs_folder: S["fs"]["folder"];
    @BasicInject private _fs_file: S["fs"]["file"];

    getAllModuleDB = async () => {
        return (await JsonDB()).module.getAll();
    };
    createModule = async (name: string, commonModule: boolean = false) => {
        let folderPath: string;

        if (!commonModule) {
            folderPath = `${appPath}/${name}`;

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
                    path: `${folderPath}/_entities/${name}-controller.entity.ts`,
                    code: controller_entity(name)
                },
                {
                    path: `${folderPath}/${name}.controller.ts`,
                    code: module_controller(name)
                },
                {
                    path: `${folderPath}/_validations/_index.ts`,
                    code: "export default {};",
                },
                {
                    path: `${folderPath}/${name}.service.ts`,
                    code: module_service(name)
                },
                {
                    path: `${folderPath}/_routes/${name}.route.ts`,
                    code: module_route(name)
                }
            ];

            await this._fs_file.createFilesList(filesList);

        }
        else {
            folderPath = `${appPath}/${name}`;

            //% Creation of the folders

            const foldersList = [
                folderPath,
                `${folderPath}/_utils`,
                `${folderPath}/features`
            ];

            await this._fs_folder.createFoldersList(foldersList);

            //% Creation of the files

            const filesList = [{
                path: `${folderPath}/${name}.service.ts`,
                code: module_service(name)
            }];

            await this._fs_file.createFilesList(filesList);
        }

        return `Module '${name}' created successfully.`;
    }

    deleteModule = async (name: string) => {
        const folderPath = `${appPath}/${name}`;
        await this._fs_folder.deleteFolder(folderPath);
    }
}

export default PackageService;