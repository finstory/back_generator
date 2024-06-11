//<IMPORTS>
import throwError from "@throw_error";
import { controller, validation } from "./_entities/auth-controller.entity";
import S from "@services";

//<CONTROLLERS>

controller.getEmailUserById = async ({ params: { id }, query, body }, res) => {
    const data: any = { controllerName: "userGetting2" };

    res.status(200).json(data);
};

controller.userGetting = async ({ params, query, body }, res) => {
    const data: any = { controllerName: userGetting };

    res.status(200).json(data);
};

controller.postUserCreate = async ({ params, query, body }, res) => {
    const data: any = { controllerName: "getUser" };

    res.status(200).json(data);
};

//<EXPORTS>
export { validation, controller };
