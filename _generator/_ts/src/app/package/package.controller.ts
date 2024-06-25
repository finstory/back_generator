//<IMPORTS>
import throwError from "@throw_error";
import { controller, validation } from "@package/_entities/package-controller.entity";
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

controller.deletePackage = async ({ params: { moduleName } }, res) => {

    !moduleName && throwError("PACKAGE", "bad_request", "moduleName");

    const data = await S.package.deleteModule(moduleName);

    res.status(200).json(data);
};


//<EXPORTS>
export { validation, controller };