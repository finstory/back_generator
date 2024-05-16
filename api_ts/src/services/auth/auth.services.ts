import { UserDto } from "../../dto/user.dto";
import { throwError } from "../../helpers/customError";
import { User } from "../../models";
import S from "../injector";

interface IUser {
  name: string;
  age: number;
}

class Services {
  async login(user: UserDto) {
    if (user) throwError("not_found");
  }
}

const services = new Services();

export default services;
