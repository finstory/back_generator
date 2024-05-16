//<IMPORTS>
import controller from "../_validator";

//<CONTROLLERS>

controller.getUser = async ({ params, query, body }, res) => {
    const data: any = { controllerName: "getUser" };

    // console.log(query.id);

    res.status(200).json(params.id);
};

controller.postUserCreate = async ({ params, query, body }, res) => {
    const data: any = { controllerName: "getUser" };

    res.status(200).json(data);
};

export default controller;