import controller from "../interfaces/controllers/user/_index";
import { throwError } from "../helpers/customError";
//$C_START

controller.getUser = async ({ params, query, body }, res) => {
  const data: any = { controllerName: "getUser" };

  res.status(200).json(data);
};

//Get - /user/all
export default controller;
