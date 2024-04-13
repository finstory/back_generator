import controller from "../interfaces/controllers/bases/UserBase";
import { throwError } from "../helpers/customError";
import { Request, Response } from "express";

// type Params = { id: string };
// type Body = { rama: string };

// const controllers = {
//   async userGet({ params, query, body }: Request, res: Response) {},
// };

// controllers.userGet = async (req: Request<Params, {}, Body, {}>, res) => {
//   // const { id } = req.params;
//   // const params: Params = { id };
// };

const dataLeng = [
  {
    id: 2,
    status: 404,
    message: {
      spanish: "Usuario no encontrado",
      english: "User not found",
    },
  },
];

//% GET - /users/:id
controller.userGet = async ({ params, query, body }, res) => {
  const data = { name: query.name };

  // const lenguage: string = "spanish";

  // let message: string = "";
  // let message2: string = "";
  // if (lenguage === "english") message = "User not found";

  // if (lenguage === "spanish") message = "Usuario no encontrado";

  // throwError("not_found", 404, message2);

  res.status(200).json(data);
};

//% POST - /users
controller.userPost = async ({ params, query, body }, res) => {
  const result = { id: 2 };
  res.status(200).json(result);
};

export default controller;
