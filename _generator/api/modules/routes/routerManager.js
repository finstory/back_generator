const colors = require("colors");
const { getEndpointNames } = require("../Utils/routerUtils");

const {
  getFilePath,
  generateFile,
  addContent,
  deleteContent,
  deleteTagsAndContent,
  replaceTag,
  deleteJSFile,
} = require("../generatorServices");
const { UpFirst, textColor, printMsg } = require("../helpers/wordsManager");
const {
  endpointCode,
  moduleRouteCode,
  routeIndexCode,
} = require("./writeCode");
const { printError } = require("../helpers/customError");
const getPath = require("../../src/helpers/getPath");
const pathRoutes = getPath("routes");

const compiler = {};

const main = async () => {
  // await compiler.createRouteIndex();
  // await compiler.creteRouterFile("user");
  await compiler.addRouter("/:id", "get", "user");
  //    await compiler.addRouter("/email/:email", "delete", "user");
  //  await deleteTagsAndContent(
  //     '//GRE-6yYRmUj1jxcSdTNB7892oX',"//GRE",
  //     "modules/routes/userRoutes.ts"
  //   );
  //   await deleteContent(
  //     '//GRE-6yYRmUj1jxcSdTNB7892oX',"//GRE",
  //     "modules/routes/userRoutes.ts"
  //   );
};

compiler.createRouteIndex = async (endpoint = "/", typeReq, routeModule) => {
  try {
    await generateFile("index", "modules/routes", routeIndexCode());
    printMsg("Route module created.");
  } catch (error) {
    printError(error);
  }
};

compiler.creteRouterFile = async (name) => {
  try {
    await generateFile(name + "Routes", "modules/routes", moduleRouteCode());
    printMsg("Route module created.");
  } catch (error) {
    printError(error);
  }
};


compiler.addRouter = async (endpoint = "/", typeReq, routeModule) => {
  // try {
  const path = `modules/routes/${routeModule}Routes.ts`;
  const tagStart = `//GR-ENDPOINT`;
  const tagEnd = `//GR`;
  const bold = endpointCode(
    typeReq,
    endpoint,
    routeModule,
    endpointList,
    params
  );
  await addContent(tagStart, tagEnd, bold, path);

  printMsg("Router added.");
  // } catch (error) {
  //   // printError(error);
  // }
};

compiler.deleteRouter = async (name) => {
  try {
    await deleteJSFile(name + "Routes", "modules/routes");
  } catch (error) {
    printError(error);
  }
};

// main();

module.exports = compiler;
