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

export default services;
