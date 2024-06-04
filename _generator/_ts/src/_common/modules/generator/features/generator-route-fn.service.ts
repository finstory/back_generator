import { AllServices as S, Injector } from "@services_injector";
import throwError from "@throw_error";
import { Path, RequestType } from '@interfaces';

import { RouteExpressDto, RouteExpressDtoV2 } from "@ast/_dtos/ast-route-function.dto";
import { EditRouteFnDto } from "../_dtos/router-fn.dto";
import FS from "../../fs/fs.service";


class GeneratorRouteFn extends Injector {
    private _fs_file: S["fs"]["file"];
    private _ast_route_function: S["ast"]["route_function"];

    edit = async (filePath: Path, { endpoint, requestType, validateActive }: RouteExpressDtoV2, { newEndpoint, newRequestType, newController }: EditRouteFnDto) => {
        console.log("ok")
        !endpoint || !requestType && throwError("bad_request", "endpoint or requestType");

        const textCode = await this._fs_file.getFile(filePath);
        let newTextCode: string;

        if (newEndpoint) {
            newTextCode = await this._ast_route_function.renameEndpoint(textCode, { endpoint, requestType }, newEndpoint);
        }

        if (newRequestType) {
            newTextCode = await this._ast_route_function.changeRequestType(textCode, { endpoint, requestType }, newRequestType);
        }

        if (newController) {
            !newController && throwError("bad_request", "newController");
            newTextCode = await this._ast_route_function.renameController(textCode, { endpoint, requestType }, newController);
        }

        newTextCode = await this._ast_route_function.switchValidation(textCode, { endpoint, requestType, validateActive })

        await this._fs_file.createFile(filePath, newTextCode);
    }

    remove = async (filePath: Path, { endpoint, requestType }: RouteExpressDto) => {
        let textCode = await this._fs_file.getFile(filePath);
        const newTextCode = this._ast_route_function.removeRoute(textCode, { endpoint, requestType });

        await this._fs_file.createFile(filePath, newTextCode);
    }


}

export default GeneratorRouteFn;