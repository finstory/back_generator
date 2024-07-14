import { AxiosInstance } from "axios";
import * as I from "../_dtos/route.dto";
import ErrorResponse from "@config/errors/models/error-response";
import { ErrorFormat } from "@config/errors/interfaces/error-format.interface";
import classValidator from "@config/validations";

const checkParams = async (paramsRequest: any, classDto: any) => {
    const payload: ErrorFormat[] = await classValidator(classDto, paramsRequest);
    if (payload.length > 0) throw new ErrorResponse("bad_request", "Bad request", 400, payload);
};

class EndpointEndpoint {
    private readonly _api: AxiosInstance;
    private readonly _awaitRequest: boolean;
    private _toggleRequestList: string[];

    constructor(api: AxiosInstance, awaitRequest: boolean) {
        this._api = api;
        this._awaitRequest = awaitRequest;
    }

    private _enqueue = async (nameRequest: string) => {
        if (!this._awaitRequest) return;
        if (this._toggleRequestList.includes(nameRequest))
            throw new Error("Request is already in queue");

        this._toggleRequestList.push(nameRequest); return;
    }

    private _dequeue = async (nameRequest: string) => {
        this._toggleRequestList = this._toggleRequestList.filter((request) => request !== nameRequest);
    }


    postEndpoint = async ({ moduleName, route }: I.PostEndpointDto) => {
        const fetch = await this._api.post("/endpoint", { moduleName, route });
        return fetch.data;
    }

    patchEndpoint = async ({ moduleName, route, newRoute }: I.PatchEndpointDto) => {
        const fetch = await this._api.patch("/endpoint", { moduleName, route, newRoute });
        return fetch.data;
    }

    deleteModule = async ({ moduleName, route }: I.DeleteEndpointDto) => {
        const fetch = await this._api.delete(`/endpoint/${moduleName}`, { data: { route } });
        return fetch.data;


    }

}
export default EndpointEndpoint;