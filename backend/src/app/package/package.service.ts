import ServicesInjector from "@services_injector";
import throwError from "@throw_error";
import { module_controller, module_service } from "@mockups";

const appPath = "D:/Programacion_Extra/Node_ts/_generator/_ts/src/app/";
const commonPath = "D:/Programacion_Extra/Node_ts/_generator/_ts/src/_common/modules/";


class PackageService extends ServicesInjector {

    createModule = async (name: string, commonModule: boolean = false) => {

        let folderPath: string;

        if (!commonModule) {
            folderPath = appPath + name;

            await this.S.fs.folders.createFolder(folderPath);
            await this.S.fs.folders.createFolder(folderPath + "/_dtos");
            await this.S.fs.folders.createFolder(folderPath + "/_models");
            await this.S.fs.folders.createFolder(folderPath + "/_routes");
            await this.S.fs.folders.createFolder(folderPath + "/_utils");
            await this.S.fs.folders.createFolder(folderPath + "/_validations");
            await this.S.fs.folders.createFolder(folderPath + "/features");
            await this.S.fs.files.createFile(`${folderPath}/${name}.controller.ts`, module_controller(name));
            await this.S.fs.files.createFile(`${folderPath}/${name}.service.ts`, module_service(name));
        }
        else {
            folderPath = commonPath + name;

            await this.S.fs.folders.createFolder(folderPath);
            await this.S.fs.folders.createFolder(folderPath + "/_utils");
            await this.S.fs.folders.createFolder(folderPath + "/features");
            await this.S.fs.files.createFile(`${folderPath}/${name}.service.ts`, module_service(name));
        }


    }
}

export default PackageService;