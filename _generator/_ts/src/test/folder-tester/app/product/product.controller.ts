//<IMPORTS>
import { controller, validation } from "./_entities/product-controller.entity";
import controllerSettings from "@config/controllers/controller-settings";
import throwError from "@throw_error";
import S from "@services";

//<CONTROLLERS>

controller.postProductRegisterSd = async ({ params, query, body }, res) => {
    const data: any = { controllerName: "postProductRegister" };

    res.status(200).json(data);
};

controller.patchProductRegisterById = async ({ params, query, body }, res) => {
    const data: any = { controllerName: "getProductRegister" };

    res.status(200).json(data);
};

//<SETTINGS>
controllerSettings(controller);

//<EXPORTS>
export { validation, controller };
