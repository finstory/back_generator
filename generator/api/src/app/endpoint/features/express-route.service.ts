import { AllServices as S, Injector, Injectable, Inject } from "@services_injector";
import throwError from "@throw_error";
import { generateControllerName } from "@utils";
import { express_endpoint } from "@mockups";
import { printInfo } from "@helpers/wordsManager";
import { EditRouteDto } from "../_dtos/router-fn.dto";
import { RouteExpressDto, RouteExpressDtoV2 } from "@ast/_dtos/ast-route-function.dto";
import { BasicRouteDto, OptionalRouteDto, PartialRouteDto } from "@/_common/db/dto/route.dto";
import { json_db } from "@/_common/db/json";
import { env } from "process";

const appPath = env.BACKEND_PATH;


class ExpressRouteService extends Injectable {

    @Inject private _fs_file: S['fs']['file'];
    @Inject private _ast_import: S['ast']['import'];
    @Inject private _ast_routeFunction: S['ast']['routeFunction'];
    @Inject private _generator_tag: S['generator']['tag'];


    updateControllerImport = async (moduleName: string, features?: string[]) => {

        const endpointPath = `${appPath}/${moduleName}/_routes/${moduleName}.route.ts`;

        await this._fs_file.updateFile(endpointPath, async (textCode) => {

            return await this._ast_import.editImport(textCode, "controller", "controller", `../${moduleName}.controller`);
        });

        printInfo("ROUTE", `Updated import to module '${moduleName}'.`);
    };

    createRoute = async (moduleName: string, { endpointName, requestType, controllerName }: PartialRouteDto) => {

        const endpointPath = `${appPath}/${moduleName}/_routes/${moduleName}.route.ts`;
        const textCode = express_endpoint(endpointName, requestType, controllerName);

        await this._generator_tag.addCodeAfterTag(endpointPath, "<ROUTES>", textCode);
        printInfo("ROUTE", "Endpoint added successfully.");
    }

    editRoute = async (moduleName: string, route: PartialRouteDto, newRoute: OptionalRouteDto) => {

        let { endpointName, requestType } = route;
        const filePath = `${appPath}/${moduleName}/_routes/${moduleName}.route.ts`;
        let message = `to endpoint '${endpointName}' successfully.`;

        !endpointName || !requestType && throwError("ENDPOINT", "bad_request", "endpoint or requestType");

        await this._fs_file.updateFile(filePath, async (textCode) => {

            if (newRoute.endpointName) {
                textCode = await this._ast_routeFunction.renameEndpoint(textCode, { endpointName, requestType }, newRoute.endpointName);
                endpointName = newRoute.endpointName;
                message = `endpoint_name | ${message}`;
            }

            if (newRoute.requestType) {
                textCode = await this._ast_routeFunction.changeRequestType(textCode, { endpointName, requestType }, newRoute.requestType);
                requestType = newRoute.requestType;
                message = `request_type_name | ${message}`;
            }

            if (newRoute.endpointName || newRoute.requestType || newRoute.controllerName) {
                const newControllerName = newRoute.controllerName || route.controllerName;

                textCode = await this._ast_routeFunction.renameController(textCode, { endpointName, requestType }, newControllerName);

                message = `controller_name | ${message}`;
            }

            if (typeof newRoute.validateActive === "boolean")
                textCode = await this._ast_routeFunction.switchValidation(textCode, { endpointName, requestType, validateActive: newRoute.validateActive })



            return textCode;
        });

        printInfo("ROUTE", `Reissue | ${message} `);
    }

    removeRoute = async (moduleName: string, { endpointName, requestType }: BasicRouteDto) => {

        const filePath = `${appPath} /${moduleName}/_routes / ${moduleName}.route.ts`;

        await this._fs_file.updateFile(filePath, async (textCode) => {

            textCode = await this._ast_routeFunction.removeRoute(textCode, { endpointName, requestType });

            return textCode;

        });

        printInfo("ROUTE", `Endpoint '${endpointName}' removed.`);
    }

}

export default ExpressRouteService;