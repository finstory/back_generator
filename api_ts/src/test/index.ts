

// import { Event, IEvent, IProduct, IUser, Product, User } from "../models";
import { printMsg } from "../helpers/wordsManager";
import { isEmail, isNumeric } from "validator";


class Dto {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    nameDto = (name: string): boolean => {
        return isEmail(name);
    }

}

const testMain = async () => {
    try {

        const email = "0.523";
        console.log(isEmail(email))

        const services = (name: Dto

        ) => 
            { }
        // printMsg()
        // const newProduct: IProduct = { name: "dama", email: "Description 1" };
        // const createProduct = await Product.create<IProduct>(newProduct);

        // const updateProduct = await Product.updateOne(
        //     { name: "dama" },
        //     { $set: { deleted: true, deletedAt: new Date() } }
        // );

    } catch (error) {
        console.log(error.message)
    }
};

export default testMain;
