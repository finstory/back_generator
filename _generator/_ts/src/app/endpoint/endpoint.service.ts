import { AllServices as S, Injector } from "@services_injector";
import throwError from "@throw_error";
import { RequestType } from "@interfaces";
import { generateControllerName } from "@utils";
import { express_endpoint } from "@mockups";

const appPath = "D:/Programacion_Extra/Node_ts/_generator/_ts/src/test/folder-tester/app";

class EndpointService {

    private _fs_file: S['fs']['file'];
    private _ast_import: S['ast']['import'];
    private _ast_route_function: S['ast']['route_function'];
    private _generator_tag: S['generator']['tag'];



    createEndpoint = async (moduleName: string, endpoint: string, requestType: RequestType) => {

        const endpointPath = `${appPath}/${moduleName}/_routes/${moduleName}.route.ts`;
        const controllerName = generateControllerName(moduleName, endpoint, requestType);
        const textCode = express_endpoint(endpoint, requestType, controllerName);

        await this._generator_tag.addCodeAfterTag(endpointPath, "<ROUTES>", textCode);

    }

    _initial = (S: S) => {
        // this._fs_file = S.fs.file;
        // this._ast_import = S.ast.import;
        // this._ast_route_function = S.ast.route_function;
        this._generator_tag = S.generator.tag;
    }
}

export default EndpointService;