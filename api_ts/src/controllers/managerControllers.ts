import controller from "./interfaces";
import { throwError } from "../helpers/customError";
import { Request, Response } from "express";
    
//$C_START

//Get - /manager
controller.getManager = async ({ params, query, body }, res) => {
  const data: any = {controllerName: 'getManager'};
    
  res.status(200).json(data);
};

//Get - /manager/ready/online
controller.getManagerReadyOnline = async ({ params, query, body }, res) => {
  const data: any = {controllerName: 'getManagerReadyPatch'};
    
  res.status(200).json(data);
};

//Post - /manager/login
controller.postManagerLogin = async ({ params, query, body }, res) => {
  const data: any = {controllerName: 'getManagerLogin'};
    
  res.status(200).json(data);
};

export default controller;