import { printInfo } from '@helpers/wordsManager';
import { DB_Schema } from '../connection/db.connection';
import throwError from "@throw_error";

class ModuleService {

    private db: DB_Schema;

    constructor(db: DB_Schema) {
        this.db = db;
    }

    createModule = async (name: string) => {

        const _db = await this.db.read();

        // if (_db.get('module').find({ name }).value())
        //     throwError("not_found", `[JSON_DB] Module already exists.`);

        await _db.get('module')
            .push({ name, routes: [] })
            .write()
            .then(() => {
                printInfo("JSON_DB", `Module ${name} created successfully.`);
            });


    }

    updateModuleName(oldName: string, newName: string) {
        try {
            this.db.get('module')
                .find({ name: oldName })
                .assign({ name: newName })

        } catch (error) {
            console.log(error);
        }
    }

    deleteModuleByName(name: string) {
        this.db.get('module')
            .remove({ name })
            .write();
    }
}

export default ModuleService;