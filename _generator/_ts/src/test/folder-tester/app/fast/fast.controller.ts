//<IMPORTS>
import { controller, validation } from "./_entities/fast-controller.entity";
import controllerSettings from "@config/controllers/controller-settings";
import throwError from "@throw_error";
import S from "@services";

//<CONTROLLERS>

controller.patchFastChanged = async ({ params, query, body }, res) => {
    const data: any = { controllerName: "postFastChanged" };

    res.status(200).json(data);
};

controller.getFastRegister = async ({ params, query, body }, res) => {
    const data: any = { controllerName: "postFastRegister" };

    res.status(200).json(data);
};

controller.putFastLoginByName = async ({ params, query, body }, res) => {
    const data: any = { controllerName: "postFastLogin" };

    res.status(200).json(data);
};

//<SETTINGS>
controllerSettings(controller);

//<EXPORTS>
export { validation, controller };
