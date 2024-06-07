import { AllServices as S, Injector } from "@services_injector";
import throwError from "@throw_error";
import { RequestType } from "@interfaces";
import { generateControllerName } from "@utils";
import { express_endpoint } from "@mockups";
import { printInfo } from "@/_common/helpers/wordsManager";
import { EditRouteFnDto } from "./_dtos/router-fn.dto";
import { RouteExpressDtoV2 } from "@ast/_dtos/ast-route-function.dto";

const appPath = "D:/Programacion_Extra/Node_ts/_generator/_ts/src/test/folder-tester/app";

class EndpointService {

    private _fs_file: S['fs']['file'];
    private _ast_import: S['ast']['import'];
    private _ast_route_function: S['ast']['route_function'];
    private _generator_tag: S['generator']['tag'];



    create = async (moduleName: string, endpoint: string, requestType: RequestType) => {

        const endpointPath = `${appPath}/${moduleName}/_routes/${moduleName}.route.ts`;
        const controllerName = generateControllerName(moduleName, endpoint, requestType);
        const textCode = express_endpoint(endpoint, requestType, controllerName);

        await this._generator_tag.addCodeAfterTag(endpointPath, "<ROUTES>", textCode);
        printInfo("ROUTE", "Endpoint added successfully.");
    }

    edit = async (moduleName: string, { endpoint, requestType, validateActive }: RouteExpressDtoV2, { newEndpoint, newRequestType, newController }: EditRouteFnDto) => {

        const filePath = `${appPath}/${moduleName}/_routes/${moduleName}.route.ts`;
        let message = `to endpoint '${endpoint}' successfully.`;

        !endpoint || !requestType && throwError("bad_request", "endpoint or requestType");

        await this._fs_file.updateFile(filePath, async (textCode) => {

            if (newEndpoint) {
                textCode = await this._ast_route_function.renameEndpoint(textCode, { endpoint, requestType }, newEndpoint);
                endpoint = newEndpoint;
                message = `endpoint_name | ${message}`;
            }

            if (newRequestType) {
                textCode = await this._ast_route_function.changeRequestType(textCode, { endpoint, requestType }, newRequestType);
                requestType = newRequestType;
                message = `request_type_name | ${message}`;
            }

            if (newController) {
                !newController && throwError("bad_request", "newController");
                textCode = await this._ast_route_function.renameController(textCode, { endpoint, requestType }, newController);
                message = `controller_name | ${message}`;
            }

            textCode = await this._ast_route_function.switchValidation(textCode, { endpoint, requestType, validateActive })


            return textCode;
        });

        printInfo("ROUTE", `Reissue | ${message} `);
    }

    remove = async (moduleName: string, { endpoint, requestType }: RouteExpressDtoV2) => {

        const filePath = `${appPath}/${moduleName}/_routes/${moduleName}.route.ts`;
        await this._fs_file.updateFile(filePath, async (textCode) => {
            textCode = await this._ast_route_function.removeRoute(textCode, { endpoint, requestType });
            return textCode;
        });

        printInfo("ROUTE", `Endpoint '${endpoint}' removed.`);
    }

    _initial = (S: S) => {
        // this._ast_import = S.ast.import;
        this._ast_route_function = S.ast.route_function;
        this._fs_file = S.fs.file;
        this._generator_tag = S.generator.tag;
    }
}

export default EndpointService;