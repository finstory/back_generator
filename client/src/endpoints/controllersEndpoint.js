import api from "../../helpers/axios";

const endpoints = {
  postControllerTypes: async (
    routeModule,
    controllerName,
    requestType,
    newType = { prevKey, key, type, elementType, optional, value }
  ) => { },
  patchControllerTypes: async (
    routeModule,
    controllerName,
    requestType,
    newType = { prevKey, key, type, elementType, optional, value }
  ) => { },
  deleteControllerTypes: async (
    routeModule,
    controllerName,
    requestType,
    key
  ) => { },
  getControllerLine: async (routeModule, controllerName) => { },
};

const basePath = "controller/";

endpoints.postControllerTypes = async (
  routeModule,
  controllerName,
  requestType,
  newType
) => {
  try {
    if (!routeModule && !controllerName && !requestType) return;

    const response = await api.post(basePath + "types", {
      routeModule,
      controllerName,
      requestType,
      newType,
    });

    return response.data;

  } catch (error) {
    throw new Error(error.response.data.payload || error.massage);
  }
};

endpoints.patchControllerTypes = async (
  routeModule,
  controllerName,
  requestType,
  newType
) => {
  try {
    if (!routeModule && !controllerName && !requestType) return;

    const response = await api.patch(basePath + "types", {
      routeModule,
      controllerName,
      requestType,
      newType,
    });

    return response.data;

  } catch (error) {
    throw new Error(error.response.data.payload || error.massage);
  }
};

endpoints.deleteControllerTypes = async (
  routeModule,
  controllerName,
  requestType,
  key
) => {
  try {
    if (!routeModule && !controllerName && !requestType && !key) return;

    const response = await api.delete(basePath + "types", {
      data: {
        routeModule,
        controllerName,
        requestType,
        key,
      },
    });

    return response.data;

  } catch (error) {
    throw new Error(error.response.data.payload || error.massage);
  }
};

endpoints.getControllerLine = async (routeModule, controllerName) => {
  try {
    if (!routeModule && !controllerName) return;

    const response = await api.get(basePath + "line", {
      params: {
        routeModule,
        controllerName,
      },
    });

    return response.data;

  } catch (error) {
    throw new Error(error.response.data.payload || error.massage);
  }
};

export default endpoints;
