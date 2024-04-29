interface IUser {
  name: string;
  age: number;
}

class Services {
  getUser(name: IUser) {
    if (name) throw new Error("User not found");
  }
}

