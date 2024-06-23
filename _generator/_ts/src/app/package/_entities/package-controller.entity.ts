//<IMPORTS>
import * as C from "../_validations/_index";
import getValidations from "@/_common/config/validations/getValidations";
import { Request, Response } from "express";
export class PackageController {
  //<CONTROLLERS>
  getAllPackage = async (req: Request, res: Response) => { };
  postPackage = async (req: Request, res: Response) => { };
}

//<EXPORTS>
export const controller = new PackageController();
export const validation = getValidations(PackageController, C);
