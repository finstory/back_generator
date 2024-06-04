//<IMPORTS>
import throwError from "@throw_error";
import { controller, validation } from "@package/_entities/package-controller.entity";
import S from "@/_common/config/services/all-services";

//<CONTROLLERS>

controller.getUser = async ({ query }, res) => {
    // S.product.test();
    console.log(query);
    throwError("bad_request", "id");

    res.status(200).json(query.age);
};

controller.postUserCreate = async ({ params, query, body }, res) => {
    const data: any = { controllerName: "getUser" };

    res.status(200).json(data);
};

//<EXPORTS>
export { validation, controller };