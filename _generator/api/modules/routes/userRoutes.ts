import { Router } from "express";
import { Request, Response, NextFunction } from "express";
import { controllers } from "./controllers";

const router = Router();

//GR-ENDPOINT
//GRE-fnGCXJMWwGsxpXNGcC15Rj
router.post("/rama", controllers.postUserRama);
//GRE-uxUbkcAYw1xaj6BwUwtrr8
router.get("/:id", controllers.getUserById);
//GRE-oPS7km4QrQ19EtRvrAZ4mV
router.get("/:id", controllers.getUserById);
//GRE-rLztLfzV2uWQ4ZHwsV8dku
router.get("/sd", controllers.getUserSd);
//GRE-mDowdaqEYKyQxEFD8UNLPr
router.post("/sd", controllers.postUserSd);

//GR
