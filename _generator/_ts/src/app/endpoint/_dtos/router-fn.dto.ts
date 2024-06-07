import { RequestType } from "@interfaces";

export class EditRouteFnDto {
    newEndpoint?: string;
    newRequestType?: RequestType;
    newController?: string;
}