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