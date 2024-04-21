import controller from "../interfaces/controllers/facu/_index";
import { throwError } from "../helpers/customError";
//$C_START

controller.patchFacu = async ({ params, query, body }, res) => {
  const data: any = { controllerName: "patchFacu" };

  res.status(200).json(data);
};

controller.deleteFacuLook = async ({ params, query, body }, res) => {
  const data: any = { controllerName: "deleteFacu" };

  res.status(200).json(data);
};

controller.patchFacuOher = async ({ params, query, body }, res) => {
  const data: any = { controllerName: "postFacuOher" };

  res.status(200).json(data);
};

controller.getFacu = async ({ params, query, body }, res) => {
  const data: any = { controllerName: "getFacu" };

  res.status(200).json(data);
};

export default controller;
