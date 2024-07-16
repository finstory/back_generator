//<IMPORTS>
import throwError from "@throw_error";
import { controller, validation } from "@/app/user/_entities/user-controller.entity";
import S from "@/_common/services/all-services";
//<CONTROLLERS>

controller.getUser = async ({ body }, res) => {

    // throwError("not_found", "id");

    res.status(200).json({ });
};

controller.postUserCreate = async ({ params, query, body }, res) => {
    const data: any = { controllerName: "getUser" };

    res.status(200).json(data);
};

//<EXPORTS>
export { validation, controller };