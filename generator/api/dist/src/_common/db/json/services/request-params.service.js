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
class RequestParamsService {
    constructor(db) {
        this.readDB = () => __awaiter(this, void 0, void 0, function* () {
            return yield this.db.read();
        });
        this.update = (moduleName, controllerName, requestParams) => __awaiter(this, void 0, void 0, function* () {
            const modulesList = (yield this.readDB()).get('module');
            const moduleGetting = modulesList.find({ name: moduleName });
            if (!moduleGetting.value())
                (0, _throw_error_1.default)("JSON_DB", "not_found", `Module '${moduleName}'`);
            const routesList = moduleGetting.get('routes');
            const routeGetting = routesList.find({ controllerName });
            const _route = routeGetting.value();
            if (!_route) {
                (0, _throw_error_1.default)("JSON_DB", "not_found", `Route with controllerName '${controllerName}'`);
            }
            else {
                yield routesList
                    .find({ controllerName })
                    .assign(Object.assign(Object.assign({}, _route), { params: requestParams.params || _route.params, query: requestParams.query || _route.query, body: requestParams.body || _route.body, responseBody: requestParams.responseBody || _route.responseBody }))
                    .write()
                    .then(() => {
                    (0, wordsManager_1.printInfo)("JSON_DB", `Route '${controllerName}' updated successfully.`);
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
        });
        this.db = db;
    }
}
exports.default = RequestParamsService;
