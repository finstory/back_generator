//<IMPORTS>
import throwError from "@throw_error";
import { controller, validation } from "./_entities/other-controller.entity";
import S from "@services";

//<CONTROLLERS>

controller.userGetting2 = async ({ params, query, body }, res) => {
    const data: any = { controllerName: userGetting2 };

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
