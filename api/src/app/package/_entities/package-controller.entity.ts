//<IMPORTS>
import * as C from "../_validations/_index";
import getValidations from "@/_common/config/validations/getValidations";
import { Request, Response } from "express";
export class PackageController {
  //<CONTROLLERS>
  test = async (req: C.test.Req, res: C.test.Res) => { };
  getAllPackage = async (req: Request, res: Response) => { };
  patchPackageRename = async (req: Request, res: Response) => { };
  postPackage = async (req: C.postPackage.Req, res: C.postPackage.Res) => { };
  deletePackage = async (req: Request, res: Response) => { };
}

//<EXPORTS>
export const controller = new PackageController();
export const validation = getValidations<PackageController>(PackageController, C) ;

