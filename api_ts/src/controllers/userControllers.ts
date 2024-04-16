import controller from "../interfaces/controllers/user/_index";
import { throwError } from "../helpers/customError";
//$C_START

//Get - /user/all
controller.getUserAll = async ({ params, query, body }, res) => {
  const data: any = {controllerName: 'getUserAll'};
    
  res.status(200).json(data);
};

export default controller;