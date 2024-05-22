//<IMPORTS>
import { NextFunction } from "express";
import parametersValidator from "@config/validations";

import * as GetUser from "@/app/user/_validations/get-user";
import * as PostUserCreate from "@/app/user/_validations/post-user-create";


class Validations {
    //<VALIDATIONS>
    async getUser(req: GetUser.Req, res: GetUser.Res, next: NextFunction) {
        parametersValidator<GetUser.Params, GetUser.Query, GetUser.Body, GetUser.ResponseBody>(req, res, next, GetUser.Params, GetUser.Query, GetUser.Body);
    }
}

const validations = new Validations();

export default validations;