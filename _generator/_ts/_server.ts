import colors from 'colors';
import server, { asyncInitial } from '@config/server';
import mongoDB from "@config/db/mongoDB/connection";
import test from '@/test';
import envs from '@envs';
import jsonDB from '@/_common/db/json';
const ASYNC_INITIAL = true;

//% SERVER CONFIG:
const { PORT, CONNECT_DB, INITIAL_DROP_DB, TEST_MODE } = envs;

//$ SERVER START:
const upServer = async () => {
  ASYNC_INITIAL && await asyncInitial();
  TEST_MODE && test();
  
  server.listen(PORT, () => { console.log(colors.italic(`Server listening on port ${PORT}`)) })
}

CONNECT_DB ? mongoDB(upServer, INITIAL_DROP_DB) : upServer();