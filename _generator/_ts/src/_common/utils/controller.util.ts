import { underscoreToUpperCase, UpFirst } from "@helpers/wordsManager";
import { RequestType } from "@interfaces";

export const getEndpointNames = (endpoint: string, underscore: boolean = false)
    : { endpointList: string[] | undefined, params: string | undefined } => {

    let modifiedEndpoint = endpoint.replace(/_/g, "/");
    let parts = modifiedEndpoint.split("/");

    if (parts[1] && parts[1].startsWith(":"))
        return { endpointList: [], params: parts[1].substring(1) };


    let endpointList = [];
    let params = "";
    if (endpoint === "/") return { endpointList, params };

    for (let i = 1; i < parts.length; i++) {
        if (parts[i].startsWith(":")) {
            params = parts[i].substring(1);
        } else {
            if (underscore) endpointList.push(underscoreToUpperCase(parts[i]));
            else endpointList.push(parts[i]);
        }
    }
    if (endpointList.length && endpointList.length === 0 || endpointList[0] === "") endpointList = undefined;
    else endpointList = endpointList.filter(item => item !== "");
    if (params === "") params = undefined;

    return { endpointList, params };
};

export const generateControllerName = (moduleName: string, endpoint: string = "/", requestType: RequestType) => {

    let controllerName: string;
    const { endpointList, params } = getEndpointNames(endpoint, false);
    console.log(params)
    for (let i = 0; i < endpointList.length; i++)
        moduleName += UpFirst(endpointList[i]);

    controllerName = requestType + UpFirst(moduleName);
    if (params) controllerName += "By" + UpFirst(params);

    return controllerName;
}
