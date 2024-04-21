import controller from "../interfaces/controllers/test/_index";
import { throwError } from "../helpers/customError";

//<CONTROLLERS>

controller.sdsd = async ({ params, query, body }, res) => {
  const data: any = { controllerName: "sdsd" };
  
  res.status(200).json(data);
};

controller.getEmail = async ({ params, query, body }, res) => {
  const data: any = { controllerName: "getUser" };

  res.status(200).json(data);
};

controller.sddsd = async ({ params, query, body }, res) => {
  const data: any = { controllerName: "sdsd" };
  
  res.status(200).json(data);
};

export default controller;