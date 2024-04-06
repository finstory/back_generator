const throwError = require("../helpers/customError");
const { getServices, addServices } = require(".");
const { v4: uuidv4 } = require("uuid");
const getPath = require("../helpers/getPath");
const { generateFile, getFile } = require("../../modules/generatorServices");
const { printMsg, UpFirst } = require("../../modules/helpers/wordsManager");
const { getEndpointNames } = require("../../modules/Utils/routerUtils");

const pathData = getPath("data");
const pathRoutes = getPath("routes");

const services = {};

const routeList2 = [
  {
    module: "user",
    routesList: [
      {
        id: "7Z2i38fAsbPT8Lfuf7iyF9",
        endpoint: "/facu",
        method: "get",
        nameController: "getUser",
      },
      {
        id: "8Z3j39gBtcQU9Mgvf8jzG12",
        endpoint: "/",
        method: "get",
        nameController: "createUser",
      },
      {
        id: "9K4k40hCudRV10Nhv9kAH11",
        endpoint: "/:id",
        method: "put",
        nameController: "updateUser",
      },
      {
        id: "10L5l41iDveSW11OiA10BI12",
        endpoint: "/:id",
        method: "delete",
        nameController: "deleteUser",
      },
    ],
  },
  {
    module: "product",
    routesList: [
      {
        id: "7Z2i38fAsbPT8Lfuf7iyF9",
        endpoint: "/jeje",
        method: "get",
        nameController: "getUser",
      },
    ],
  },
];

services.getAllRoutes = async () => {
  return await getFile(pathData + "/routesData.json");
};

services.createRouteModule = async (routeModule) => {
  const routeList = await services.getAllRoutes();
  const moduleGet = routeList.find((route) => route.module === routeModule);

  if (!routeModule) throwError("bad_request", 400, "Module name is required.");
  if (!moduleGet) throwError("bad_request", 400, "Module already exists.");

  routeList.push({
    module: routeModule,
    routesList: [],
  });

  await generateFile("routesData", pathData, JSON.stringify(routeList), "json");
  printMsg("Route module created.");
};

const generateControllerName = (routeModule, endpoint, method) => {

  const { endpointList, params } = getEndpointNames(endpoint, false);

  let controllerName;

  for (let i = 0; i < endpointList.length; i++) {
    routeModule += UpFirst(endpointList[i]);
  }

  controllerName = method + UpFirst(routeModule);
  if (params) controllerName += "By" + UpFirst(params);
  console.log(controllerName)
  return controllerName;
}

services.createRoute = async (routeModule, endpoint, method, nameController) => {

  const routeList = await services.getAllRoutes();
  const moduleGet = routeList.find((route) => route.module === routeModule);

  if (!routeModule) throwError("bad_request", 400, "Module name is required.");
  if (!moduleGet) throwError("bad_request", 400, "Module already exists.");

  const controllerExist = moduleGet.routesList.find((route) => route.nameController === nameController);

  if (controllerExist) throwError("bad_request", 400, "Controller name already exists.");

  const endpointExist = moduleGet.routesList.find((route) => route.endpoint === endpoint && route.method === method);

  if (endpointExist) {throwError("bad_request", 400, `Endpoint: '${method} - ${endpoint}' already exists.`);}

  const newController = generateControllerName(routeModule, endpoint, method);

  routeList.forEach((route) => {

    if (route.module === routeModule)
      route.routesList.push({
        id: uuidv4(),
        endpoint,
        method,
        nameController: nameController ? nameController : newController,
      });

  });

  await generateFile("routesData", pathData, JSON.stringify(routeList), "json");
  printMsg("Route created.");
};

module.exports = services;
