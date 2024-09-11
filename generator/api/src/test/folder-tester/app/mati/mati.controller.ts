//<IMPORTS>
import { controller, validation } from "./_entities/mati-controller.entity";
import controllerSettings from "../config/controllers/controller-settings";
import throwError from "../config/errors/throw-error.ts";
import S from "../services/all-services.ts";

//<CONTROLLERS>

controller.patchMatiHello = async ({ params, query, body }, res) => {
    const data: any = { controllerName: "patchMati" };

    res.status(200).json(data);
};

//<SETTINGS>
controllerSettings(controller);

//<EXPORTS>
export { validation, controller };
