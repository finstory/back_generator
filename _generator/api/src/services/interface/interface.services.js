
const { generateFolder } = require("../../../modules/generatorServices");
const getPath = require("../../helpers/getPath");
const S = require("../../utils/service/injector");
const { getFile, generateFile, editContentBetweenTags } = require("../generator/generator.services");
const ms = require("./interface.microservices");
const pathControllerInterfaces = getPath("interfaces", "/controllers");

const services = {};
S.add("interface", services);

//% Manager Controllers Interfaces

services.createIndexController = async (routeModule) => {
  const folderPath = `${pathControllerInterfaces}/${routeModule}`;
  const filePath = `${folderPath}/_index.ts`;
  const code = `//<IMPORTS>

  class Controllers {
    //<CONTROLLERS>
  }
  
  const controllers = new Controllers();
  
  export default controllers;`;
  await S.fs.createFolder(folderPath);
  await S.fs.createFile(filePath, code);
};

services.renameIndexController = async (routeModule, newRouteModule) => {
  const oldPath = `${pathControllerInterfaces}/${routeModule}/_index.ts`;
  const newPath = `${pathControllerInterfaces}/${newRouteModule}/_index.ts`;
  await S.fs.renameFile(oldPath, newPath);
};

services.addControllerInterface = async (routeModule, controllerName) => {
  await ms.addImportFromIndexController(routeModule, controllerName);
  await ms.addPrototypeFromIndexController(routeModule, controllerName);
  await ms.createControllerInterface(routeModule, controllerName);
}

services.editControllerInterface = async (routeModule, controllerName, newControllerName) => {
  await ms.editImportFromIndexController(routeModule, controllerName, newControllerName);
  await ms.editPrototypeFromIndexController(routeModule, controllerName, newControllerName);
  await ms.renameControllerInterface(routeModule, controllerName, newControllerName);
}

services.removeControllerInterface = async (routeModule, controllerName) => {
  await ms.removeImportFromIndexController(routeModule, controllerName);
  await ms.removePrototypeFromIndexController(routeModule, controllerName);
  await ms.removeControllerInterface(routeModule, controllerName);
}

//% Manager Request & Response Interfaces

services.addControllerTypes = async (routeModule, controllerName, requestType, newType = { prevKey, key, type, elementType, optional, value }) => {
  const path = `${pathControllerInterfaces}/${routeModule}/${controllerName}.ts`;
  await S.generator.addType(path, requestType, newType);
}

services.renameControllerTypes = async (routeModule, controllerName, requestType, newType = { prevKey, key, type, elementType, optional, value }) => {
  const path = `${pathControllerInterfaces}/${routeModule}/${controllerName}.ts`;
  await S.generator.renameType(path, requestType, newType);
}

services.removeControllerTypes = async (routeModule, controllerName, requestType, key) => {
  const path = `${pathControllerInterfaces}/${routeModule}/${controllerName}.ts`;
  await S.generator.removeType(path, requestType, key);
}

module.exports = services;

const main = async () => {
  try {
    const typesList = {
      params: [
        { key: 'id', type: 'string', optional: false, value: '123' },
        { key: 'look', type: 'User', optional: false, value: 'asdasdasd' },
      ],
      query: [
        { key: 'name', type: 'string', optional: false, value: '3wg' },
        { key: 'email', type: 'User', optional: true, value: null }
      ],
      body: [],
      response_body: []
    };

    await editControllerTypes("user", "getUser", typesList);
  } catch (error) {
    console.log(error.message);
  }
};
