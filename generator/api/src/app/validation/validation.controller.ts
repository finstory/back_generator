//<IMPORTS>
import { controller, validation } from "./_entities/validation-controller.entity";
import controllerSettings from "@config/controllers/controller-settings";
import throwError from "@throw_error";
import S from "@services";
import { json_db } from "@/_common/db/json";
import { RequestParamsDto } from "../endpoint/_dtos/request-params.dto";

//<CONTROLLERS>

controller.patchValidationReload = async ({ params, query, body: { controllerName, moduleName } }, res) => {
    const getAllProperties = S.validation.requestParams.getAllProperties;
    const updateData = {};
    const properties: RequestParamsDto["from"][]
        = ["params", "query", "body", "response_body"];

    for (const property of properties) {
        updateData[property] = await getAllProperties(moduleName, controllerName, property);
    }

    await json_db.requestParams.update(moduleName, controllerName, updateData);

    res.status(200).json(`Validation to ${controllerName} has been reloaded`);
};

controller.postValidationRequestParams = async ({ params, query, body }, res) => {
    const data: any = { controllerName: "postValidationRequestParams" };

    res.status(200).json(data);
};

controller.patchValidationRequestParams = async ({ params, query, body }, res) => {
    const data: any = { controllerName: "putValidationRequestParams" };

    res.status(200).json(data);
};

controller.deleteValidationRequestParams = async ({ params, query, body }, res) => {
    const data: any = { controllerName: "deleteValidationRequestParams" };

    res.status(200).json(data);
};

controller.postValidationValidateParams = async ({ params, query, body }, res) => {
    const data: any = { controllerName: "postValidationValidateParams" };

    res.status(200).json(data);
};

controller.patchValidationValidateParams = async ({ params, query, body }, res) => {
    const data: any = { controllerName: "patchValidationValidateParams" };

    res.status(200).json(data);
};

controller.deleteValidationValidateParams = async ({ params, query, body }, res) => {
    const data: any = { controllerName: "deleteValidationValidateParams" };

    res.status(200).json(data);
};

//<SETTINGS>
controllerSettings(controller);

//<EXPORTS>
export { validation, controller };
