import User, { IUser } from "../models/User.model";



const testMain = async () => {

    await User.create<IUser>({ name: "Facu No GoD", email: "h" })
    // const myUser = await User.findOne({ name: "John Doe" })
    // console.log(myUser);
};

export default testMain;