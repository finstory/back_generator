import JsonDBConfig from './connection/db.connection';
import ModuleService from './services/module.service';
import throwError from "@throw_error";
import RouteService from './services/route.service';

export class MainDB extends JsonDBConfig {

    public module: ModuleService;
    public route: RouteService;

    async _initial() {
        await this.initializeDB();
        this.module = new ModuleService(this.db);
        this.route = new RouteService(this.db);
    }
}

export const json_db = new MainDB();

export default { moduleDB: json_db.module, routeDB: json_db.route };