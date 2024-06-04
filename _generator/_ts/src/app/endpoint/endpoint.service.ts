import ServicesInjector from "@services_injector";
import throwError from "@throw_error";
import { RequestType } from "@interfaces";
import { generateControllerName } from "@utils";
import { express_endpoint } from "@mockups";

const appPath = "D:/Programacion_Extra/Node_ts/_generator/_ts/src/test/folder-tester/app";

class EndpointService extends ServicesInjector {


    private addCodeAfterTag = this.S.generator.tag.addCodeAfterTag;


    createEndpoint = async (moduleName: string, endpoint: string, requestType: RequestType) => {

        const endpointPath = `${appPath}/${moduleName}/_routes/${moduleName}.route.ts`;
        const controllerName = generateControllerName(moduleName, endpoint, requestType);
        const textCode = express_endpoint(endpoint, requestType, controllerName);

        await this.addCodeAfterTag(endpointPath, "<ROUTES>", textCode);

    }
}

export default EndpointService;