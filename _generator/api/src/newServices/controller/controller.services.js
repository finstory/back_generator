const { throwError, catchError, checkIsCathError } = require("../../helpers/customError");
const getPath = require("../../helpers/getPath");
const { printMsg, UpFirst } = require("../../../modules/helpers/wordsManager");
const { addContentAboveLine, removeLinesByTagsList } = require("../generator/generator.services");
const { S, addServices } = require("../../utils/service/injector");

const controllersPath = getPath("controllers");
const controllerInterfacesPath = getPath("interfaces", "/controllers");
const services = {};
addServices("controller", services);

services.createControllerFile = async (routeModule) => {
    const filePath = getControllerPath(routeModule);

    const code = `//<IMPORTS>
import controller from "../interfaces/controllers/${routeModule}/_index";
import { throwError } from "../helpers/customError";

//<CONTROLLERS>

export default controller;`;

    await S.fs.createFile(filePath, code);

};

services.deleteControllerFile = async (routeModule) => {
    const filePath = getControllerPath(routeModule);
    await S.fs.deleteFile(filePath);

};

services.addController = async (routeModule, controllerName) => {
    const filePath = getControllerPath(routeModule);
    const tagName = "<CONTROLLERS>";
    const code = `
controller.${controllerName} = async ({ params, query, body }, res) => {
  const data: any = { controllerName: "${controllerName}" };
    
  res.status(200).json(data);
};`;

    await S.generator.addCodeAfterTag(filePath, tagName, code);
};

services.renameController = async (routeModule, controllerName, newControllerName) => {
    const filePath = getControllerPath(routeModule);

    await S.generator.renameFunctionProperty(filePath, "controller", controllerName, newControllerName);
}

services.deleteController = async (routeModule, controllerName) => {
    const filePath = getControllerPath(routeModule);
    await S.generator.removeFunctionProperty(filePath, "controller", controllerName);
}

services.getPosController = async (routeModule, controllerName) => {
    const filePath = getControllerPath(routeModule);

    const indexGetting = await S.generator.getLineFunctionProperty(filePath, "controller", controllerName);

    return indexGetting;
};

services.reloadIndexController = async () => {

    const moduleList = await S.route.getAllRoutes();
    let importGenerated = "";
    let controllerGenerated = "";

    moduleList.forEach(item => {
        importGenerated += `import ${item.module} from "./${item.module}Controllers";\n`;
        controllerGenerated += `...${item.module},\n`;
    });

    const code = `${importGenerated}
const controllers = {
${controllerGenerated}};

export default controllers;`;

    await S.fs.replaceFile(`${controllersPath}/_index.ts`, code);
};



services.addEndpointComments = async (routeModuleList) => {

    for (let i = 0; i < routeModuleList.length; i++) {
        const routeModule = routeModuleList[i];
        const filePath = controllersPath + `/${routeModule.module}controllers.ts`;

        for (let j = 0; j < routeModule.routesList.length; j++) {
            const route = routeModule.routesList[j];
            const controllerName = route.controllerName;

            const endpointName = route.endpoint === "/" ? "" : route.endpoint;
            const lineToAdd = `//${UpFirst(route.method)} - /${routeModule.module}${endpointName}`;
            await addContentAboveLine(`controller.${controllerName}`, lineToAdd, filePath);
        }
    }

};

services.removeEndpointComments = async (routeModuleList) => {

    for (let i = 0; i < routeModuleList.length; i++) {
        const routeModule = routeModuleList[i];
        const filePath = controllersPath + `/${routeModule.module}controllers.ts`;
        const tagsListToDelete = [
            "//Get",
            "//Post",
            "//Put",
            "//Patch",
            "//Delete",
        ]
        await removeLinesByTagsList(tagsListToDelete, filePath);
    }

};




//% Request Editor

const getControllerPath = (routeModule) => {
    return `${controllersPath}/${routeModule}Controllers.ts`;
};

const main = async () => {
    try {
        // await services.createControllerFile("test");
        // await services.addController("test", "getUser");
        // await services.addController("test", "testController");
        // await services.renameController("test", "getUser", "getEmail");
        // await services.deleteController("test", "getEmail");}
        // console.log(await services.getIndexController("test", "getEmail"))
        // services.editIndexController();
    } catch (error) {
        // console.log(error)
    }

}
main();
module.exports = services;