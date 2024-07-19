"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateControllerName = exports.getEndpointNames = void 0;
const wordsManager_1 = require("../helpers/wordsManager");
const getEndpointNames = (endpoint, underscore = false) => {
    let modifiedEndpoint = endpoint.replace(/_/g, "/");
    let parts = modifiedEndpoint.split("/");
    if (parts[1] && parts[1].startsWith(":"))
        return { endpointList: [], params: parts[1].substring(1) };
    let endpointList = [];
    let params = "";
    if (endpoint === "/")
        return { endpointList, params };
    for (let i = 1; i < parts.length; i++) {
        if (parts[i].startsWith(":")) {
            params = parts[i].substring(1);
        }
        else {
            if (underscore)
                endpointList.push((0, wordsManager_1.underscoreToUpperCase)(parts[i]));
            else
                endpointList.push(parts[i]);
        }
    }
    if (endpointList.length && endpointList.length === 0 || endpointList[0] === "")
        endpointList = undefined;
    else
        endpointList = endpointList.filter(item => item !== "");
    if (params === "")
        params = undefined;
    return { endpointList, params };
};
exports.getEndpointNames = getEndpointNames;
const generateControllerName = (moduleName, endpoint = "/", requestType) => {
    let controllerName;
    const { endpointList, params } = (0, exports.getEndpointNames)(endpoint, false);
    for (let i = 0; i < endpointList.length; i++) {
        if (i === 0 && endpointList[0] === "all") {
            moduleName = "all" + (0, wordsManager_1.UpFirst)(moduleName);
            continue;
        }
        moduleName += (0, wordsManager_1.UpFirst)(endpointList[i]);
    }
    controllerName = requestType + (0, wordsManager_1.UpFirst)(moduleName);
    if (params)
        controllerName += "By" + (0, wordsManager_1.UpFirst)(params);
    return controllerName;
};
exports.generateControllerName = generateControllerName;
