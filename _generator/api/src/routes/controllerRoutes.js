const { Router } = require("express");
const { sendResponse, sendError } = require("../helpers/managerController");
const { getIndexController, addEndpointComments, removeEndpointComments } = require("../services/controller/controller.services");
const { getAllRoutes, editRouteTypes } = require("../services/route/route.services");
const { editControllerTypes, reloadControllerTypes } = require("../services/interface/interface.services");
const router = Router();

router.get("/line", async (req, res) => {
    try {
        const { routeModule, controllerName } = req.query;
        const list = await getIndexController(routeModule, controllerName);
        sendResponse(res, 200, list);
    } catch (error) {
        sendError(res, error);
    }
});

router.post("/view_lines_in_code", async (req, res) => {
    try {

        const routesList = await getAllRoutes();
        await addEndpointComments(routesList);

        sendResponse(res, 200, "Comments active in the code.");
    } catch (error) {
        sendError(res, error);
    }
});

router.delete("/view_lines_in_code", async (req, res) => {
    try {

        const routesList = await getAllRoutes();
        await removeEndpointComments(routesList);

        sendResponse(res, 200, "Comments removes in the code.");
    } catch (error) {
        sendError(res, error);
    }
});

router.post("/reload_types", async (req, res) => {
    try {
        const { routeModule, controllerName } = req.body;
        await reloadControllerTypes(routeModule, controllerName);
        sendResponse(res, 200, `Types reload for ${controllerName} from VSC.`);
    } catch (error) {
        sendError(res, error);
    }
});

router.post("/types", async (req, res) => {
    try {

        const { routeModule, controllerName, newTypesList } = req.body;
        await editControllerTypes(routeModule, controllerName, newTypesList);
        await editRouteTypes(routeModule, controllerName, newTypesList);

        sendResponse(res, 200, `Types updated for ${controllerName}.`);

    } catch (error) {
        sendError(res, error);
    }
});


module.exports = router;