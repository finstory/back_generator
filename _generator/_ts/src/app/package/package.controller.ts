//<IMPORTS>
import { controller, validation } from "@package/_entities/package-controller.entity";
import controllerSettings from "@config/controllers/controller-settings";
import throwError from "@throw_error";
import S from "@services";

//<CONTROLLERS>

controller.getAllPackage = async ({ params, query, body }, res) => {

    const data = await S.package.getAllModuleDB();

    res.status(200).json(data);
};

controller.postPackage = async ({ body: { moduleName } }, res) => {

    !moduleName && throwError("PACKAGE", "bad_request", "moduleName");

    const data = await S.package.createModule(moduleName);

    res.status(200).json(data);
};

controller.patchPackageRename = async ({ params: { moduleName }, body: { newModuleName } }, res) => {
    !moduleName && throwError("PACKAGE", "bad_request", "moduleName");
    !newModuleName && throwError("PACKAGE", "bad_request", "newModuleName");

    res.status(200).json(`Module '${moduleName}' renamed to '${newModuleName}' successfully.`);
};

controller.deletePackage = async ({ params: { moduleName } }, res) => {
    !moduleName && throwError("PACKAGE", "bad_request", "moduleName");

    await S.package.deleteModule(moduleName);

    res.status(200).json(`Module '${moduleName}' deleted successfully.`);

};

//<SETTINGS>
controllerSettings(controller);

//<EXPORTS>
export { validation, controller };