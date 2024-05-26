import ServicesInjector from "@services_injector";
import throwError from "@throw_error";
import { module_controller, controller_entity, module_service, module_route } from "@mockups";

const appPath = "D:/Programacion_Extra/Node_ts/_generator/_ts/src/test/folder-tester/app";
const commonPath = "D:/Programacion_Extra/Node_ts/_generator/_ts/src/test/folder-tester/common";

class PackageService extends ServicesInjector {

    private createFolder = this.S.fs.folders.createFolder;
    private createFile = this.S.fs.files.createFile;


    createModule = async (name: string, commonModule: boolean = false) => {
        let folderPath: string;

        if (!commonModule) {
            folderPath = `${appPath}/${name}`;

            //% Creation of the folders
            await this.createFolder(folderPath);
            await this.createFolder(folderPath + "/_dtos");
            await this.createFolder(folderPath + "/_entities");
            await this.createFolder(folderPath + "/_routes");
            await this.createFolder(folderPath + "/_utils");
            await this.createFolder(folderPath + "/_validations");
            await this.createFolder(folderPath + "/features");

            //% Creation of the files
            await this.createFile(`${folderPath}/${name}.controller.ts`, module_controller(name));
            await this.createFile(`${folderPath}/${name}.service.ts`, module_service(name));
            await this.createFile(`${folderPath}/_entities/${name}-controller.entity.ts`, controller_entity(name));
            await this.createFile(`${folderPath}/_routes/${name}.route.ts`, module_route(name));
        }
        else {
            folderPath = `${appPath}/${name}`;

            //% Creation of the folders
            await this.createFolder(folderPath);
            await this.createFolder(folderPath + "/_utils");
            await this.createFolder(folderPath + "/features");

            //% Creation of the files
            await this.createFile(`${folderPath}/${name}.service.ts`, module_service(name));
        }


    }
}

export default PackageService;