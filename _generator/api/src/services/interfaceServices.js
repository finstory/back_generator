const { throwError, catchError, checkIsCathError } = require("../helpers/customError");
const { getServices, addServices } = require(".");
const { v4: uuidv4 } = require("uuid");
const getPath = require("../helpers/getPath");
const { generateFile, getFile, generateFolder } = require("../../modules/generatorServices");
const { printMsg, UpFirst } = require("../../modules/helpers/wordsManager");
const { getEndpointNames } = require("../../modules/Utils/routerUtils");
const { getFilePath, addContent, deleteJSFile, deleteContent, deleteTagsAndContent, replaceTag, findLinesWithTexts, findLineInText, addContentAboveLine, removeLinesByTagsList, removeLineByTag } = require("./generatorServices");

const pathData = getPath("data");
const pathControllerInterfaces = getPath("interfaces", "/controllers");

const services = {};

//% SERVICES TO FILE CONTROLLER INDEX

services.createControllerInterfacesBase = async (routeModule) => {
  const path = `${pathControllerInterfaces}/${routeModule}`;
  const code = `//$IMPORT_START

class Controllers {
//$CONTROLLER_START

}

const controllers = new Controllers();

export default controllers;
`;
  await generateFolder(routeModule, pathControllerInterfaces);
  await generateFile("_index", path, code);
};

services.addImportFromIndex = async (routeModule, controllerName) => {
  const path = `${pathControllerInterfaces}/${routeModule}/_index.ts`;
  const tagsStart = `//$IMPORT_START`;
  const code = `import * as ${UpFirst(controllerName)} from "./${controllerName}";`

  await addContent(tagsStart, code, path);
};

services.removeImportFromIndex = async (routeModule, controllerName) => {
  const path = `${pathControllerInterfaces}/${routeModule}/_index.ts`;
  const tagsStart = `import * as ${UpFirst(controllerName)}`;

  await removeLineByTag(tagsStart, path, false);
}

services.addControllerInterfacesFromIndex = async (routeModule, controllerName) => {
  const path = `${pathControllerInterfaces}/${routeModule}/_index.ts`;
  const tagsStart = `//$CONTROLLER_START`;
  const code = `\nasync ${controllerName} (req: ${UpFirst(controllerName)}.Req, res: ${UpFirst(controllerName)}.Res) {}`

  await addContent(tagsStart, code, path);
};

services.removeControllerInterfacesFromIndex = async (routeModule, controllerName) => {
  const path = `${pathControllerInterfaces}/${routeModule}/_index.ts`;
  const tagsStart = `async ${controllerName}`;

  await removeLineByTag(tagsStart, path);
}

services.createControllerInterface = async (routeModule, controllerName) => {
  const path = `${pathControllerInterfaces}/${routeModule}`;
  const code = `import { Request, Response } from "express";
export interface Req extends Request<params, {}, body, query> {}
export interface Res extends Response<response_body> {}

//REQUEST TYPES:

type params = {
  id: string;
  last_name: string;
};

type query = {
  id_team: string;
  name: string;
};

type body = {
  team: {};
};

type response_body = {
  name: string;
  id: number;
};

//BODY TO SEND:

const body: body = {
  team: "",
};`;

  await generateFile(controllerName, path, code);
};

services.removeControllerInterface = async (routeModule, controllerName) => {
  const path = `${pathControllerInterfaces}/${routeModule}`;

  await deleteJSFile(controllerName, path);
}

//% SERVICES TO CONTROLLERS INTERFACE

const main = async () => {
  try {
    // await services.createControllerInterfacesBase("buenas");
    // await services.addImportFromIndex("buenas", "userGet");
    // await services.addImportFromIndex("buenas", "userPost");
    // await services.addControllerInterfacesFromIndex("buenas", "userGet");
    // await services.addControllerInterfacesFromIndex("buenas", "userPost");
   await services.createControllerInterface("buenas", "userGet");
    // await services.createControllerInterface("buenas", "userPost");
     await services.removeControllerInterface("buenas", "userGet");
  } catch (error) {
    console.log(error);
  }
};

main();