import Schema, { timeStamp } from "@/_config/db/mongoDB/schemaManager";
import { deprecate } from "util";

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
