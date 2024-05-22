import colors from 'colors';
import server from '@config/server';
import mongoDB from "@config/db/mongoDB/connection";
import test from '@/test';
import envs from '@envs';


//% SERVER CONFIG:
const { PORT, CONNECT_DB, INITIAL_DROP_DB, TEST_MODE } = envs;

//$ SERVER START:
const upServer = () => {
  server.listen(PORT, () => { console.log(colors.italic(`Server listening on port ${PORT}`)) })
  TEST_MODE && test();
}

CONNECT_DB ? mongoDB(upServer, INITIAL_DROP_DB) : upServer();