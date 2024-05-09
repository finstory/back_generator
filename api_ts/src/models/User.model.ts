import Schema, { timeStamp } from "../../config/mongoDB/schemaManager";

export interface IUser extends timeStamp {
  name: string;
  email: string;
}

const User = Schema<IUser>(
  "User",
  {
    name: { type: String, required: true, immutable: true },
    email: { type: String, required: true },
  },
  { timestamps: true }
);

export default User;
