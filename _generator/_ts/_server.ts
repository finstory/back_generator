import dotenv from 'dotenv';
import colors from 'colors';
import server from '@config/server';
import mongoDB from "@/_config/db/mongoDB/connection";
import test from '@/test';

dotenv.config();


//% SERVER CONFIG:
const PORT = process.env.PORT || 3000;
const connectDB = false;
const initialDropDB = false;
const testMode = true;


//$ SERVER START:
const upServer = () => {
  server.listen(PORT, () => { console.log(colors.italic(`Server listening on port ${PORT}`)) })
  testMode && test();
}

connectDB ? mongoDB(upServer, initialDropDB) : upServer();