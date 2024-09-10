import JsonDBConfig from './connection/db.connection';
import ModuleService from './services/module.service';
import RequestParamsService from './services/request-params.service';
import RouteService from './services/route.service';
import throwError from "@throw_error";

export class MainDB extends JsonDBConfig {

    public module: ModuleService;
    public route: RouteService;
    public requestParams: RequestParamsService;
    async _initial() {
        await this.initializeDB();
        this.requestParams = new RequestParamsService(this.db);
        this.module = new ModuleService(this.db);
        this.route = new RouteService(this.db);
    }
}

export const json_db = new MainDB();

export default { moduleDB: json_db.module, routeDB: json_db.route };