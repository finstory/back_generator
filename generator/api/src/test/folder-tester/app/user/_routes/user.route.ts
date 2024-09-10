//<IMPORTS>
import { Router } from "express";
import { controller, validation } from "../user.controller";

const router = Router();

//<ROUTES>
// router.get("/", validation.getUser, controller.getUser);
// router.post("/login/:id", validation.postUserLoginById, controller.postUserLoginById);

export default router;
