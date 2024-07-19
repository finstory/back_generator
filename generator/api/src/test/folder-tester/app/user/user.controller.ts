//<IMPORTS>
import { controller, validation } from "./_entities/user-controller.entity";
import controllerSettings from "@config/controllers/controller-settings";
import throwError from "@throw_error";
import S from "@services";

//<CONTROLLERS>

controller.putUser = async ({ params, query, body }, res) => {
    const data: any = { controllerName: "putUser" };

    res.status(200).json(data);
};

controller.deleteUser = async ({ params, query, body }, res) => {
    const data: any = { controllerName: "deleteUser" };

    res.status(200).json(data);
};

controller.patchUser = async ({ params, query, body }, res) => {
    const data: any = { controllerName: "patchUser" };

    res.status(200).json(data);
};

controller.postUser = async ({ params, query, body }, res) => {
    const data: any = { controllerName: "postUser" };

    res.status(200).json(data);
};

controller.getUserLoginUser = async ({ params, query, body }, res) => {
    const data: any = { controllerName: "getUser" };

    res.status(200).json(data);
};

controller.deleteUserRegister = async ({ params, query, body }, res) => {
    const data: any = { controllerName: "getUserRegister" };

    res.status(200).json(data);
};

//<SETTINGS>
controllerSettings(controller);

//<EXPORTS>
export { validation, controller };
