//<IMPORTS>
import { controller, validation } from "./_entities/endpoint-controller.entity";
import controllerSettings from "@config/controllers/controller-settings";
import throwError from "@throw_error";
import S from "@services";
import { json_db } from "@/_common/db/json";


//<CONTROLLERS>

controller.postEndpoint = async ({ body: { moduleName, route } }, res) => {

    const db_route = await json_db.route.create(moduleName, route);

    await S.endpoint.expressRoute.createRoute(moduleName, db_route);

    await S.validation.model.createFile(moduleName, db_route.controllerName);
    await S.validation.model.addBarrelExport(moduleName, db_route.controllerName);

    await S.controller.entity.createControllerEntity(moduleName, db_route.controllerName);
    await S.controller.file.createController(moduleName, db_route.controllerName);

    res.status(200).json(`Endpoint ${moduleName} created successfully.`);
};

controller.patchEndpoint = async ({ body: { moduleName, route, newRoute } }, res) => {

    const db_route = await json_db.route.edit(moduleName, route, newRoute);
    const controllerName = newRoute.controllerName || db_route.controllerName;
    await S.endpoint.expressRoute.editRoute(moduleName, route, { controllerName, ...newRoute });

    await S.validation.model.renameBarrelExport(moduleName, route.controllerName, controllerName);
    await S.validation.model.renameFile(moduleName, route.controllerName, controllerName);

    await S.controller.entity.editControllerEntity(moduleName, route.controllerName, controllerName);
    await S.controller.file.renameController(moduleName, route.controllerName, db_route.controllerName);

    res.status(200).json(`Endpoint ${moduleName} edited successfully.`);
};

controller.patchEndpointDescription = async ({ body: { moduleName, route, description } }, res) => {

    await json_db.route.updateDescription(moduleName, route, description);
    res.status(200).json(`Description ${moduleName} edited successfully.`);
};

controller.deleteEndpoint = async ({ body: { moduleName, route } }, res) => {

    await json_db.route.delete(moduleName, route);
    await S.endpoint.expressRoute.removeRoute(moduleName, route);

    await S.validation.model.removeBarrelExport(moduleName, route.controllerName);
    await S.validation.model.removeFile(moduleName, route.controllerName);

    await S.controller.entity.removeControllerEntity(moduleName, route.controllerName);
    await S.controller.file.removeController(moduleName, route.controllerName);

    res.status(200).json(`Endpoint ${moduleName} deleted successfully.`);
};

//<SETTINGS>
controllerSettings(controller);

//<EXPORTS>
export { validation, controller };