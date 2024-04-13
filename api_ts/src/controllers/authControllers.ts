import controller from "./interfaces";
import { throwError } from "../helpers/customError";
import { Request, Response } from "express";
    
//$C_START
   
//% GET - /users/:id
controller.putAuthProduct = async ({ params, query, body }, res) => {
  const data: any = {controllerName: 'getAuthProduct'};
    
  res.status(200).json(data);
};

export default controller;