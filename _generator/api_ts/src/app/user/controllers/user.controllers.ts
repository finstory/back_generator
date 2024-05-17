//<IMPORTS>
import controller from "@/app/user/_entities/UserControllers.entity";
import S from "@services";

//<CONTROLLERS>

controller.getUser = async ({ params, query, body }, res) => {
    const data: any = { controllerName: "getUser" };
    // S.product.test();
    // S.user.connectToProduct();
    // console.log(query.id);
    // console.log(query);    
    res.status(200).json(body);
};

controller.postUserCreate = async ({ params, query, body }, res) => {
    const data: any = { controllerName: "getUser" };

    res.status(200).json(data);
};

export default controller;