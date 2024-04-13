import controller from "./interfaces";
import { throwError } from "../helpers/customError";
import { Request, Response } from "express";

//$C_START

//% GET - /users/:id
controller.getFacuAuth = async ({ params, query, body }, res) => {
  const data: any = { controllerName: "getFacuAuth" };

  res.status(200).json(data);
};

//% GET - /users/:id
controller.getFacuVea = async ({ params, query, body }, res) => {
  const data: any = { controllerName: "getFacuVea" };

  res.status(200).json(data);
};

//% GET - /users/:id
export default controller;
