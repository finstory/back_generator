//<IMPORTS>
import { NextFunction } from "express";
import parametersValidator from "@config/validations";

import * as GetUser from "@/app/user/_validations/get-user";
import * as PostUserCreate from "@/app/user/_validations/post-user-create";


class Validations {
    //<VALIDATIONS>
    async getUser(req: GetUser.Req, res: GetUser.Res, next: NextFunction) {
        parametersValidator(req, res, next, GetUser.parameters);
    }
}

const validations = new Validations();

export default validations;