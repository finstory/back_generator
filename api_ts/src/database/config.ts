import mongoose from "mongoose";

interface Auth {
  username: string;
  password: string;
}

interface ConnectionOption {
  mongoUrl: string;
  dbName: string;
  auth: Auth;
}

const mongoUrl = process.env.MONGO_URI;
const dbName = process.env.MONGO_DB_NAME;
const username = process.env.MONGO_USER;
const password = process.env.MONGO_PASS;

const connectionOptions: ConnectionOption = {
  mongoUrl,
  dbName,
  auth: {
    username,
    password,
  },
};
const mongoDB = async () => {
  mongoose
    .connect(connectionOptions.mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      auth: {
        user: connectionOptions.auth.username,
        password: connectionOptions.auth.password,
      },
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("Failed to connect to MongoDB:", error);
    });
};

export default mongoDB;
