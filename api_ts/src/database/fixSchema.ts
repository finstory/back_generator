import { model, Schema } from "mongoose";

const added = <T>(schemaName: string, schema: Schema) => {
  return async (query: T) => {
    await model<T>(schemaName, schema).create(query);
  };
};

const fixSchema = <T>(schemaName: string, schema: Schema) => {
  return {
    ...model<T>(schemaName, schema),
    create: added<T>(schemaName, schema),
  };
};

export default fixSchema;
