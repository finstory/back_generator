import { model, Model, Schema, SchemaTypeOptions } from "mongoose";



export const getSchema = <T>(name: string, schema: Schema): Model<T, {}, {}> => {
    let ModelResult: Model<T, {}, {}> = model<T>(name, schema);
    return ModelResult;
}

const createSchema = <T>(name: string, options: { [key: string]: SchemaTypeOptions<any> }): Model<T, {}, {}> => {
    const schema = new Schema(options);
    return getSchema<T>(name, schema);
}
export default createSchema;