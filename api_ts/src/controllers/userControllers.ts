//<IMPORTS>
import controller from "../interfaces/controllers/user/_index";
import { throwError } from "../helpers/customError";

//<CONTROLLERS>

controller.getUser = async ({ params, query, body }, res) => {
  const data: any = { controllerName: "getUser" };
    
  res.status(200).json(data);
};

controller.postUserCreate = async ({ params, query, body }, res) => {
  const data: any = { controllerName: "getUser" };

  res.status(200).json(data);
};

export default controller;