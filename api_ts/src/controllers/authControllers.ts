import controller from "../interfaces/controllers/auth/_index";
import { throwError } from "../helpers/customError";
//$C_START

controller.getAuthFacu = async ({ params, query, body }, res) => {
  const data: any = {controllerName: 'getAuthFacu'};
    
  res.status(200).json(data);
};

export default controller;