const { throwError, catchError, checkIsCathError } = require("../helpers/customError");
const { getServices, addServices } = require(".");
const { v4: uuidv4 } = require("uuid");
const getPath = require("../helpers/getPath");
const { generateFile, getFile } = require("../../modules/generatorServices");
const { printMsg, UpFirst } = require("../../modules/helpers/wordsManager");
const { getEndpointNames } = require("../../modules/Utils/routerUtils");

const pathData = getPath("data");
const pathRoutes = getPath("routes");
const services = {};

services.getAllRoutes = async () => {
  return await getFile(pathData + "/routesData.json");
};

services.createRouteModule = async (routeModule) => {
  const routeList = await services.getAllRoutes();
  const moduleGetting = routeList.find((route) => route.module === routeModule);

  throwError("bad_request", 400, "Route module name is required.", !routeModule);
  throwError("bad_request", 400, "Route module already exists.", !!moduleGetting);

  routeList.push({ module: routeModule, routesList: [] });

  await generateFile("routesData", pathData, JSON.stringify(routeList), "json");

  printMsg(`Route module ${routeModule} created.`);
};

services.createRoute = async (routeModule, endpoint, method, nameController) => {

  const routeList = await services.getAllRoutes();
  const moduleGet = routeList.find((route) => route.module === routeModule);

  throwError("bad_request", 400, "Route module name is required.", !routeModule);
  throwError("bad_request", 400, "Route module not exists.", moduleGet === undefined);

  const controllerExist = moduleGet.routesList.find((route) => route.nameController === nameController);

  throwError("bad_request", 400, "Controller name already exists.", controllerExist !== undefined);

  const endpointExist = moduleGet.routesList.find((route) => route.endpoint === endpoint && route.method === method);

  throwError("bad_request", 400, `Endpoint: '${method} - ${endpoint}' already exists.`, endpointExist !== undefined);

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

  printMsg(`Route ${method} - ${endpoint} added.`);
};

services.editRouteModule = async (routeModule, newRouteModule) => {
  const routeList = await services.getAllRoutes();
  const moduleGetting = routeList.find((route) => route.module === routeModule);

  throwError("bad_request", 400, "Route module name is required.", !routeModule);
  throwError("bad_request", 400, "Route module name is required.", !newRouteModule);
  throwError("bad_request", 400, "Route module not found.", moduleGetting === undefined);

  routeList.map((route) => {
    if (route.module === routeModule) {
      route.module = newRouteModule;
    }

  });

  await generateFile("routesData", pathData, JSON.stringify(routeList), "json");

  printMsg(`Route module ${routeModule} edited to ${newRouteModule}.`);
};

services.editRoute = async (id, routeModule, newEndpoint, newMethod, newControllerName) => {
  f
  const routeList = await services.getAllRoutes();
  const moduleGetting = routeList.find((route) => route.module === routeModule);
  throwError("bad_request", 400, "Route module name is required.", !routeModule);
  throwError("bad_request", 400, "Route module not found.", moduleGetting === undefined);

  const routeGetting = moduleGetting.routesList.find((route) => route.id === id);

  throwError("bad_request", 400, `Endpoint not found.`, !routeGetting);

  const newController = generateControllerName(routeModule, newEndpoint, newMethod);

  routeList.forEach((route) => {

    if (route.module === routeModule)
      route.routesList.map((route) => {
        if (route.id === id) {
          route.endpoint = newEndpoint ? newEndpoint : route.endpoint;
          route.method = newMethod ? newMethod : route.method;
          route.nameController = newControllerName ? newControllerName : newController;
        }
      });

  });

  await generateFile("routesData", pathData, JSON.stringify(routeList), "json");

  printMsg(`Route ${newMethod} - ${newEndpoint} edited.`);
};

services.deleteRoute = async (id, routeModule) => {

  try {
    const routeList = await services.getAllRoutes();
    const moduleGetting = routeList.find((route) => route.module === routeModule);

    throwError("bad_request", 400, "Route module name is required.", !routeModule);
    throwError("bad_request", 400, "Route module not found.", moduleGetting === undefined);

    const routeGetting = moduleGetting.routesList.find((route) => route.id === id);

    throwError("bad_request", 400, `Endpoint not found.`, !routeGetting);

    routeList.forEach((route) => {

      if (route.module === routeModule)
        route.routesList = route.routesList.filter((route) => route.id !== id);

    });

    await generateFile("routesData", pathData, JSON.stringify(routeList), "json");

    printMsg(`Route ${routeGetting.method} - ${routeGetting.endpoint} deleted.`);
  } catch (error) {

  }
};

services.deleteRouteModule = async (routeModule) => {

  const routeList = await services.getAllRoutes();
  const moduleGetting = routeList.find((route) => route.module === routeModule);

  throwError("bad_request", 400, "Route module name is required.", !routeModule);
  throwError("bad_request", 400, "Route module not found.", moduleGetting === undefined);

  const newRouteList = routeList.filter((route) => route.module !== routeModule);

  await generateFile("routesData", pathData, JSON.stringify(newRouteList), "json");

  printMsg(`Route module ${routeModule} deleted.`);
};

//? microservices

const generateControllerName = (routeModule, endpoint, method) => {

  let controllerName;
  const { endpointList, params } = getEndpointNames(endpoint, false);


  for (let i = 0; i < endpointList.length; i++)
    routeModule += UpFirst(endpointList[i]);

  controllerName = method + UpFirst(routeModule);
  if (params) controllerName += "By" + UpFirst(params);

  return controllerName;
}


module.exports = services;
