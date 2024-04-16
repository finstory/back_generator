import controller from "../interfaces/controllers/users/_index";
import { throwError } from "../helpers/customError";

//% GET - /users/:id
controller.userGet = async ({ params, query, body }, res) => {
  const data = { name: "John", id: 1 };

  res.status(200).json(data);
};

//% POST - /users
controller.userPost = async ({ params, query, body }, res) => {
  const result = { id: 2 };
  res.status(200).json(result);
};

export default controller;
