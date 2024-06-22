import { printInfo } from '@helpers/wordsManager';
import { DB_Schema } from '../connection/db.connection';
import { throwErrorMessage as throwError } from "@throw_error";

class ModuleService {

    private db: DB_Schema;

    constructor(db: DB_Schema) {
        this.db = db;
    }

    readDB = async () => {
        return await this.db.read();
    }

    create = async (name: string) => {
        const moduleExists = this.db.get('module').find({ name }).value();

        if (moduleExists) throwError("already_exists", "JSON_DB", `Module '${name}'`);

        else await this.db.get('module')
            .push({ name, routes: [] })
            .write()
            .then(() => {
                printInfo("JSON_DB", `Module '${name}' created successfully.`);
            });


    }

    rename = async (oldName: string, newName: string) => {

        await this.db.get('module')
            .find({ name: oldName })
            .tap((module) => { if (!module) throwError("not_found", "JSON_DB", `Module '${oldName}'`) })
            .assign({ name: newName })
            .write()
            .then(() => {
                printInfo("JSON_DB", `Module '${oldName}' updated to ${newName} successfully.`);
            });


    }

    delete = async (name: string) => {
        const moduleGetting = !this.db.get('module').find({ name }).value();

        if (moduleGetting) throwError("not_found", "JSON_DB", `Module '${name}'`);
        else await this.db.get('module')
            .remove({ name })
            .write()
            .then(() => {
                printInfo("JSON_DB", `Module '${name}' deleted successfully.`);
            });
    }
}

export default ModuleService;