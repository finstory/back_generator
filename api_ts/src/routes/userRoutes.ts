import { Router } from "express";
import * as I from "../interfaces/controllers/IUserControllers.js";
import { Request, Response, NextFunction } from "express";
import db from "../app/db.js";
import { service } from "../services/serivce.js";

const servicio = require("../services/servicio.js");

const { User } = db;
const router = Router();

const controllers = {
  userGet: async (req: I.usersGetReq, res: I.usersGetRes) => {},
};

controllers.userGet = async (req, res) => {
  req.query.id_team;
  // const result = service();

  res.json(servicio(3));
};

router.get("/", controllers.userGet);
//       
// const usersGet = async (req: I.usersGetReq, res: I.usersGetRes) => {
//   // const params = req.params.name;
//   const { id_team, parametro2 } = req.query;
//   const id = req.query.id_team;
//   const { team } = req.body;
//   res.sendStatus(200).json({ id: "sd" });
// };

router.get("/view", async (req: Request, res: Response, next: NextFunction) => {
  const userExists = await User.findOne({
    where: { email: "facu@hotmail.com" },
  });
  res.json({ message: userExists });
});

export default router;
