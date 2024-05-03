import { Model, model, Schema } from "mongoose";

export interface IUser {
  phone: number;
  name: string;
  email: string;
}

const userSchema = new Schema({
  name: { type: String, required: true, immutable: true },
  email: { type: String, required: true },
});

export const User: Model<IUser, {}, {}> = model<IUser>("User", userSchema);

// User.updateOne({ name: 2, email: "facsc", phone: 123 });
// const fn = () => {
//   User.create<IUser>({
//     name: 5,
//     email: "facsc",
//     phone: 123,
//   });
// };

//Pruebas de uso en un servicio

// const services = async () => {
//     await User.create({ email: "johndoe@example.com",name:"John Doe",phone:"1234567890"});
//     const user = await User.findOne({
//         name: "John Doe",
//     });
// };



// const users = await User.create({
//     name: 923,
//     email: "",
//   });
// };
