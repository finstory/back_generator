import Schema, { timeStamp } from "../../config/mongoDB/schemaManager";

export interface IEvent extends timeStamp {
  name: string;
  description: string;
}

const Event =
  Schema<IEvent>(
    "Event", {
    name: { type: String, required: true, immutable: true },
    description: { type: String, required: false },
  }
  , { timestamps: true } 
)

export default Event;