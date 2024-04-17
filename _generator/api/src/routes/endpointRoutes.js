const { Router } = require("express");
const { addRouter } = require("../../modules/routes/routerManager");
const { sendResponse, sendError } = require("../helpers/managerController");
const getPath = require("../helpers/getPath");
const routerS = require("../services/route/route.services");
const controllerS = require("../services/controller/controller.services");

const interfaceS = require("../services/interface/interface.services");

const router = Router();

router.get("/all", async (req, res) => {
  try {
    const routesList = await routerS.getAllRoutes();
    sendResponse(res, 200, routesList);
  } catch (error) {
    sendError(res, error);
  }
});

router.post("/", async (req, res) => {
  try {
    const { routeModule, endpoint, method, controllerName } = req.body;
    const newControllerName = controllerName ? controllerName : routerS.generateControllerName(routeModule, endpoint, method);

    await routerS.createRoute(routeModule, endpoint, method);
    await controllerS.addController(routeModule, newControllerName);
    await interfaceS.addControllerInterface(routeModule, newControllerName);

    sendResponse(res, 200, "Endpoint added.");
  } catch (error) {
    sendError(res, error);
  }
});

router.post("/module", async (req, res) => {
  try {
    const { routeModule } = req.body;

    await routerS.createRouteModule(routeModule);
    await controllerS.createControllerFile(routeModule);
    await interfaceS.createIndexController(routeModule);
    await controllerS.editIndexController();

    sendResponse(res, 200, `Route module ${routeModule} created.`);
  } catch (error) {
    sendError(res, error);
  }
});

router.patch("/module", async (req, res) => {
  try {
    const { routeModule, newRouteModule } = req.body;
    await routerS.editRouteModule(routeModule, newRouteModule);
    await controllerS.editIndexController();

    sendResponse(res, 200, `Route module '${routeModule}' edited to '${newRouteModule}'.`);
  } catch (error) {
    sendError(res, error);
  }
});

router.patch("/", async (req, res) => {
  try {
    const { id, routeModule, newEndpoint, newMethod, controllerName } = req.body;
    const newControllerName = routerS.generateControllerName(routeModule, newEndpoint, newMethod);

    await routerS.editRoute(id, routeModule, newEndpoint, newMethod);
    await controllerS.editController(routeModule, controllerName, newControllerName);
    await interfaceS.editControllerInterface(routeModule, controllerName, newControllerName);

    sendResponse(res, 200, "Endpoint & Controller edited.");
  } catch (error) {
    sendError(res, error);
  }
});

router.delete("/", async (req, res) => {
  try {
    const { routeModule, id, controllerName, includeController = false } = req.body;

    await routerS.deleteRoute(id, routeModule);
    if (includeController) {
      await controllerS.deleteController(routeModule, controllerName);
      await interfaceS.removeControllerInterface(routeModule, controllerName);

    }
    sendResponse(res, 200, "Endpoint deleted.");
  } catch (error) {
    sendError(res, error);
  }
});

router.delete("/module", async (req, res) => {
  try {
    const { routeModule } = req.body;

    await routerS.deleteRouteModule(routeModule);
    await controllerS.deleteControllerFile(routeModule);
    await controllerS.editIndexController();
    sendResponse(res, 200, "Route module deleted.");
  } catch (error) {
    sendError(res, error);
  }
});

module.exports = router;
