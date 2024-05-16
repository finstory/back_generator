//<IMPORTS>
import controller from "../interfaces/controllers/user/_index";
import { throwError } from "../helpers/customError";
import { UserDto } from "../dto/user.dto";
import { validate } from "class-validator";

//<CONTROLLERS>


controller.getUser = async ({ params, query, body }, res) => {

  const user: UserDto = new UserDto();
  user.name = body.name;


  validate(user).then((errors) => {
    if (errors.length > 0) {
      console.log('Validation failed: ', errors);
    } else {
      console.log('Validation succeed');
    }
  });

  const data: any = { controllerName: "getUser" };
  console.log(user);
  res.status(200).json(data);

};

controller.postUserCreate = async ({ params, query, body }, res) => {
  const data: any = { controllerName: "getUser" };

  res.status(200).json(data);
};

export default controller;