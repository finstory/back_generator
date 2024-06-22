import JsonDB from './connection/db.connection';
import ModuleService from './services/module.service';
import throwError from "@throw_error";
import RouteService from './services/route.service';

class DB extends JsonDB {

    public module: ModuleService;
    public route: RouteService;

    initializeServices(db: DB) {
        db.module = new ModuleService(this.db);
        db.route = new RouteService(this.db);

    }
}

const db = async (): Promise<DB> => {
    const db = new DB();
    await db.initializeDB();
    db.initializeServices(db);
    return db;
}

export default db;