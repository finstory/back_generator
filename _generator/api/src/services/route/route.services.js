const { throwError, catchError } = require("../../helpers/customError");
const { v4: uuidv4 } = require("uuid");
const { printMsg, UpFirst } = require("../../../modules/helpers/wordsManager");
const { getEndpointNames } = require("../../../modules/Utils/routerUtils");
const S = require("../../utils/service/injector");
const getPath = require("../../helpers/getPath");

const pathData = getPath("data", "/routesData.json");
const services = {};

S.add("route", services);

services.getAllRoutes = async () => {
  return await S.fs.getFile(pathData, false);
};

services.createRouteModule = async (routeModule) => {
  const routeList = await services.getAllRoutes();
  const moduleGetting = routeList.find((route) => route.module === routeModule);

  throwError("bad_request", 400, "Route module name is required.", !routeModule);
  throwError("bad_request", 400, "Route module already exists.", moduleGetting !== undefined);

  routeList.push({ module: routeModule, routesList: [] });

  await S.fs.createFile(pathData, JSON.stringify(routeList));

  printMsg(`Route module ${routeModule} created.`);
};

services.createRoute = async (routeModule, endpoint, method, controllerName) => {

  const routeList = await services.getAllRoutes();
  const moduleGet = routeList.find((route) => route.module === routeModule);

  throwError("bad_request", 400, "Route module name is required.", !routeModule);
  throwError("bad_request", 400, "Route module not exists.", moduleGet === undefined);

  const controllerExist = moduleGet.routesList.find((route) => route.controllerName === controllerName);

  throwError("bad_request", 400, "Controller name already exists.", controllerExist !== undefined);

  const endpointExist = moduleGet.routesList.find((route) => route.endpoint === endpoint && route.method === method);

  throwError("bad_request", 400, `Endpoint: '${method} - ${endpoint}' already exists.`, endpointExist !== undefined);

  const newController = services.generateControllerName(routeModule, endpoint, method);

  routeList.forEach((route) => {

    if (route.module === routeModule)
      route.routesList.push({
        id: uuidv4(),
        endpoint,
        method,
        description: "Write a description here...",
        controllerName: controllerName ? controllerName : newController,
        middlewares: ["Token", "+"],
        params: [],
        query: [],
        body: [],
        response_body: []
      });

  });

  await S.fs.createFile(pathData, JSON.stringify(routeList));
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

  await S.fs.createFile(pathData, JSON.stringify(routeList));
  printMsg(`Route module ${routeModule} edited to ${newRouteModule}.`);
};

services.editRoute = async (id, routeModule, newEndpoint, newMethod, newControllerName) => {

  const routeList = await services.getAllRoutes();
  const moduleGetting = routeList.find((route) => route.module === routeModule);
  throwError("bad_request", 400, "Route module name is required.", !routeModule);
  throwError("bad_request", 400, "Route module not found.", moduleGetting === undefined);

  const routeGetting = moduleGetting.routesList.find((route) => route.id === id);

  throwError("bad_request", 400, `Endpoint not found.`, !routeGetting);

  const newController = services.generateControllerName(routeModule, newEndpoint, newMethod);

  routeList.forEach((route) => {

    if (route.module === routeModule)
      route.routesList.map((route) => {
        if (route.id === id) {
          route.endpoint = newEndpoint ? newEndpoint : route.endpoint;
          route.method = newMethod ? newMethod : route.method;
          route.controllerName = newControllerName ? newControllerName : newController;
        }
        return route;
      });

  });

  await S.fs.createFile(pathData, JSON.stringify(routeList));

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

    await S.fs.createFile(pathData, JSON.stringify(routeList));

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

  await S.fs.createFile(pathData, JSON.stringify(newRouteList));

  printMsg(`Route module ${routeModule} deleted.`);
};

services.addRouteTypes = async (routeModule, controllerName, requestType, newType) => {
  const routeGetting = await services.getAllRoutes();
  const routeList = routeGetting.find((route) => route.module === routeModule);

  if (routeList) {
    const controllerGetting = routeList.routesList.find((route) => route.controllerName === controllerName);
    if (controllerGetting) {
      controllerGetting[requestType].push({
        // prevKey: newType.key,
        key: newType.key,
        type: newType.type,
        elementType: newType.elementType,
        optional: newType.optional,
        value: newType.value
      });
    }

  }
  await S.fs.createFile(pathData, JSON.stringify(routeGetting));
}

services.editRouteTypes = async (routeModule, controllerName, requestType, newType) => {
  const routeGetting = await services.getAllRoutes();
  const routeList = routeGetting.find((route) => route.module === routeModule);

  if (routeList) {
    const controllerGetting = routeList.routesList.find((route) => route.controllerName === controllerName);
    if (controllerGetting) {
      const typeGetting = controllerGetting[requestType].find((type) => type.key === newType.prevKey);
      if (typeGetting) {
        // typeGetting.prevKey = newType.prevKey;
        typeGetting.key = newType.key;
        typeGetting.type = newType.type;
        typeGetting.elementType = newType.elementType;
        typeGetting.optional = newType.optional;
        typeGetting.value = newType.value;
      }
    }

  }
  await S.fs.createFile(pathData, JSON.stringify(routeGetting));
}

services.removeRouteTypes = async (routeModule, controllerName, requestType, key) => {
  const routeGetting = await services.getAllRoutes();
  const routeList = routeGetting.find((route) => route.module === routeModule);

  if (routeList) {
    const controllerGetting = routeList.routesList.find((route) => route.controllerName === controllerName);
    if (controllerGetting) {
      controllerGetting[requestType] = controllerGetting[requestType].filter((type) => type.key !== key);
    }

  }
  await S.fs.createFile(pathData, JSON.stringify(routeGetting));
}

//? microservices

services.generateControllerName = (routeModule, endpoint, method) => {

  let controllerName;
  const { endpointList, params } = getEndpointNames(endpoint, false);

  for (let i = 0; i < endpointList.length; i++)
    routeModule += UpFirst(endpointList[i]);

  controllerName = method + UpFirst(routeModule);
  if (params) controllerName += "By" + UpFirst(params);

  return controllerName;
}


const main = async () => {
  try {
    const newType = { prevKey: "fern", key: 'newRandom', type: "dds", elementType: "array", optional: false, value: "sdsdsd" };
    await services.addRouteTypes("auth", "getAuthByEmail", "response_body", newType);
    //  await services.deleteRouteTypes("auth", "getAuthByEmail", "params", "newRandom");
  } catch (error) {
    catchError(error);
  }
};
// main();

module.exports = services;
