const shortUUID = require('short-uuid');
const { UpFirst } = require('../helpers/wordsManager');
const short = shortUUID();

const compiler = {};

compiler.routeIndexCode = () => {
    const code =
        `import { Router } from "express";

        //GR-IMPORT


        //GR
        
        export const routes = Router();
        
        routes.use("/users", Users);
        `

    return code;
}

compiler.moduleRouteCode = (routeModule) => {
    const code =
        `import { Router } from "express";
import { Request, Response, NextFunction } from "express";
import { controllers } from "./controllers";

const router = Router();

//GR-ENDPOINT
//GR`

    return code;
}

compiler.endpointCode = (typeReq, endpoint, routeModule, endpointList = [], params) => {
    let controllerName;

    for (let i = 0; i < endpointList.length; i++) {
        routeModule += UpFirst(endpointList[i]);
    }

    controllerName = typeReq + UpFirst(routeModule);
    if (params) controllerName += "By" + UpFirst(params);


    const code = `//GRE-${short.new()}
router.${typeReq}("${endpoint}", controllers.${controllerName});`;

    return code;
}

module.exports = compiler;