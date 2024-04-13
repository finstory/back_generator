const { Router } = require("express");
const { sendResponse, sendError } = require("../helpers/managerController");
const { getIndexController, addEndpointComments, removeEndpointComments } = require("../services/controllerServices");
const { getAllRoutes } = require("../services/routeServices");
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

module.exports = router;