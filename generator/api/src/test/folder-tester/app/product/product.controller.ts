//<IMPORTS>
import { controller, validation } from "./_entities/product-controller.entity";
import controllerSettings from "@config/controllers/controller-settings";
import throwError from "@throw_error";
import S from "@services";

//<CONTROLLERS>

controller.patchProductLogin = async ({ params, query, body }, res) => {
    const data: any = { controllerName: "patchProductLogin" };

    res.status(200).json(data);
};

controller.postProduct = async ({ params, query, body }, res) => {
    const data: any = { controllerName: "postProduct" };

    res.status(200).json(data);
};

controller.getProduct = async ({ params, query, body }, res) => {
    const data: any = { controllerName: "getProduct" };

    res.status(200).json(data);
};

//<SETTINGS>
controllerSettings(controller);

//<EXPORTS>
export { validation, controller };
