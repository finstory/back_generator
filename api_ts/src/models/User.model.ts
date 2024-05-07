import Schema from "../../config/mongoDB/schemaManager";

export interface IUser {
  name: string;
  email: string;
}

const User =
  Schema<IUser>(
    "User", {
    name: { type: String, required: true, immutable: true },
    email: { type: String, required: true },
  })

export default User;