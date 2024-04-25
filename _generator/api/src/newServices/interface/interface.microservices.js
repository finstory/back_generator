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
  await S.generator.addCodeAfterTag(filePath, tagsStart, code, false);
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
  const tag = "<CONTROLLERS>";
  const code = `async ${controllerName}(req: ${UpFirst(controllerName)}.Req, res: ${UpFirst(controllerName)}.Res) {}`;
  await S.generator.addCodeAfterTag(path, tag, code, false);
};

ms.editPrototypeFromIndexController = async (routeModule, controllerName, newControllerName) => {
  const path = `${pathControllerInterfaces}/${routeModule}/_index.ts`;
  await S.generator.renameClassMethod(path, "Controllers", controllerName, newControllerName, "request_method");
};

ms.removePrototypeFromIndexController = async (routeModule, controllerName) => {
  const path = `${pathControllerInterfaces}/${routeModule}/_index.ts`;
  await S.generator.removeClassMethod(path, "Controllers", controllerName);
}

const main = async () => {
  try {
    // await ms.editPrototypeFromIndexController("auth", "getAuthByUserName", "putName");

    await ms.addImportFromIndexController("auth", "getAuthByEmail");
    // await ms.addPrototypeFromIndexController("auth", "getAuthByUserName");
    // await ms.addPrototypeFromIndexController("auth", "geronimo");
    // await ms.addPrototypeFromIndexController("auth", "getAuthByUserName");
    // await ms.addPrototypeFromIndexController("auth", "getAuthByUserName");
    // await ms.removePrototypeFromIndexController("auth", "geronimo");
    // await ms.addPrototypeFromIndexController("auth", "other");
    // await ms.addImportFromIndexController("koko", "getTest");
    //  await ms.removeImportFromIndexController("auth", "getAuthByEmail");
  } catch (error) {
    console.log(error.message)
  }
}

main();

module.exports = ms;