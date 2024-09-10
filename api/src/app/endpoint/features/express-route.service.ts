import { AllServices as S, Injector, Injectable, Inject, AllServices } from "@services_injector";
import throwError from "@throw_error";
import { express_endpoint } from "@mockups";
import { printInfo } from "@helpers/wordsManager";
import { BasicRouteDto, OptionalRouteDto, FragmentRouteDto } from "../_dtos/route.dto";
import envs from "@envs";


const appPath = envs.APP_PATH;

interface SM {
    updateControllerImport: (
        moduleName: string,
        features?: string[]
    ) => Promise<void>;
    createRoute: (
        moduleName: string,
        { endpointName, requestType, controllerName }: FragmentRouteDto
    ) => Promise<void>;
    editRoute: (
        moduleName: string,
        { controllerName, endpointName, requestType, validateActive }: FragmentRouteDto,
        newRoute: OptionalRouteDto
    ) => Promise<void>;
    removeRoute: (
        moduleName: string,
        { endpointName, requestType }: BasicRouteDto
    ) => Promise<void>;
}

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

    createRoute: SM["createRoute"] = async (moduleName, route) => {

        const { endpointName, requestType, controllerName } = route;

        const endpointPath = `${appPath}/${moduleName}/_routes/${moduleName}.route.ts`;
        const textCode = express_endpoint(endpointName, requestType, controllerName);

        await this._generator_tag.addCodeAfterTag(endpointPath, "<ROUTES>", textCode);
        printInfo("ROUTE", "Endpoint added successfully.");
    }

    editRoute: SM["editRoute"] = async (moduleName, route, newRoute) => {

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

    removeRoute: SM["removeRoute"] = async (moduleName, route) => {

        const { endpointName, requestType } = route;
        const filePath = `${appPath}/${moduleName}/_routes/${moduleName}.route.ts`;

        await this._fs_file.updateFile(filePath, async (textCode) => {

            textCode = await this._ast_routeFunction.removeRoute(textCode, { endpointName, requestType });

            return textCode;

        });

        printInfo("ROUTE", `Endpoint '${endpointName}' removed.`);
    }

}

export default ExpressRouteService;