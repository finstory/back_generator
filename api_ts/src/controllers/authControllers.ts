import controller from "./interfaces";
import { throwError } from "../helpers/customError";
import { Request, Response } from "express";

//$C_START

//GET /api/auth/:id
controller.getAuth = async ({ params, query, body }, res) => {
  const data: any = { controllerName: "getAuth" };

  res.status(200).json(data);
};

//POST /api/auth
controller.getAuth = async ({ params, query, body }, res) => {
  const data: any = { controllerName: "getAuth" };

  res.status(200).json(data);
};

export default controller;
