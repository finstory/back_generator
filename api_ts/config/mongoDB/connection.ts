import mongoose from "mongoose";
import colors from 'colors';
import dotenv from 'dotenv';
dotenv.config();

interface ConnectionOption {

  dbName: string;

  auth: {
    username: string;
    password: string;
  };

}

const mongoUrl = process.env.MONGO_URI;
const dbName = process.env.MONGO_DB_NAME;
const username = process.env.MONGO_USER;
const password = process.env.MONGO_PASS;

const connectionOptions: ConnectionOption = { dbName, auth: { username, password } };

const mongoDB = async (callback: () => void, reset: boolean) => {
  mongoose
    .connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      auth: {
        user: connectionOptions.auth.username,
        password: connectionOptions.auth.password,
      },
    })
    .then(async () => {
      if (reset) {
        await mongoose.connection.dropDatabase();
      }
      console.log(colors.green.bold.italic("Connected to MongoDB"), reset ? colors.red.italic("| Initial dropped") : "");
    })
    .then(() => {
      setTimeout(() => { callback(); }, 3000);
    })
    .catch((error) => {
      console.error("Failed to connect to MongoDB:", error);
      console.log(colors.bgRed.italic("Failed to connect to MongoDB"))
    });
};

export default mongoDB;
