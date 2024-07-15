import { Router } from "express";
import errorWrapper from "@throw_error_response_wrap";
import controllers from "@user/controllers/user.controllers";
import validations from "@user/_models/user-validations-model";

const router = Router();

router.get("/all", validations.getUser, errorWrapper(controllers.getUser));

export default router;