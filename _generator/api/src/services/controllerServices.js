const { throwError, catchError, checkIsCathError } = require("../helpers/customError");
const { getServices, addServices } = require(".");
const { v4: uuidv4 } = require("uuid");
const getPath = require("../helpers/getPath");
const { generateFile, getFile } = require("../../modules/generatorServices");
const { printMsg, UpFirst } = require("../../modules/helpers/wordsManager");
const { getEndpointNames } = require("../../modules/Utils/routerUtils");
const { getFilePath, addContent, deleteJSFile, deleteContent, deleteTagsAndContent, replaceTag, findLinesWithTexts, findLineInText, addContentAboveLine, removeLinesByTagsList, replaceTagByLine } = require("./generatorServices");

const pathData = getPath("data");
const pathControllers = getPath("controllers");
const pathControllerInterfaces = getPath("interfaces", "/controllers");
const services = {};
addServices("controllers", services);

services.createControllerFile = async (routeModule) => {

    const code = `import controller from "../interfaces/controllers/${routeModule}/_index";
import { throwError } from "../helpers/customError";
//$C_START

export default controller;`;

    await generateFile(routeModule + "Controllers", pathControllers, code);

};

services.deleteControllerFile = async (routeModule) => {
    await deleteJSFile(routeModule + "Controllers", pathControllers);
};

services.addController = async (routeModule, controllerName) => {

    const code = `
controller.${controllerName} = async ({ params, query, body }, res) => {
  const data: any = {controllerName: '${controllerName}'};
    
  res.status(200).json(data);
};`;
    // routeModule + "Controllers"
    const startTag = "//$C_START";
    await addContent(startTag, code, pathControllers + "/" + routeModule + "Controllers.ts");

};

services.editController = async (routeModule, controllerName, newControllerName) => {
    const startTag = `controller.${controllerName}`;

    await replaceTag(startTag, "controller." + newControllerName, pathControllers + "/" + routeModule + "Controllers.ts");
}

services.deleteController = async (routeModule, controllerName) => {
    const startTag = `controller.${controllerName}`;
    const endTag = `controller.`;

    await deleteTagsAndContent(startTag, endTag, pathControllers + "/" + routeModule + "Controllers.ts")

        .catch(async (error) => {

            const startTag = `controller.${controllerName}`;
            const endTag = `export default`;

            await deleteTagsAndContent(startTag, endTag, pathControllers + "/" + routeModule + "Controllers.ts");

        });


}

services.getIndexController = async (routeModule, controllerName) => {
    const filePath = pathControllers + `/${routeModule}controllers.ts`;

    const textToFind = `controller.${controllerName}`;

    const data = await findLineInText(textToFind, filePath);
    return data;
};

services.getAllIndexControllers = async (controllersList, controllerName) => {
    const filePath = pathControllers + `/${controllerName}controllers.ts`;

    const textListToFind = controllersList.map(string => {
        return { id: string, text: `controller.${string}` }
    });

    const data = await findLinesWithTexts(textListToFind, filePath);
    return data;
};


services.addEndpointComments = async (routeModuleList) => {

    for (let i = 0; i < routeModuleList.length; i++) {
        const routeModule = routeModuleList[i];
        const filePath = pathControllers + `/${routeModule.module}controllers.ts`;

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
        const filePath = pathControllers + `/${routeModule.module}controllers.ts`;
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

services.editIndexController = async () => {
    const path = `${pathControllers}`;
    const moduleList = await getServices("route").getAllRoutes();
    console.log(moduleList)
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

    await generateFile("_index", path, code);
};


module.exports = services;