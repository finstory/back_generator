import "dotenv/config";
import * as env from "env-var";

const envs = {
    //% PRINTS:
    PRINT_INTERNAL_ERROR: env.get("PRINT_INTERNAL_ERROR").required().asBool(),

    BACKEND_PATH: env.get("BACKEND_PATH").required().asString(),
    JSON_DB_PATH: env.get("BACKEND_PATH").required().asString() + '\\' + env.get("JSON_DB_PATH").required().asString(),
    APP_PATH: env.get("BACKEND_PATH").required().asString() + '\\' + env.get("MODULES_PATH").required().asString(),

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