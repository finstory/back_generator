const { Router } = require("express");
const { sendResponse, sendError } = require("../helpers/managerController");
const { S } = require("../utils/service/injector");

const router = Router();

router.get("/all", async (req, res) => {
  try {
    const routesList = await S.route.getAllRoutes();
    console.log(routesList)
    sendResponse(res, 200, routesList);
  } catch (error) {
    sendError(res, error);
  }
});

router.post("/", async (req, res) => {
  try {
    const { routeModule, endpoint, method, controllerName } = req.body;
    const newControllerName = controllerName ? controllerName : S.route.generateControllerName(routeModule, endpoint, method);

    await S.route.createRoute(routeModule, endpoint, method);
    await S.controller.addController(routeModule, newControllerName);
    // await interfaceS.addControllerInterface(routeModule, newControllerName);

    sendResponse(res, 200, "Endpoint added.");
  } catch (error) {
    sendError(res, error);
  }
});

router.post("/module", async (req, res) => {
  try {
    const { routeModule } = req.body;

    await S.route.createRouteModule(routeModule);
    await S.controller.createControllerFile(routeModule);
    // await interfaceS.createIndexController(routeModule);
    await S.controller.reloadIndexController();

    sendResponse(res, 200, `Route module ${routeModule} created.`);
  } catch (error) {
    sendError(res, error);
  }
});

router.patch("/module", async (req, res) => {
  try {
    const { routeModule, newRouteModule } = req.body;
    await S.route.editRouteModule(routeModule, newRouteModule);
    await S.controller.reloadIndexController();

    sendResponse(res, 200, `Route module '${routeModule}' edited to '${newRouteModule}'.`);
  } catch (error) {
    sendError(res, error);
  }
});

router.patch("/", async (req, res) => {
  try {
    const { id, routeModule, newEndpoint, newMethod, controllerName } = req.body;
    const newControllerName = S.route.generateControllerName(routeModule, newEndpoint, newMethod);

    await S.route.editRoute(id, routeModule, newEndpoint, newMethod);
    await S.controller.renameController(routeModule, controllerName, newControllerName);
    // await interfaceS.editControllerInterface(routeModule, controllerName, newControllerName);
    sendResponse(res, 200, "Endpoint & Controller edited.");
  } catch (error) {
    sendError(res, error);
  }
});

router.delete("/", async (req, res) => {
  try {
    const { routeModule, id, controllerName, includeController = false } = req.body;

    await S.route.deleteRoute(id, routeModule);
    if (includeController) {
      await S.controller.deleteController(routeModule, controllerName);
      // await interfaceS.removeControllerInterface(routeModule, controllerName);

    }
    sendResponse(res, 200, "Endpoint deleted.");
  } catch (error) {
    sendError(res, error);
  }
});

router.delete("/module", async (req, res) => {
  try {
    const { routeModule } = req.body;

    await S.route.deleteRouteModule(routeModule);
    await S.controller.deleteControllerFile(routeModule);
    await S.controller.reloadIndexController();
    sendResponse(res, 200, "Route module deleted.");
  } catch (error) {
    sendError(res, error);
  }
});

module.exports = router;
