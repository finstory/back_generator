import JsonDB from './connection/db.connection';
import ModuleService from './services/module.service';
import throwError from "@throw_error";

class DB extends JsonDB {

    public module: ModuleService;

    initializeServices(db: DB) {
        db.module = new ModuleService(this.db);
    }
}

const db = async (): Promise<DB> => {
    const db = new DB();
    await db.initializeDB();
    db.initializeServices(db);
    return db;
}

export default db;