const getPath = require("../../helpers/getPath");
const { generateFile } = require("../../../modules/generatorServices");
const { UpFirst } = require("../../../modules/helpers/wordsManager");
const { addContent, deleteJSFile, removeLineByTag, replaceTagByLine, renameFile } = require("../generator/generator.services");
const S = require("../../utils/service/injector");

const pathControllerInterfaces = getPath("interfaces", "/controllers");

const microservice = {};


microservice.createControllerInterface = async (routeModule, controllerName) => {
  const path = `${pathControllerInterfaces}/${routeModule}`;
  const code = `import { Request, Response } from "express";
  export interface Req extends Request<params, {}, body, query> {}
  export interface Res extends Response<response_body> {}
  
  //REQUEST TYPES:
  
  type params = {
    //END
  };
  
  type query = {
    //END
  };
  
  type body = {
    //END
  };
  
  type response_body = {
    //END
  };
  
  //BODY TO SEND:
  
  const body: body = {
  };`;

  await generateFile(controllerName, path, code);
};


microservice.renameControllerInterface = async (routeModule, controllerName, newControllerName) => {
  const directory = `${pathControllerInterfaces}/${routeModule}`;
  renameFile(controllerName, newControllerName, directory);
}


microservice.removeControllerInterface = async (routeModule, controllerName) => {
  const path = `${pathControllerInterfaces}/${routeModule}`;

  await deleteJSFile(controllerName, path);
}

microservice.addImportFromIndexController = async (routeModule, controllerName) => {
  const path = `${pathControllerInterfaces}/${routeModule}/_index.ts`;
  const tagsStart = `//$IMPORT_START`;
  const code = `import * as ${UpFirst(controllerName)} from "./${controllerName}";`

  await addContent(tagsStart, code, path);
};

microservice.editImportFromIndexController = async (routeModule, controllerName, newControllerName) => {
  const path = `${pathControllerInterfaces}/${routeModule}/_index.ts`;
  const tagsStart = `import * as ${UpFirst(controllerName)}`;
  const code = `import * as ${UpFirst(newControllerName)} from "./${newControllerName}"`

  await replaceTagByLine(tagsStart, code, path);
};

microservice.removeImportFromIndexController = async (routeModule, controllerName) => {
  const path = `${pathControllerInterfaces}/${routeModule}/_index.ts`;
  const tagsStart = `import * as ${UpFirst(controllerName)}`;

  await removeLineByTag(tagsStart, path, false);
}

microservice.addPrototypeFromIndexController = async (routeModule, controllerName) => {
  const path = `${pathControllerInterfaces}/${routeModule}/_index.ts`;
  const tagsStart = `//$CONTROLLER_START`;
  const code = `\nasync ${controllerName} (req: ${UpFirst(controllerName)}.Req, res: ${UpFirst(controllerName)}.Res) {}`

  await addContent(tagsStart, code, path);
};

microservice.editPrototypeFromIndexController = async (routeModule, controllerName, newControllerName) => {
  const path = `${pathControllerInterfaces}/${routeModule}/_index.ts`;
  const tagsStart = `async ${controllerName}`;
  const code = `async ${newControllerName}(req: ${UpFirst(newControllerName)}.Req, res: ${UpFirst(newControllerName)}.Res) { }`

  await replaceTagByLine(tagsStart, code, path, true);
};

microservice.removePrototypeFromIndexController = async (routeModule, controllerName) => {
  const path = `${pathControllerInterfaces}/${routeModule}/_index.ts`;
  const tagsStart = `async ${controllerName}`;

  await removeLineByTag(tagsStart, path);
}

module.exports = microservice;