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

const compiler = {};

const main = async () => {
  // await compiler.createRouteIndex();
  //  await compiler.creteRouterFile("user");
  //  await compiler.addRouter("/profile", "post", "products");
  //  await compiler.addRouter("/:id", "get", "user");
//    await compiler.addRouter("/email/:email", "delete", "user");
 await deleteTagsAndContent(
    '//GRE-6yYRmUj1jxcSdTNB7892oX',"//GRE",
    "generator/routes/userRoutes.ts"
  );
//   await deleteContent(
//     '//GRE-6yYRmUj1jxcSdTNB7892oX',"//GRE",
//     "generator/routes/userRoutes.ts"
//   );
};

compiler.createRouteIndex = async (endpoint = "/", typeReq, routeModule) => {
  try {
    await generateFile("index", "generator/routes", routeIndexCode());
    printMsg("Route module created.");
  } catch (error) {
    printError(error);
  }
};

compiler.creteRouterFile = async (name) => {
  try {
    await generateFile(name + "Routes", "generator/routes", moduleRouteCode());
    printMsg("Route module created.");
  } catch (error) {
    printError(error);
  }
};

compiler.addRouter = async (endpoint = "/", typeReq, routeModule) => {
  try {
    const path = `generator/routes/${routeModule}Routes.ts`;
    const { endpointList, params } = getEndpointNames(endpoint, false);
    const tagStart = `//GRE-START`;
    const tagEnd = `//GRE-END`;
    const bold = endpointCode(
      typeReq,
      endpoint,
      routeModule,
      endpointList,
      params
    );
    await addContent(tagStart, tagEnd, bold, path);

    printMsg("Router added.");
  } catch (error) {
    printError(error);
  }
};

compiler.deleteRouter = async (name) => {
  try {
    await deleteJSFile(name + "Routes", "generator/routes");
  } catch (error) {
    printError(error);
  }
};

main();

module.exports = compiler;
