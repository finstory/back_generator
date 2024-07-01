import { AllServices as S, Injector } from "@services_injector";
import throwError from "@throw_error";
import { Path, RequestType } from '@interfaces';

import { RouteExpressDto, RouteExpressDtoV2 } from "@ast/_dtos/ast-route-function.dto";
import { EditRouteFnDto } from "../_dtos/router-fn.dto";
import { printInfo } from "@/_common/helpers/wordsManager";


class GeneratorRouteFn extends Injector {
    private _fs_file: S["fs"]["file"];
    private _ast_route_function: S["ast"]["routeFunction"];

    test = async () => {
        console.log(this._ast_route_function)
        console.log(this._fs_file)
    }

    edit = async (filePath: Path, { endpointName, requestType, validateActive }: RouteExpressDtoV2, { newEndpoint, newRequestType, newController }: EditRouteFnDto) => {
        console.log("ok")
        !endpointName || !requestType && throwError("GENERATOR","bad_request", "endpoint or requestType");

        const textCode = await this._fs_file.getFile(filePath);
        let newTextCode: string;

        if (newEndpoint) {
            newTextCode = await this._ast_route_function.renameEndpoint(textCode, { endpointName, requestType }, newEndpoint);
        }

        if (newRequestType) {
            newTextCode = await this._ast_route_function.changeRequestType(textCode, { endpointName, requestType }, newRequestType);
        }

        if (newController) {
            !newController && throwError("GENERATOR","bad_request", "newController");
            newTextCode = await this._ast_route_function.renameController(textCode, { endpointName, requestType }, newController);
        }

        newTextCode = await this._ast_route_function.switchValidation(textCode, { endpointName, requestType, validateActive })

        await this._fs_file.createFile(filePath, newTextCode);
    }

    remove = async (filePath: Path, { endpointName, requestType }: RouteExpressDto) => {
        let textCode = await this._fs_file.getFile(filePath);

        const newTextCode = await this._ast_route_function.removeRoute(textCode, { endpointName, requestType });

        await this._fs_file.createFile(filePath, newTextCode);
        printInfo("GENERATOR", "Route removed successfully.");
    }


}

export default GeneratorRouteFn;