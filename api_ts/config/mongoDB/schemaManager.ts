import { model, Model, Schema, SchemaTypeOptions } from "mongoose";



export const getSchema = <T>(schema: Schema): Model<T, {}, {}> => {
    let ModelResult: Model<T, {}, {}> = model<T>("User", schema);
    return ModelResult;
}

const createSchema = <T>(options: { [key: string]: SchemaTypeOptions<any> }): Model<T, {}, {}> => {
    const schema = new Schema(options);
    return getSchema<T>(schema);
}
export default createSchema;