import db from "src/app/db";
import S from "../injector";

interface IUser {
  name: string;
  age: number;
}

class Services {
  async login(user: IUser) {
    if (user) throw new Error("User not found");
  }
}

const services = new Services();

import { User } from "../../app/db";
const serv = async () => {
  const getUser = await User.findOne({ where: {} });
};

export default services;
