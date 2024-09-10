import "dotenv/config";
import * as env from "env-var";

const envs = {
    //% PRINTS:
    PRINT_INTERNAL_ERROR: env.get("PRINT_INTERNAL_ERROR").required().asBool(),

    BACKEND_PATH: env.get("BACKEND_PATH").required().asString(),
    JSON_DB_PATH: env.get("BACKEND_PATH").required().asString() + '\\' + env.get("JSON_DB_PATH").required().asString(),
    APP_PATH: env.get("BACKEND_PATH").required().asString() + '\\' + env.get("MODULES_PATH").required().asString(),

    TEST_MODE: env.get("TEST_MODE").required().asBool(),
    PORT: env.get("PORT").required().asPortNumber(),

    ADMIN_TOKEN_KEY: env.get("ADMIN_TOKEN_KEY").required().asString(),
    URL_CHECK: env.get("URL_CHECK").required().asString(),
};

export default envs;