import dotenv from 'dotenv';
import colors from 'colors';
import server from '@config/server';
import mongoDB from "@config/db/mongoDB/connection";
import test from '@/test';
import envs from '@envs';
dotenv.config();


//% SERVER CONFIG:
// const PORT = process.env.PORT || 3000;
const { PORT, CONNECT_DB } = envs;

const connectDB = false;
const initialDropDB = false;
const testMode = true;


//$ SERVER START:
const upServer = () => {
  server.listen(PORT, () => { console.log(colors.italic(`Server listening on port ${PORT}`)) })
  testMode && test();
}

CONNECT_DB ? mongoDB(upServer, initialDropDB) : upServer();