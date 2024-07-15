import { AxiosInstance } from "axios";
import checkParams from "@config/errors/utils/check-errors.util";
import { DeleteEndpoint, PatchEndpoint, PostEndpoint } from "./_validators/_index";


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


    postEndpoint = async ({ moduleName, route }: PostEndpoint) => {
        await checkParams({ moduleName, route }, PostEndpoint);
        const fetch = await this._api.post("/endpoint", { moduleName, route });
        return fetch.data;
    }

    patchEndpoint = async ({ moduleName, route, newRoute }: PatchEndpoint) => {
        const fetch = await this._api.patch("/endpoint", { moduleName, route, newRoute });
        return fetch.data;
    }

    deleteEndpoint = async ({ moduleName, route }: DeleteEndpoint) => {
        const fetch = await this._api.delete("/endpoint", { data: { moduleName, route } });
        return fetch.data;


    }

}
export default EndpointEndpoint;