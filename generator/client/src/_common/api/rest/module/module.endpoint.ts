import { AxiosInstance } from "axios";
import RestApi from "..";
import classValidator from "@/_common/config/validations";
import { ErrorFormat } from "@/_common/config/validations/format-errors";
import ErrorResponse from "@/_common/config/errors/models/error-response";
import { PostModuleDto } from "./_dtos/_index";

const checkParams = async (paramsRequest: any, classDto: any) => {
    const payload: ErrorFormat[] = await classValidator(classDto, paramsRequest);
    if (payload.length > 0) throw new ErrorResponse("bad_request", "Bad request", 400, payload);
};

class ModuleEndpoint {
    private readonly _api: AxiosInstance;
    private readonly _awaitRequest: boolean;
    private _toggleRequestList: string[] = [];

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


    getModule = async () => {
        this._enqueue("getModule");
        const fetch = await this._api.get("/module/all");
        this._dequeue("getModule");
        return fetch.data;
    }

    postModule = async ({ moduleName }: PostModuleDto) => {
        await checkParams({ moduleName }, PostModuleDto);
        const fetch = await this._api.post("/module", { moduleName });
        return fetch.data;
    }

    deleteModule = async ({ moduleName }: PostModuleDto) => {
        this._enqueue("deleteModule");
        const fetch = await this._api.delete(`/module/${moduleName}`);
        this._dequeue("deleteModule");
        return fetch.data;
    }

}
export default ModuleEndpoint;