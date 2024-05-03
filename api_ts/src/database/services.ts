import { Model } from "sequelize";
import { User, IUser } from "./User.model";

export const services = async () => {
  // await User.create<IUser>({
  //   email: "7",
  //   name: "Johs",
  //   phone: 1234567890,
  // });

  const user = await User.findOne({
    name: "Johs",
  });
  console.log(user);
};
