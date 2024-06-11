import ServicesInjector from "@services_injector";
import throwError from "@throw_error";
import { module_controller, controller_entity, module_service, module_route } from "@mockups";

const appPath = "D:/Programacion_Extra/Node_ts/_generator/_ts/src/test/folder-tester/app";
const commonPath = "D:/Programacion_Extra/Node_ts/_generator/_ts/src/test/folder-tester/common";

class PackageService extends ServicesInjector {

    private createFolder = this.S.fs.folder.createFolder;
    private createFile = this.S.fs.file.createFile;
    private createFoldersList = this.S.fs.folder.createFoldersList;
    private createFilesList = this.S.fs.file.createFilesList;

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

            await this.createFoldersList(foldersList);

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

            await this.createFilesList(filesList);

        }
        else {
            folderPath = `${appPath}/${name}`;

            //% Creation of the folders

            const foldersList = [
                folderPath,
                `${folderPath}/_utils`,
                `${folderPath}/features`
            ];

            await this.createFoldersList(foldersList);

            //% Creation of the files

            const filesList = [{
                path: `${folderPath}/${name}.service.ts`,
                code: module_service(name)
            }];

            await this.createFilesList(filesList);
        }


    }
}

export default PackageService;