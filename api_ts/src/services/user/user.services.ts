import S from "../injector";

interface IUser {
  name: string;
  age: number;
}

// class Services {

//   async getUser(name: IUser) {
//     if (name) throw new Error("User not found");

//   }

//   async postUser(id: string) {
//     if (id) throw new Error("User not found");
//   }
// }

// const services = new Services();

const services = {
  async getUser(name: IUser) {},
};

services.getUser = async (name: IUser) => {
  if (name) throw new Error("User not found");
};

export default services;
