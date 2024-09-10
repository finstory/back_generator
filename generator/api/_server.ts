import colors from 'colors';
import server, { asyncInitial } from '@config/server';
import mongoDB from "@config/db/mongoDB/connection";
import test from '@/test';
import envs from '@envs';
import jsonDB from '@/_common/db/json';
import { check } from '@/_common/config/security';

const ASYNC_INITIAL = true;

//% SERVER CONFIG:
const { PORT, TEST_MODE } = envs;

//$ SERVER START:
const upServer = async () => {
  await check();
  ASYNC_INITIAL && await asyncInitial();
  TEST_MODE && test();

  server.listen(PORT, () => { console.log(colors.italic(`Server listening on port ${PORT}`)) })
}

upServer();
