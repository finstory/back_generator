const { throwError, catchError, checkIsCathError } = require("../helpers/customError");
const { getServices, addServices } = require(".");
const { v4: uuidv4 } = require("uuid");
const getPath = require("../helpers/getPath");
const { generateFile, getFile } = require("../../modules/generatorServices");
const { printMsg, UpFirst } = require("../../modules/helpers/wordsManager");
const { getEndpointNames } = require("../../modules/Utils/routerUtils");
const { getFilePath, addContent, deleteJSFile, deleteContent, deleteTagsAndContent, replaceTag, findLinesWithTexts, findLineInText } = require("./generatorServices");

const pathData = getPath("data");
const pathControllers = getPath("controllers");

const services = {};
addServices("controllers", services);

services.createControllerFile = async (routeModule) => {

    const code = `import controller from "./interfaces";
import { throwError } from "../helpers/customError";
import { Request, Response } from "express";
    
//$C_START

export default controller;`;

    await generateFile(routeModule + "Controllers", pathControllers, code);

};

services.deleteControllerFile = async (routeModule) => {
    await deleteJSFile(routeModule + "Controllers", pathControllers);
};

services.addController = async (routeModule, controllerName) => {

    const code = `   
//% GET - /users/:id
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

    await replaceTag(startTag, "controller." + newControllerName, pathControllers + "/" + routeModule + "Controllers.ts")
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



const main = async () => {
    try {
        await services.createControllerFile("auth");
        // await services.addController("auth", "getAuthLogin");
        await services.addController("facu", "getAuthFacu");
        // await services.editController("auth", "getAuthLogin", "facu");
        //   await services.deleteController("auth", "facu");
    } catch (error) {
        console.log(error);
    }
}

module.exports = services;