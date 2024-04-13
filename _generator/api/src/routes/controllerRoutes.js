const { Router } = require("express");
const { sendResponse, sendError } = require("../helpers/managerController");
const { getIndexController } = require("../services/controllerServices");
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

module.exports = router;