import ServicesInjector from "@services_injector";
import throwError from "@throw_error";
import { express_endpoint } from "@mockups";
import { RequestType } from "@interfaces/endpoint.interface";
import { generateControllerName } from "@/_common/utilities/controller.util";

const appPath = "D:/Programacion_Extra/Node_ts/_generator/_ts/src/test/folder-tester/app";




class EndpointService extends ServicesInjector {


    private addCodeAfterTag = this.S.generator.tags.addCodeAfterTag;


    createEndpoint = async (moduleName: string, endpoint: string, requestType: RequestType) => {

        const endpointPath = `${appPath}/${moduleName}/_routes/${moduleName}.route.ts`;
        const controllerName = generateControllerName(moduleName, endpoint, requestType);
        const code = express_endpoint(endpoint, requestType, controllerName);

        await this.addCodeAfterTag(endpointPath, "<ROUTES>", code);

    }
}

export default EndpointService;