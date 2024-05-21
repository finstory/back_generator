//<IMPORTS>
import throwError from "@throw_error";
import controller from "@user/_models/user-controllers.model";
import S from "@services";

//<CONTROLLERS>

controller.getUser = async ({ params, query, body }, res) => {
  const data: any = { controllerName: "getUser" };
  // S.product.test();
  await S.user.connectToProduct();
  // throwError("conflict", "id");
  // console.log(query.age);

  res.status(200).json(query);
};

controller.postUserCreate = async ({ params, query, body }, res) => {
  const data: any = { controllerName: "getUser" };

  res.status(200).json(data);
};

export default controller;