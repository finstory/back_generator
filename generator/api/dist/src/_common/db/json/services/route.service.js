"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _throw_error_1 = __importDefault(require("../../../config/errors/throw-error.ts"));
const wordsManager_1 = require("../../../helpers/wordsManager");
const _utils_1 = require("../../../utils/_index.ts");
const uuid_1 = require("uuid");
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
];
class RouteService {
    constructor(db) {
        this.readDB = () => __awaiter(this, void 0, void 0, function* () {
            return yield this.db.read();
        });
        this.create = (moduleName, basicRoute) => __awaiter(this, void 0, void 0, function* () {
            const modulesList = (yield this.readDB()).get('module');
            const moduleGetting = modulesList.find({ name: moduleName });
            if (!moduleGetting.value())
                (0, _throw_error_1.default)("JSON_DB", "not_found", `Module '${moduleName}'`);
            const routesList = moduleGetting.get('routes');
            const routeGetting = routesList.find({ endpointName: basicRoute.endpointName, requestType: basicRoute.requestType });
            if (routeGetting.value())
                (0, _throw_error_1.default)("JSON_DB", "already_exists", `Route (${basicRoute.requestType}) '${basicRoute.endpointName}'`);
            else {
                const route = Object.assign(Object.assign({ id: (0, uuid_1.v4)(), controllerName: (0, _utils_1.generateControllerName)(moduleName, basicRoute.endpointName, basicRoute.requestType) }, basicRoute), { validateActive: true, description: "", middlewares: [], params: [], query: [], body: [], responseBody: [] });
                yield routesList
                    .push(route)
                    .write()
                    .then(() => {
                    (0, wordsManager_1.printInfo)("JSON_DB", `Route (${route.requestType}) '${route.endpointName} created successfully.`);
                });
                return route;
            }
        });
        this.edit = (moduleName, route, newRoute) => __awaiter(this, void 0, void 0, function* () {
            const modulesList = (yield this.readDB()).get('module');
            const moduleGetting = modulesList.find({ name: moduleName });
            if (!moduleGetting.value())
                (0, _throw_error_1.default)("JSON_DB", "not_found", `Module '${moduleName}'`);
            const routesList = moduleGetting.get('routes');
            const routeGetting = routesList.find({ endpointName: route.endpointName, requestType: route.requestType });
            const newRouteExists = routesList.find({ endpointName: newRoute.endpointName, requestType: newRoute.requestType }).value();
            const _route = routeGetting.value();
            if (newRouteExists)
                (0, _throw_error_1.default)("JSON_DB", "already_exists", `Route (${newRoute.requestType}) ${newRoute.endpointName}`);
            else if (!_route)
                (0, _throw_error_1.default)("JSON_DB", "not_found", `Route (${route.requestType}) ${route.endpointName}`);
            else {
                const oldRequestType = _route.requestType;
                const oldEndpointName = _route.endpointName;
                const controllerName = newRoute.controllerName ||
                    (0, _utils_1.generateControllerName)(moduleName, newRoute.endpointName || oldEndpointName, newRoute.requestType || oldRequestType);
                const listPropsUpdated = Object.keys(newRoute).map((key) => `'${key}: ${newRoute[key]}'`).join(' - ');
                yield routesList
                    .find({ id: _route.id })
                    .assign(Object.assign(Object.assign(Object.assign({}, _route), newRoute), { controllerName }))
                    .write()
                    .then(() => {
                    (0, wordsManager_1.printInfo)("JSON_DB", `Route (${oldRequestType}) '${oldEndpointName}' updated => ${listPropsUpdated}`);
                });
            }
            return routesList.find({ id: _route.id }).value();
        });
        this.updateDescription = (moduleName, route, description) => __awaiter(this, void 0, void 0, function* () {
            const modulesList = (yield this.readDB()).get('module');
            const moduleGetting = modulesList.find({ name: moduleName });
            if (!moduleGetting.value())
                (0, _throw_error_1.default)("JSON_DB", "not_found", `Module '${moduleName}'`);
            const routesList = moduleGetting.get('routes');
            const routeGetting = routesList.find({ endpointName: route.endpointName, requestType: route.requestType });
            if (!routeGetting.value())
                (0, _throw_error_1.default)("JSON_DB", "not_found", `Route (${route.requestType}) ${route.endpointName}`);
            else {
                const endpoint = routeGetting.get('endpointName').value();
                const requestType = routeGetting.get('requestType').value();
                yield routesList
                    .find({ endpointName: route.endpointName, requestType: route.requestType })
                    .assign({ description })
                    .write()
                    .then(() => {
                    (0, wordsManager_1.printInfo)("JSON_DB", `Route (${requestType}) '${endpoint}' updated => description: ${description}`);
                });
            }
        });
        this.delete = (moduleName, route) => __awaiter(this, void 0, void 0, function* () {
            const modulesList = (yield this.readDB()).get('module');
            const moduleGetting = modulesList.find({ name: moduleName });
            console.log(moduleGetting.value());
            if (!moduleGetting.value())
                (0, _throw_error_1.default)("JSON_DB", "not_found", `Module '${moduleName}'`);
            const routesList = moduleGetting.get('routes');
            const routeGetting = routesList.find({ endpointName: route.endpointName, requestType: route.requestType });
            if (!routeGetting.value())
                (0, _throw_error_1.default)("JSON_DB", "not_found", `Route (${route.requestType}) ${route.endpointName}`);
            else {
                const endpoint = routeGetting.get('endpointName').value();
                const requestType = routeGetting.get('requestType').value();
                yield routesList
                    .remove({ endpointName: route.endpointName, requestType: route.requestType })
                    .write()
                    .then(() => {
                    (0, wordsManager_1.printInfo)("JSON_DB", `Route (${requestType}) '${endpoint}' deleted successfully.`);
                });
            }
        });
        this.db = db;
    }
}
exports.default = RouteService;
