const { Router } = require("express");
const { addRouter } = require("../../modules/routes/routerManager");
const { sendResponse, sendError } = require("../helpers/managerController");
const getPath = require("../helpers/getPath");
const {
  createRouteModule,
  getAllRoutes,
  createRoute,
  editRouteModule,
  editRoute,
  deleteRoute,
  deleteRouteModule,
  generateControllerName,
} = require("../services/routeServices");
const { createControllerFile,
  deleteControllerFile,
  addController,
  editController,
  deleteController
} = require("../services/controllerServices");

const interfaceS = require("../services/interfaceServices");

const router = Router();

router.get("/all", async (req, res) => {
  try {
    const routesList = await getAllRoutes();
    sendResponse(res, 200, routesList);
  } catch (error) {
    sendError(res, error);
  }
});

router.post("/", async (req, res) => {
  try {
    const { routeModule, endpoint, method, controllerName } = req.body;
    const newControllerName = controllerName ? controllerName : generateControllerName(routeModule, endpoint, method);

    await createRoute(routeModule, endpoint, method, controllerName);
    await addController(routeModule, newControllerName);
    

    sendResponse(res, 200, "Endpoint added.");
  } catch (error) {
    sendError(res, error);
  }
});

router.post("/module", async (req, res) => {
  try {
    const { routeModule } = req.body;

    await createRouteModule(routeModule);
    await createControllerFile(routeModule);
    await interfaceS.createIndexController(routeModule);

    sendResponse(res, 200, `Route module ${routeModule} created.`);
  } catch (error) {
    sendError(res, error);
  }
});

router.patch("/module", async (req, res) => {
  try {
    const { routeModule, newRouteModule } = req.body;
    await editRouteModule(routeModule, newRouteModule);

    sendResponse(res, 200, `Route module '${routeModule}' edited to '${newRouteModule}'.`);
  } catch (error) {
    sendError(res, error);
  }
});

router.patch("/", async (req, res) => {
  try {
    const { id, routeModule, newEndpoint, newMethod, controllerName } = req.body;
    const newControllerName = generateControllerName(routeModule, newEndpoint, newMethod);

    await editRoute(id, routeModule, newEndpoint, newMethod);
    await editController(routeModule, controllerName, newControllerName);

    sendResponse(res, 200, "Endpoint edited.");
  } catch (error) {
    sendError(res, error);
  }
});

router.delete("/", async (req, res) => {
  try {
    const { routeModule, id, controllerName, includeController = false } = req.body;

    await deleteRoute(id, routeModule);
    if (includeController) await deleteController(routeModule, controllerName);

    sendResponse(res, 200, "Endpoint deleted.");
  } catch (error) {
    sendError(res, error);
  }
});

router.delete("/module", async (req, res) => {
  try {
    const { routeModule } = req.body;

    await deleteRouteModule(routeModule);
    // await deleteControllerFile(routeModule);
    sendResponse(res, 200, "Route module deleted.");
  } catch (error) {
    sendError(res, error);
  }
});

module.exports = router;
