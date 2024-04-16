import controller from "../interfaces/controllers/auth/_index";
import { throwError } from "../helpers/customError";
//$C_START

//Patch - /auth/password
controller.postAuthLogin = async ({ params, query, body }, res) => {
  const data: any = {controllerName: 'postAuthLogin'};
    
  res.status(200).json(data);
};

export default controller;