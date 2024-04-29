//<IMPORTS>
import controller from "../interfaces/controllers/auth/_index";
import S from "src/services/injector";


//<CONTROLLERS>

controller.postAuthLogin = async ({ params, query, body }, res) => {
  const data: any = { controllerName: "postAuthLogin" };

  res.status(200).json(data);
};

export default controller;