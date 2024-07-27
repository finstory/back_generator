//<IMPORTS>
import { controller, validation } from "./_entities/validation-controller.entity";
import controllerSettings from "@config/controllers/controller-settings";
import throwError from "@throw_error";
import S from "@services";

//<CONTROLLERS>

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
