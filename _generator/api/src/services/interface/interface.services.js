const { addServices, getServices } = require("..");
const getPath = require("../../helpers/getPath");
const { getFile, generateFile, editContentBetweenTags } = require("../generator/generator.services");
const ms = require("./interface.microservices");
const pathControllerInterfaces = getPath("interfaces", "/controllers");

const services = {};
addServices("interface", services);
//% Manager Controllers Interfaces

services.createIndexController = async (routeModule) => {
  const path = `${pathControllerInterfaces}/${routeModule}`;
  const code = `//$IMPORT_START

class Controllers {
//$CONTROLLER_START

}

const controllers = new Controllers();

export default controllers;
`;
  await ms.generateFolder(routeModule, pathControllerInterfaces);
  await ms.generateFile("_index", path, code);
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

const getControllerTypes = async (routeModule, controllerName) => {
  const path = `${pathControllerInterfaces}/${routeModule}/${controllerName}.ts`;

  const fileGetting = await getFile(path, true);
  const splitFile = fileGetting.split("\n");

  const settingsTypes = [
    { typeTo: "params", startTag: "type params", endTag: "type query", typesList: [] },
    { typeTo: "query", startTag: "type query", endTag: "type body", typesList: [] },
    { typeTo: "body", startTag: "type body", endTag: "type response_body", typesList: [] },
    { typeTo: "response_body", startTag: "type response_body", endTag: "//BODY", typesList: [] }
  ];

  for (let i = 0; i < settingsTypes.length; i++) {

    const startTagIndex = splitFile.findIndex(line => line.includes(settingsTypes[i].startTag));

    const endTagIndex = splitFile.findIndex(line => line.includes(settingsTypes[i].endTag));

    if (startTagIndex !== -1 && endTagIndex !== -1) {
      const fragmentText = splitFile.slice(startTagIndex, endTagIndex).join('\n');
      settingsTypes[i].typesList = getAllTypes(fragmentText);
    }

  }
  const typesCollection = {};
  for (let i = 0; i < settingsTypes.length; i++) {
    typesCollection[settingsTypes[i].typeTo] = settingsTypes[i].typesList;
  }

  return typesCollection;

}

services.editControllerTypes = async (routeModule, controllerName, newTypesList) => {
  const path = `${pathControllerInterfaces}/${routeModule}/${controllerName}.ts`;
  const settingsTypes = [
    { typeTo: "params", startTag: "type params", endTag: "type query" },
    { typeTo: "query", startTag: "type query", endTag: "type body" },
    { typeTo: "body", startTag: "type body", endTag: "type response_body" },
    { typeTo: "response_body", startTag: "type response_body", endTag: "//BODY" }
  ];


  for (const item in newTypesList) {
    let newContent = ` = {\n`;
    const { startTag, endTag, typeTo } = settingsTypes.find(obj => obj.typeTo === item);
    const typesList = newTypesList[item];

    for (let i = 0; i < typesList.length; i++) {
      const { key, type, optional } = typesList[i];

      newContent += `//KEY\n  ${key}${optional ? '?' : ''}: ${type};\n`;
    }
    newContent += '//END\n};\n\n';

    await editContentBetweenTags(startTag, endTag, newContent, path, false);
  }


}

services.reloadControllerTypes = async (routeModule, controllerName) => {
  const typesList = await getControllerTypes(routeModule, controllerName);
  console.log(typesList)
  await getServices("route").editRouteTypes(routeModule, controllerName, typesList);
}

const getAllTypes = (paramsText) => {
  const paramsLines = paramsText.split('\n');
  let result = [];
  for (let i = 0; i < paramsLines.length; i++) {
    if (paramsLines[i].includes('//END')) break;

    if (paramsLines[i].includes('//KEY')) {

      // const id = paramsLines[i].split('_')[1];
      const line = paramsLines[i + 1].trim();
      const [key, type] = line.split(':').map(s => s.trim());

      let optional = false;
      let keyToPush = key.replace(/\s+/g, '')
      let typeToPush = type.replace(/\s+/g, '')

      if (key.includes("?")) { optional = true; keyToPush = key.replace("?", "").replace(/\s+/g, '') }

      if (type.includes(";")) { typeToPush = type.replace(";", "").replace(/\s+/g, '') }

      result.push({ key: keyToPush, type: typeToPush, optional });
    }
  }

  return result;
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

// main();