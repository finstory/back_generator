import {
  model,
  Model,
  MongooseBulkWriteOptions,
  Schema,
  SchemaOptions,
  SchemaTypeOptions,
} from "mongoose";

export interface timeStamp {
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  deleted?: boolean;
}

export const getSchema = <T>(
  name: string,
  schema: Schema
): Model<T, {}, {}> => {
  let ModelResult: Model<T, {}, {}> = model<T>(name, schema);
  return ModelResult;
};

const createSchema = <T>(
  name: string,
  options: { [key: string]: SchemaTypeOptions<any> },
  timestamps: SchemaOptions
): Model<T, {}, {}> => {
  const schema = new Schema(
    {
      ...options,
      deleted: { type: Boolean, required: false, default: false },
      deletedAt: { type: Date, required: false },
    },
    timestamps
  );
  return getSchema<T>(name, schema);
};
export default createSchema;
