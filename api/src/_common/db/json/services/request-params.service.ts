import throwError from "@throw_error";
import { printInfo } from '@helpers/wordsManager';
import RouteModel, { RouteModelEdition } from '../entities/route.model';
import { type DB_Schema } from '../connection/db.connection';
import { BasicRouteDto, OnlyRequestParamsRouteDto, OptionalRouteDto } from '../../../../app/endpoint/_dtos/route.dto';
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

class RequestParamsService {

    private db: DB_Schema;

    constructor(db: DB_Schema) {
        this.db = db;
    }

    readDB = async () => {
        return await this.db.read();
    }

    update = async (moduleName: string, controllerName: string, requestParams: OnlyRequestParamsRouteDto): Promise<void> => {
        const modulesList = (await this.readDB()).get('module')
        const moduleGetting = modulesList.find({ name: moduleName })

        if (!moduleGetting.value())
            throwError("JSON_DB", "not_found", `Module '${moduleName}'`);

        const routesList = moduleGetting.get('routes');
        const routeGetting = routesList.find({ controllerName });
        const _route = routeGetting.value();

        if (!_route) {
            throwError("JSON_DB", "not_found", `Route with controllerName '${controllerName}'`);
        } else {

            await routesList
                .find({ controllerName })
                .assign({
                    ..._route,
                    params: requestParams.params || _route.params,
                    query: requestParams.query || _route.query,
                    body: requestParams.body || _route.body,
                    responseBody: requestParams.responseBody || _route.responseBody
                })
                .write()
                .then(() => {
                    printInfo("JSON_DB", `Route '${controllerName}' updated successfully.`);
                });
        }


        //     const oldRequestType = _route.requestType;
        //     const oldEndpointName = _route.endpointName;
        //     const controllerName = newRoute.controllerName ||
        //         generateControllerName(moduleName, newRoute.endpointName || oldEndpointName, newRoute.requestType || oldRequestType);

        //     const listPropsUpdated = Object.keys(newRoute).map((key) => `'${key}: ${newRoute[key]}'`).join(' - ');

        //     await routesList
        //         .find({ id: _route.id })
        //         .assign({ ..._route, ...newRoute, controllerName })
        //         .write()
        //         .then(() => {
        //             printInfo("JSON_DB", `Route (${oldRequestType}) '${oldEndpointName}' updated => ${listPropsUpdated}`);
        //         });
        // }

    }
}

export default RequestParamsService;