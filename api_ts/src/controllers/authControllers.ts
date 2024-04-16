import controller from "./interfaces";
import { throwError } from "../helpers/customError";
import { Request, Response } from "express";
    
//$C_START

controller.deleteAuth = async ({ params, query, body }, res) => {
  const data: any = {controllerName: 'deleteAuth'};
    
  res.status(200).json(data);
};

controller.putAuth = async ({ params, query, body }, res) => {
  const data: any = {controllerName: 'putAuth'};

  res.status(200).json(data);
};

controller.getAuthRamaByEmail = async ({ params, query, body }, res) => {
  const data: any = {controllerName: 'getAuthRama'};
    
  res.status(200).json(data);
};

controller.postAuthLogin = async ({ params, query, body }, res) => {
  const data: any = {controllerName: 'postAuthLogin'};
    
  res.status(200).json(data);
};

export default controller;