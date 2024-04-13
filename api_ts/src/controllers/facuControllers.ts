import controller from "./interfaces";
import { throwError } from "../helpers/customError";
import { Request, Response } from "express";
    
//$C_START

//Delete - /facu/chau/:id
controller.deleteFacuChauById = async ({ params, query, body }, res) => {
  const data: any = {controllerName: 'deleteFacuChau'};
    
  res.status(200).json(data);
};

//Patch - /facu/test
controller.patchFacuTest = async ({ params, query, body }, res) => {
  const data: any = {controllerName: 'patchFacuTest'};
    
  res.status(200).json(data);
};

//Get - /facu/ready
controller.getFacuReady = async ({ params, query, body }, res) => {
  const data: any = {controllerName: 'getFacu'};
    console.log("sdasdasdas");
  res.status(200).json(data);
};

export default controller;