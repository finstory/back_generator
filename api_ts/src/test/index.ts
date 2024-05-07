import { Event, IEvent, IUser, User } from "../models";

const testMain = async () => {

    const createEvent = Event.create<IEvent>({ name: "Event 1", description: "Description 1" })
    const createUser = await User.create<IUser>({ name: "John Doe", email: "h" })
    
    const userGetting = await User.findOne({ name: "John Doe" })
    const eventGetting = await Event.findOne({ name: "Event 1" })

    console.log("new user: ", userGetting);
    console.log("new event: ", eventGetting);
};

export default testMain;