//<IMPORTS>
import * as V from "class-validator";
import "reflect-metadata";
import { Transform, Type } from 'class-transformer';

export class PatchEndpointDescription {
    moduleName: string;
    route: {
        endpointName: string;
        requestType: string;
        controllerName: string;
    }
    description: string;
}
