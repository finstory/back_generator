import { RequestType } from "@interfaces";

export class EditRouteDto {
    endpointName?: string;
    requestType?: RequestType;
    controllerName?: string;
    validateActive?: boolean;
}

export class RouteImportDto {
    importName: string;
    newImportName?: string;
    newPath?: string;
}