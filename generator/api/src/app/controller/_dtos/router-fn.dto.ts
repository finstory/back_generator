import { RequestType } from "@interfaces";

export class EditRouteFnDto {
    newEndpoint?: string;
    newRequestType?: RequestType;
    newController?: string;
}

export class RouteImportDto {
    importName: string;
    newImportName?: string;
    newPath?: string;
}