const colors = require('colors');
const { getEndpointNames } = require('../Utils/routerUtils');

const { getFilePath, generateFile, addContent, deleteContent, deleteTagsAndContent, replaceTag, deleteJSFile } = require('../generatorServices');
const { UpFirst, textColor, printMsg } = require('../helpers/wordsManager');
const { endpointCode, moduleRouteCode } = require('./writeCode');
const { printError } = require('../helpers/customError');

const compiler = {};


const main = async () => {
    await compiler.creteRouterFile("user");
    // await compiler.addRouter("/:id", "delete", "users");
    // await compiler.addRouter("/profile", "post", "products");

};


compiler.addRouter = async (endpoint = "/", typeReq, routeModule) => {
    try {
        const { endpointList, params } = getEndpointNames(endpoint, false);

        const bold = endpointCode(typeReq, endpoint, routeModule, endpointList, params);
        await addContent("GR-START", "GR-END", bold, "generator/routes/userRoutes.js");

        printMsg("Router added.");

    } catch (error) { printError(error) }
}

compiler.creteRouterFile = async (name) => {
    try {
        await generateFile(name + "Routes", "generator/routes", moduleRouteCode());
        printMsg("Route module created.");

    } catch (error) { printError(error) }
}

compiler.deleteRouter = async (name) => {
    try {
        await deleteJSFile(name + "Routes", "generator/routes");

    } catch (error) { printError(error) }
}


main();

module.exports = compiler;