//<IMPORTS>
import { controller, validation } from "./_entities/validation-controller.entity";
import controllerSettings from "@config/controllers/controller-settings";
import throwError from "@throw_error";
import S from "@services";

//<CONTROLLERS>

controller.putValidationRequestParams = async ({ params, query, body }, res) => {
    const data: any = { controllerName: "putValidationRequestParams" };

    res.status(200).json(data);
};

//<SETTINGS>
controllerSettings(controller);

//<EXPORTS>
export { validation, controller };
