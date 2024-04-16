import controller from "./interfaces";
import { throwError } from "../helpers/customError";
import { Request, Response } from "express";
    
//$C_START


controller.getManager = async ({ params, query, body }, res) => {
  const data: any = {controllerName: 'getManager'};
    
  res.status(200).json(data);
};

controller.putManagerReadyOnline = async ({ params, query, body }, res) => {
  const data: any = {controllerName: 'getManagerReadyPatch'};
    
  res.status(200).json(data);
};

controller.postManagerLogin = async ({ params, query, body }, res) => {
  const data: any = {controllerName: 'getManagerLogin'};
    
  res.status(200).json(data);
};

export default controller;