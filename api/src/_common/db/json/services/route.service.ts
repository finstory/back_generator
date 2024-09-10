import throwError from "@throw_error";
import { printInfo } from '@helpers/wordsManager';
import RouteModel, { RouteModelEdition } from '../entities/route.model';
import { type DB_Schema } from '../connection/db.connection';
import { BasicRouteDto, OptionalRouteDto } from '../../../../app/endpoint/_dtos/route.dto';
import { generateControllerName } from '@utils';
import { v4 as uuidv4 } from 'uuid';

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

    create = async (moduleName: string, basicRoute: BasicRouteDto): Promise<RouteModel> => {
        const modulesList = (await this.readDB()).get('module')
        const moduleGetting = modulesList.find({ name: moduleName })

        if (!moduleGetting.value())
            throwError("JSON_DB", "not_found", `Module '${moduleName}'`);

        const routesList = moduleGetting.get('routes');
        const routeGetting = routesList.find({ endpointName: basicRoute.endpointName, requestType: basicRoute.requestType });

        if (routeGetting.value())
            throwError("JSON_DB", "already_exists", `Route (${basicRoute.requestType}) '${basicRoute.endpointName}'`);

        else {
            const route = {
                id: uuidv4(),
                controllerName: generateControllerName(moduleName, basicRoute.endpointName, basicRoute.requestType),
                ...basicRoute,
                validateActive: true,
                description: "",
                middlewares: [],
                params: [],
                query: [], body: [],
                responseBody: [],
            }

            await routesList
                .push(route)
                .write()
                .then(() => {
                    printInfo("JSON_DB", `Route (${route.requestType}) '${route.endpointName} created successfully.`);
                });
            return route;
        }
    }

    edit = async (moduleName: string, route: BasicRouteDto, newRoute: OptionalRouteDto): Promise<RouteModel> => {

        const modulesList = (await this.readDB()).get('module')
        const moduleGetting = modulesList.find({ name: moduleName })

        if (!moduleGetting.value())
            throwError("JSON_DB", "not_found", `Module '${moduleName}'`);

        const routesList = moduleGetting.get('routes');
        const routeGetting = routesList.find({ endpointName: route.endpointName, requestType: route.requestType });
        const newRouteExists = routesList.find({ endpointName: newRoute.endpointName, requestType: newRoute.requestType }).value();
        const _route = routeGetting.value();


        if (newRouteExists)
            throwError("JSON_DB", "already_exists", `Route (${newRoute.requestType}) ${newRoute.endpointName}`);
        else if (!_route)
            throwError("JSON_DB", "not_found", `Route (${route.requestType}) ${route.endpointName}`);
        else {
            const oldRequestType = _route.requestType;
            const oldEndpointName = _route.endpointName;
            const controllerName = newRoute.controllerName ||
                generateControllerName(moduleName, newRoute.endpointName || oldEndpointName, newRoute.requestType || oldRequestType);

            const listPropsUpdated = Object.keys(newRoute).map((key) => `'${key}: ${newRoute[key]}'`).join(' - ');

            await routesList
                .find({ id: _route.id })
                .assign({ ..._route, ...newRoute, controllerName })
                .write()
                .then(() => {
                    printInfo("JSON_DB", `Route (${oldRequestType}) '${oldEndpointName}' updated => ${listPropsUpdated}`);
                });
        }
        return routesList.find({ id: _route.id }).value();
    }


    updateDescription = async (moduleName: string, route: BasicRouteDto, description: string) => {
        const modulesList = (await this.readDB()).get('module')
        const moduleGetting = modulesList.find({ name: moduleName })

        if (!moduleGetting.value())
            throwError("JSON_DB", "not_found", `Module '${moduleName}'`);

        const routesList = moduleGetting.get('routes');
        const routeGetting = routesList.find({ endpointName: route.endpointName, requestType: route.requestType });

        if (!routeGetting.value())
            throwError("JSON_DB", "not_found", `Route (${route.requestType}) ${route.endpointName}`);
        else {
            const endpoint = routeGetting.get('endpointName').value();
            const requestType = routeGetting.get('requestType').value();

            await routesList
                .find({ endpointName: route.endpointName, requestType: route.requestType })
                .assign({ description })
                .write()
                .then(() => {
                    printInfo("JSON_DB", `Route (${requestType}) '${endpoint}' updated => description: ${description}`);
                });
        }
    }

    delete = async (moduleName: string, route: BasicRouteDto) => {
        const modulesList = (await this.readDB()).get('module')
        const moduleGetting = modulesList.find({ name: moduleName })
        console.log(moduleGetting.value());

        if (!moduleGetting.value())
            throwError("JSON_DB", "not_found", `Module '${moduleName}'`);

        const routesList = moduleGetting.get('routes');
        const routeGetting = routesList.find({ endpointName: route.endpointName, requestType: route.requestType });
        if (!routeGetting.value())
            throwError("JSON_DB", "not_found", `Route (${route.requestType}) ${route.endpointName}`);
        else {

            const endpoint = routeGetting.get('endpointName').value();
            const requestType = routeGetting.get('requestType').value();

            await routesList
                .remove({ endpointName: route.endpointName, requestType: route.requestType })
                .write()
                .then(() => {
                    printInfo("JSON_DB", `Route (${requestType}) '${endpoint}' deleted successfully.`);
                });
        }
    }
}

export default RouteService;