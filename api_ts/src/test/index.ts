import { Event, IEvent, IProduct, IUser, Product, User } from "../models";

const testMain = async () => {
    try {
        const newProduct: IProduct = { name: "Rama", email: "Description 1" };
        const createProduct = await Product.create<IProduct>(newProduct);
        const productGetting = await Product.findOne({ "name": "rama god" });
    
        console.log(productGetting.email)
    } catch (error) {
        console.log(error.message) 
    }

    // const createEvent = Event.create<IEvent>({ name: "Event 1", description: "Description 1" })
    // const createUser = await User.create<IUser>({ name: "John Doe", email: "h" })

    // const userGetting = await User.findOne({ name: "John Doe" })
    // const eventGetting = await Event.findOne({ name: "Event 1" })

    // console.log("new user: ", userGetting);
    // console.log("new event: ", eventGetting);
};

export default testMain;