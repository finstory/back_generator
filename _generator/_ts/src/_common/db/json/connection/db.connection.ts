import low from 'lowdb';
import FileAsync from 'lowdb/adapters/FileAsync';
import { join, dirname } from "path";
import ModuleModel from '../entities/module.model';

export type DB_Schema = low.LowdbAsync<JsonSchema>;

export interface JsonSchema {
    module: ModuleModel[];
}

const defaultSchema: { module: ModuleModel[] } = { module: [] };

class JsonDB {
    protected db!: DB_Schema;

    async initializeDB() {
        const filePath = join(__dirname, "db.json");
        const adapter = new FileAsync<JsonSchema>(filePath);
        await low(adapter)
            .then((db) => {
                this.db = db;
            });
        await this.db.defaults(defaultSchema).write();
    }

}

export default JsonDB;