import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { Sequelize } from "sequelize";

dotenv.config();

const { DB_NAME, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, LOCAL } = process.env;

let sequelize: Sequelize;

if (process.env.NODE_ENV === "production") {
  sequelize = new Sequelize({
    logging: false,
    database: DB_NAME,
    dialect: "postgres",
    host: DB_HOST!,
    port: parseInt(DB_PORT!),
    username: DB_USER,
    password: DB_PASSWORD,
    pool: {
      max: 3,
      min: 1,
      idle: 10000,
    },
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
      keepAlive: true,
    },
    ssl: LOCAL === "true",
  });
} else {
  sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
    { logging: false, native: false }
  );
}

const modelDefiners: ((prop: Sequelize) => {})[] = [];

const pathModels = path.join(__dirname, "../models");

const files = fs.readdirSync(pathModels);

files.forEach((file) => {
  const filePath = path.join(pathModels, file);
  const model = require(filePath).default;
  modelDefiners.push(model);
});

modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);

const modelsGetting = Object.fromEntries(capsEntries);

export default { conn: sequelize, ...modelsGetting };
