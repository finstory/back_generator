import { AllServices, Instantiate, Auto } from "@services_injector";
import ControllerFileService from "./features/controller-file.service";
import ControllerEntityService from "./features/controller-entity.service";
const appPath = "D:/Programacion_Extra/Node_ts/_generator/_ts/src/test/folder-tester/app";

@Instantiate
class ControllerService {

    @Auto public file: ControllerFileService;
    @Auto public entity: ControllerEntityService;

    _initial = (S: AllServices) => {

        S.controller.file = new ControllerFileService([
            { _fs_file: S.fs.file },
            { _ast_compiler_function: S.ast.compiler_function }
        ]);

    }
}

export default ControllerService;