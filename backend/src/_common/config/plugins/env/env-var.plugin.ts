import "dotenv/config";
import * as env from "env-var";

const envs = {
    // MAILER_PORT: env.get("PORT_MAILER").required().asPortNumber(),
    // MAILER_HOST: env.get("HOST").required().asString(),
    // MAILER_SERVICE: env.get("MAILER_SERVICE").required().asString(),
    // MAILER_SECURE: env.get("MAILER_SECURE").required().asBool(),
    // REJECT_UNAUTHORIZED: env.get("REJECT_UNAUTHORIZED").required().asBool(),
    // MIN_VERSION: env.get("MINVERSION").required().asString(),
    // MAILER_EMAIL: env.get("MAILER_EMAIL").required().asEmailString(),
    // MAILER_SECRET_KEY: env.get("MAILER_SECRET_KEY").required().asString(),

    // PROD: env.get("PROD").required().asBool(),
    MONGO_URI: env.get("MONGO_URI").required().asString(),
    MONGO_DB_NAME: env.get("MONGO_DB_NAME").required().asString(),
    MONGO_USER: env.get("MONGO_USER").required().asString(),
    MONGO_PASS: env.get("MONGO_PASS").required().asString(),
    MONGO_BASIC_AUTH: env.get("MONGO_BASIC_AUTH").required().asBool(),

    INITIAL_DROP_DB: env.get("INITIAL_DROP_DB").required().asBool(),
    CONNECT_DB: env.get("CONNECT_DB").required().asBool(),
    TEST_MODE: env.get("TEST_MODE").required().asBool(),
    PORT: env.get("PORT").required().asPortNumber(),
};

export default envs;