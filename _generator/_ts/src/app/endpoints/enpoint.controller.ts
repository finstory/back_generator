//<IMPORTS>
import throwError from "@throw_error";
import controller from "@user/_models/user-controllers.model";
import S from "@services";

//<CONTROLLERS>

controller.getUser = async ({ params, query, body }, res) => {
    const data: any = { controllerName: "getUser" };
    // S.product.test();
    throwError("bad_request", "id");
    await S.user.connectToProduct();

    console.log(query.age);
    console.log(query);

    res.status(200).json(query.age);
};

controller.postUserCreate = async ({ params, query, body }, res) => {
    const data: any = { controllerName: "getUser" };

    res.status(200).json(data);
};

export default controller;