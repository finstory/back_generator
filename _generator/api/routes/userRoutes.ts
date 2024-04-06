import { Router } from "express";
import { Request, Response, NextFunction } from "express";
import { controllers } from "./controllers";

const router = Router();

//GRE-START
//GRE-7Z2i38fAsbPT8Lfuf7iyF9
router.post("/email/:email", controllers.deleteUserEmailByEmail);
//GRE-2aTeATSd5faAiP81878z3k
router.delete("/email/:email", controllers.deleteUserEmailByEmail);
//GRE-81hBZrUg9pSuKzn5v1rgjF
router.put("/email/:email", controllers.deleteUserEmailByEmail);
//GRE-mkfhyjH1wjPgCumqqruqs3
//GRE-END
