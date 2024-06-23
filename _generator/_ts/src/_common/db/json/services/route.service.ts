import { printInfo } from '@helpers/wordsManager';
import { DB_Schema } from '../connection/db.connection';
import { throwErrorMessage as throwError } from "@throw_error";
import RouteModel, { RouteModelEdition } from '../entities/route.model';

const exampleModules = [
    {
        "name": "user",
        "routes": [
            {
                "id": "13a52111-72b4-4648-ae8b-cb864fd18793",
                "endpointName": "/create",
                "requestType": "post",
                "description": "Write a description here...",
                "controllerName": "postUserCreate",
                "middlewares": [
                    "Token",
                    "+"
                ],
                "params": [],
                "query": [
                    {
                        "key": "id",
                        "type": "UUID",
                        "elementType": "",
                        "optional": true,
                        "value": "ER334WE"
                    }
                ],
                "body": [
                    {
                        "key": "id",
                        "type": "UUID",
                        "elementType": "",
                        "optional": true,
                        "value": "ER334WE"
                    },
                    {
                        "key": "first_name",
                        "type": "string",
                        "elementType": "facundo",
                        "optional": true,
                        "value": null
                    },
                    {
                        "key": "password",
                        "type": "string",
                        "elementType": "",
                        "optional": true,
                        "value": "2329Icx/"
                    },
                    {
                        "key": "age",
                        "type": "number",
                        "elementType": "",
                        "optional": false,
                        "value": "32"
                    }
                ],
                "responseBody": []
            }
        ]
    }
]

class RouteService {

    private db: DB_Schema;

    constructor(db: DB_Schema) {
        this.db = db;
    }

    readDB = async () => {
        return await this.db.read();
    }

    create = async (moduleName: string, route: RouteModel) => {
        const modulesList = (await this.readDB()).get('module')
        const moduleGetting = modulesList.find({ name: moduleName })

        if (!moduleGetting.value())
            throwError("not_found", "JSON_DB", `Module '${moduleName}'`);

        const routesList = moduleGetting.get('routes');
        const routeGetting = routesList.find({ endpointName: route.endpointName, requestType: route.requestType });

        if (routeGetting.value())
            throwError("already_exists", "JSON_DB", `Route (${route.requestType}) '${route.endpointName}'`);

        else await routesList
            .push(route)
            .write()
            .then(() => {
                printInfo("JSON_DB", `Route (${route.requestType}) '${route.endpointName} created successfully.`);
            });
    }

    edit = async (moduleName: string, routeId: string, route: RouteModelEdition) => {

        const modulesList = (await this.readDB()).get('module')
        const moduleGetting = modulesList.find({ name: moduleName })

        if (!moduleGetting.value())
            throwError("not_found", "JSON_DB", `Module '${moduleName}'`);

        const routesList = moduleGetting.get('routes');
        const routeGetting = routesList.find({ id: routeId });
        const _route = routeGetting.value();

        if (!routeGetting.value())
            throwError("not_found", "JSON_DB", `Route ID '${routeId}'`);
        
        else {
            const oldRequestType = _route.requestType;
            const oldEndpointName = _route.endpointName;
            const listPropsUpdated = Object.keys(route).map((key) => `'${key}: ${route[key]}'`).join(' - ');

            await routesList
                .find({ id: routeId })
                .assign({ ..._route, ...route })
                .write()
                .then(() => {
                    printInfo("JSON_DB", `Route (${oldRequestType}) '${oldEndpointName}' updated => ${listPropsUpdated}`);
                });
        }
    }


    delete = async (moduleName: string, routeId: string) => {
        const modulesList = (await this.readDB()).get('module')
        const moduleGetting = modulesList.find({ name: moduleName })

        if (!moduleGetting.value())
            throwError("not_found", "JSON_DB", `Module '${moduleName}'`);

        const routesList = moduleGetting.get('routes');
        const routeGetting = routesList.find({ id: routeId });
        if (!routeGetting.value())
            throwError("not_found", "JSON_DB", `Route ID '${routeId}'`);
        else {

            const endpoint = routeGetting.get('endpointName').value();
            const requestType = routeGetting.get('requestType').value();

            await routesList
                .remove({ id: routeId })
                .write()
                .then(() => {
                    printInfo("JSON_DB", `Route (${requestType}) '${endpoint}' deleted successfully.`);
                });
        }
    }
}

export default RouteService;