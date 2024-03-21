const shortUUID = require('short-uuid');
const { UpFirst } = require('../helpers/wordsManager');
const short = shortUUID();

const compiler = {};

compiler.moduleRouteCode = (routeModule) => {
    const code = `
//GR-START

//GR-END`

    return code;
}
compiler.endpointCode = (typeReq, endpoint, routeModule, endpointList = [], params) => {
    let controllerName;

    for (let i = 0; i < endpointList.length; i++) {
        routeModule += UpFirst(endpointList[i]);
    }

    controllerName = typeReq + UpFirst(routeModule);
    if (params) controllerName += "By" + UpFirst(params);

    
    const code = `
//GRE-${short.new()}
router.${typeReq}("${endpoint}", ${controllerName});
//GRE`;

    return code;
}

module.exports = compiler;