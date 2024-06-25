import { printInfo } from '@helpers/wordsManager';
import { DB_Schema } from '../connection/db.connection';
import throwError from "@throw_error";

class ModuleService {

    private db: DB_Schema;

    constructor(db: DB_Schema) {
        this.db = db;
    }

    readDB = async () => {
        return await this.db.read();
    }

    getAll = async () => {
        await this.db.read();
        return this.db.get('module').value();
    }

    create = async (name: string) => {
        await this.db.read();
        const moduleExists = this.db.get('module').find({ name }).value();

        if (moduleExists) throwError("JSON_DB", "already_exists", `Module '${name}'`);

        else await this.db.get('module')
            .push({ name, routes: [] })
            .write()
            .then(() => {
                printInfo("JSON_DB", `Module '${name}' created successfully.`);
            });


    }

    rename = async (oldName: string, newName: string) => {
        await this.db.read();
        await this.db.get('module')
            .find({ name: oldName })
            .tap((module) => { if (!module) throwError("JSON_DB", "not_found", `Module '${oldName}'`) })
            .assign({ name: newName })
            .write()
            .then(() => {
                printInfo("JSON_DB", `Module '${oldName}' updated to ${newName} successfully.`);
            });


    }

    delete = async (name: string) => {
        await this.db.read();
        const moduleGetting = !this.db.get('module').find({ name }).value();

        if (moduleGetting) throwError("JSON_DB", "not_found", `Module '${name}'`);
        else await this.db.get('module')
            .remove({ name })
            .write()
            .then(() => {
                printInfo("JSON_DB", `Module '${name}' deleted successfully.`);
            });
    }
}

export default ModuleService;