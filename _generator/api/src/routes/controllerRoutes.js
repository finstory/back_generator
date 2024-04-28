const { Router } = require("express");
const { sendResponse, sendError } = require("../helpers/managerController");

const S = require("../utils/service/injector");
const router = Router();

router.get("/line", async (req, res) => {
    try {
        const { routeModule, controllerName } = req.query;

        const list = await S.controller.getPosController(routeModule, controllerName);

        sendResponse(res, 200, list);
    } catch (error) {
        sendError(res, error);
    }
});

// router.post("/view_lines_in_code", async (req, res) => {
//     try {

//         const routesList = await getAllRoutes();
//         await addEndpointComments(routesList);

//         sendResponse(res, 200, "Comments active in the code.");
//     } catch (error) {
//         sendError(res, error);
//     }
// });

// router.delete("/view_lines_in_code", async (req, res) => {
//     try {

//         const routesList = await getAllRoutes();
//         await removeEndpointComments(routesList);

//         sendResponse(res, 200, "Comments removes in the code.");
//     } catch (error) {
//         sendError(res, error);
//     }
// });




router.post("/reload_types", async (req, res) => {
    try {
        const { routeModule, controllerName } = req.body;
        // await reloadControllerTypes(routeModule, controllerName);
        sendResponse(res, 200, `Types reload for ${controllerName} from VSC.`);
    } catch (error) {
        sendError(res, error);
    }
});

router.post("/types", async (req, res) => {
    try {
        const { routeModule, controllerName, requestType, newType } = req.body;
        await S.interface.addControllerTypes(routeModule, controllerName, requestType, newType);
        await S.route.addRouteTypes(routeModule, controllerName, requestType, newType);
        sendResponse(res, 200, `Type '${newType.key}' added in ${requestType} .`);

    } catch (error) {
        sendError(res, error);
    }
});

router.patch("/types", async (req, res) => {
    try {
        const { routeModule, controllerName, requestType, newType } = req.body;
        await S.interface.renameControllerTypes(routeModule, controllerName, requestType, newType);
        await S.route.editRouteTypes(routeModule, controllerName, requestType, newType);
        sendResponse(res, 200, `Type '${controllerName}' updated.`);

    } catch (error) {
        sendError(res, error);
    }
});

router.delete("/types", async (req, res) => {
    try {
        const { routeModule, controllerName, requestType, key } = req.body;
        await S.interface.removeControllerTypes(routeModule, controllerName, requestType, key);
        // await S.route.removeRouteTypes(routeModule, controllerName, requestType, key);
        sendResponse(res, 200, `Type '${controllerName}' removed.`);
    } catch (error) {
        sendError(res, error);
    }
});


module.exports = router;