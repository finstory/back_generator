//<IMPORTS>
import throwError from "@throw_error";
import { controller, validation } from "./_entities/auth-controller.entity";
import S from "@services";

//<CONTROLLERS>

controller.jejeUserCreate = async ({ params, query, body }, res) => {
    const data: any = { controllerName: "getUser" };

    res.status(200).json(data);
};

//<EXPORTS>
export { validation, controller };
