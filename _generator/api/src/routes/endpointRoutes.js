const { Router } = require("express");
const { addRouter } = require("../../modules/routes/routerManager");
const { sendResponse, sendError } = require("../helpers/managerController");
const { getFile } = require("../../modules/generatorServices");
const getPath = require("../helpers/getPath");
const {
  createRouteModule,
  getAllRoutes,
  createRoute,
} = require("../services/routesSerivces");
const { printMsg } = require("../../modules/helpers/wordsManager");

const router = Router();
const pathRoutes = getPath("routes");

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

    sendResponse(res, 200, "Route module created.");
  } catch (error) {
    sendError(res, error);
  }
});

router.get("/all", async (req, res) => {
  try {
    const routesList = await getAllRoutes();
    sendResponse(res, 200, routesList);
  } catch (error) {
    sendError(res, error);
  }
});

module.exports = router;
