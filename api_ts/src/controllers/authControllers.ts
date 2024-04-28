//<IMPORTS>
import controller from "../interfaces/controllers/auth/_index";
import { throwError } from "../helpers/customError";

//<CONTROLLERS>

controller.getAuth = async ({ params, query, body }, res) => {
  const data: any = { controllerName: "getAuth" };
    
  res.status(200).json(data);
};

controller.postAuthLogin = async ({ params, query, body }, res) => {
  const data: any = { controllerName: "postAuthLogin" };
    
  res.status(200).json(data);
};

export default controller;
