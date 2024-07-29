//<IMPORTS>
import { controller, validation } from "./_entities/user-controller.entity";
import controllerSettings from "@config/controllers/controller-settings";
import throwError from "@throw_error";
import S from "@services";

//<CONTROLLERS>

controller.getUser = async ({ params, query, body }, res) => {
    const data: any = { controllerName: "getUser" };

    res.status(200).json(data);
};

controller.postUserRegister = async ({ params, query, body }, res) => {
    const data: any = { controllerName: "postUserRegister" };

    res.status(200).json(data);
};

//<SETTINGS>
controllerSettings(controller);

//<EXPORTS>
export { validation, controller };
