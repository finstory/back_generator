//<IMPORTS>
import throwError from "@throw_error";
import { controller, validation } from "@/app/user/_entities/user-controller.entity";
import S from "@services";
//<CONTROLLERS>

controller.getUser = async ({ body: { user } }, res) => {

    throwError("bad_request", "id");

    res.status(200).json({ user });
};

controller.postUserCreate = async ({ params, query, body }, res) => {
    const data: any = { controllerName: "getUser" };

    res.status(200).json(data);
};

//<EXPORTS>
export { validation, controller };