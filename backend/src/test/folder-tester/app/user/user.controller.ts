//<IMPORTS>
import { controller, validation } from "./_entities/user-controller.entity";
import controllerSettings from "@config/controllers/controller-settings";
import throwError from "@throw_error";
import S from "@services";

//<CONTROLLERS>

//<SETTINGS>
controllerSettings(controller);

//<EXPORTS>
export { validation, controller };
