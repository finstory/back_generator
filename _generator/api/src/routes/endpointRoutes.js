const { Router } = require("express");
const { addRouter } = require("../../modules/routes/routerManager");
const { sendResponse, sendError } = require("../helpers/managerController");
const { getFile } = require("../../modules/generatorServices");
const getPath = require("../helpers/getPath");
const {
  createRouteModule,
  getAllRoutes,
  createRoute,
  editRouteModule,
  editRoute,
  deleteRoute,
  deleteRouteModule,
} = require("../services/routesSerivces");
const { printMsg } = require("../../modules/helpers/wordsManager");

const router = Router();
const pathRoutes = getPath("routes");

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
    const { routeModule, endpoint, method, nameController } = req.body;
    await createRoute(routeModule, endpoint, method, nameController);

    sendResponse(res, 200, "Endpoint added.");
  } catch (error) {
    sendError(res, error);
  }
});

router.post("/module", async (req, res) => {
  try {
    const { routeModule } = req.body;
    await createRouteModule(routeModule);

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
    const { id, routeModule, newEndpoint, newMethod, newControllerName } = req.body;

    await editRoute(id, routeModule, newEndpoint, newMethod, newControllerName);

    sendResponse(res, 200, "Endpoint edited.");
  } catch (error) {
    sendError(res, error);
  }
});

router.delete("/", async (req, res) => {
  try {
    const { routeModule, id } = req.body;

    await deleteRoute(id, routeModule);

    sendResponse(res, 200, "Endpoint deleted.");
  } catch (error) {
    sendError(res, error);
  }
});

router.delete("/module", async (req, res) => {
  try {
    const { routeModule } = req.body;

    await deleteRouteModule(routeModule);

    sendResponse(res, 200, "Route module deleted.");
  } catch (error) {
    sendError(res, error);
  }
});

module.exports = router;
