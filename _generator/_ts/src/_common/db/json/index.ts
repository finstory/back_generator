import JsonDBConfig from './connection/db.connection';
import ModuleService from './services/module.service';
import throwError from "@throw_error";
import RouteService from './services/route.service';

class MainDB extends JsonDBConfig {

    public module: ModuleService;
    public route: RouteService;

    initializeServices(db: MainDB) {
        db.module = new ModuleService(this.db);
        db.route = new RouteService(this.db);

    }
}

const db = new MainDB();
let initialized = false;

const JsonDB = async (): Promise<MainDB> => {
    if (initialized) return db;
    else {
        await db.initializeDB();
        db.initializeServices(db);
        initialized = true;
        return db;
    }
}


export default JsonDB;