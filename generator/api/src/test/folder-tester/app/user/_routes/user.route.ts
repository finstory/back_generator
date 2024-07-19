//<IMPORTS>
import { Router } from "express";
import { controller, validation } from "../user.controller";

const router = Router();

//<ROUTES>
router.get("/login/user", validation.getUserLoginUser, controller.getUserLoginUser);
router.delete("/register", validation.deleteUserRegister, controller.deleteUserRegister);
router.put("/", validation.putUser, controller.putUser);
router.delete("/", validation.deleteUser, controller.deleteUser);
router.patch("/", validation.patchUser, controller.patchUser);
router.post("/", validation.postUser, controller.postUser);

export default router;
