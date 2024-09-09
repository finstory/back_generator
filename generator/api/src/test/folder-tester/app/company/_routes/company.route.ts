//<IMPORTS>
import { Router } from "express";
import { controller, validation } from "../company.controller";

const router = Router();

//<ROUTES>
router.get("/", validation.getCompany, controller.getCompany);
router.put("/login", validation.putCompanyLogin, controller.putCompanyLogin);

export default router;
