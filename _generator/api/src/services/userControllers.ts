import controller from "./interfaces";
import { throwError } from "../helpers/customError";
import { Request, Response } from "express";

//$C_START

//% GET -/USERS/:ID
controller.userGet = async ({ params, query, body }, res) => {
  const data = { name: query.name };

  res.status(200).json(data);
};

//#controller.
export default controller;
