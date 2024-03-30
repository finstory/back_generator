import controller from "../interfaces/controllers/bases/UserBase";
import { send } from "../helpers/managerController";

//% GET - /users/:id
controller.userGet = async ({ params, query, body }, res) => {
  const data = { id: query.id_team };
  send(res, 200, data);
};

//% POST - /users
controller.userPost = async ({ params, query, body }, res) => {
  const result = { id: 2 };
  send(res, 200, result);
};

export default controller;
