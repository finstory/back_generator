//<IMPORTS>
import { Request, Response } from "express";
import * as C from "../_validations/_index";
import getValidations from "@config/validations/getValidations";

export class EndpointController {
  //<CONTROLLERS>
  postEndpoint = async (req: C.postEndpoint.Req, res: C.postEndpoint.Res) => { };
  patchEndpoint = async (req: C.patchEndpoint.Req, res: C.patchEndpoint.Res) => { };
  deleteEndpoint = async (req: C.deleteEndpointById.Req, res: C.deleteEndpointById.Res) => { };
}

//<EXPORTS>
export const controller = new EndpointController();
export const validation = getValidations(EndpointController, C);
