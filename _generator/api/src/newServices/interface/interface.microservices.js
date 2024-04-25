const getPath = require("../../helpers/getPath");
const { generateFile } = require("../../../modules/generatorServices");
const { UpFirst } = require("../../../modules/helpers/wordsManager");
const { addContent, deleteJSFile, removeLineByTag, replaceTagByLine, renameFile } = require("../generator/generator.services");
const S = require("../../utils/service/injector");
const { lowerCaseToFirstLetter } = require("../../../helpers/wordsManager");

const pathControllerInterfaces = getPath("interfaces", "/controllers");

const ms = {};

ms.createControllerInterface = async (routeModule, controllerName) => {

  const filePath = `${pathControllerInterfaces}/${routeModule}/${controllerName}.ts`;

  const code = `import { Request, Response } from "express";
  export interface Req extends Request<params, {}, body, query> {}
  export interface Res extends Response<response_body> {}
  
  //REQUEST TYPES:
  
  type params = {};
  
  type query = {};
  
  type body = {};
  
  type response_body = {};
  
  //BODY TO SEND:
  
  const body: body = {};`;

  await S.fs.createFile(filePath, code);
};


ms.renameControllerInterface = async (routeModule, controllerName, newControllerName) => {
  const directory = `${pathControllerInterfaces}/${routeModule}`;
  await S.fs.renameFile(controllerName, newControllerName, directory);
}

ms.removeControllerInterface = async (routeModule, controllerName) => {
  const path = `${pathControllerInterfaces}/${routeModule}/${controllerName}.ts`;
  await S.fs.deleteFile(path);
}

ms.addImportFromIndexController = async (routeModule, controllerName) => {
  const filePath = `${pathControllerInterfaces}/${routeModule}/_index.ts`;
  const tagsStart = "<IMPORTS>";
  const code = `import * as ${UpFirst(controllerName)} from "./${controllerName}";`

  await S.generator.addCodeAfterTag(filePath, tagsStart, code, true);
};

ms.editImportFromIndexController = async (routeModule, controllerName, newControllerName) => {
  const path = `${pathControllerInterfaces}/${routeModule}/_index.ts`;
  await S.generator.renameImport(path, UpFirst(controllerName), UpFirst(newControllerName), `./${newControllerName}`);
};

ms.removeImportFromIndexController = async (routeModule, controllerName) => {
  const path = `${pathControllerInterfaces}/${routeModule}/_index.ts`;
  await S.generator.removeImport(path, UpFirst(controllerName));
}

ms.addPrototypeFromIndexController = async (routeModule, controllerName) => {
  const path = `${pathControllerInterfaces}/${routeModule}/_index.ts`;
  const tagsStart = `//$CONTROLLER_START`;
  const code = `\nasync ${controllerName} (req: ${UpFirst(controllerName)}.Req, res: ${UpFirst(controllerName)}.Res) {}`

  await addContent(tagsStart, code, path);
};

ms.editPrototypeFromIndexController = async (routeModule, controllerName, newControllerName) => {
  const path = `${pathControllerInterfaces}/${routeModule}/_index.ts`;
  const tagsStart = `async ${controllerName}`;
  const code = `async ${newControllerName}(req: ${UpFirst(newControllerName)}.Req, res: ${UpFirst(newControllerName)}.Res) { }`

  await replaceTagByLine(tagsStart, code, path, true);
};

ms.removePrototypeFromIndexController = async (routeModule, controllerName) => {
  const path = `${pathControllerInterfaces}/${routeModule}/_index.ts`;
  const tagsStart = `async ${controllerName}`;

  await removeLineByTag(tagsStart, path);
}

const main = async () => {
  // await ms.addImportFromIndexController("koko", "getTest");
  //  await ms.removeImportFromIndexController("auth", "getAuthByEmail");
}

main();

module.exports = ms;