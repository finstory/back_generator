import { Document, model, Schema, Types } from "mongoose";
import { User } from "src/interfaces/entities/User.entity";
import fixSchema from "./fixSchema";

interface IUser  {
  phone:number;
  name: string;
  email: string;
}

const userSchema = new Schema({
  name: { type: String, required: true, immutable: true },
  email: { type: String, required: true },
});

const User = fixSchema<IUser>("User",userSchema);


const services = async () => {
    await User.create({ email: "johndoe@example.com",name:"John Doe",phone:"1234567890"});
    const user = await User.findOne({
        name: "John Doe",
    });
};

  const users = await User.create({
    name: 923,
    email: "",
  });
};
