import Schema, { timeStamp } from "../../config/mongoDB/schemaManager";

export interface IProduct extends timeStamp {
    name: string;
    email: string;
}

const Product =
    Schema<IProduct>(
        "Product", 
        {
        name: {
            type: String, required: true, immutable: true, validate: [
                {
                    validator: (value: string) => {
                        return /^[a-z0-9\s]+$/.test(value);
                    },
                    message: "Name should not contain uppercase letters"
                },
                {
                    validator: (value: string) => {
                        return /^[a-zA-Z0-9\s]+$/.test(value);
                    },
                    message: "Name should not contain special characters"
                }
            ]
        },
        email: { type: String, required: true }
    },
    { timestamps: true }
)

export default Product;