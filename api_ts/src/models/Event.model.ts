import Schema from "../../config/mongoDB/schemaManager";

export interface IEvent {
  name: string;
  description: string;
}

const Event =
  Schema<IEvent>(
    "Event", {
    name: { type: String, required: true, immutable: true },
    description: { type: String, required: false },

  })

export default Event;