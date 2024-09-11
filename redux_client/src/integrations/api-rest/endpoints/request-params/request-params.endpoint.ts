import { AxiosInstance } from "axios";
import checkParams from "@config/errors/utils/check-errors.util";
import { DeleteEndpoint, PostEndpoint } from "./_validators/_index";
import { PatchValidationReloadDto } from "./_validators/patch-request-params.validate";


class RequestParamsEndpoint {
    private readonly _api: AxiosInstance;

    constructor(api: AxiosInstance) {
        this._api = api;
    }

    patchValidationReload = async ({ moduleName, controllerName }: PatchValidationReloadDto) => {
        // await checkParams({ moduleName, route, newRoute }, PatchEndpoint);
        const fetch = await this._api.patch("/validation/reload", { moduleName, controllerName });
        // return fetch.data;
    }

    deleteEndpoint = async ({ moduleName, route }: DeleteEndpoint) => {
        const fetch = await this._api.delete("/endpoint", { data: { moduleName, route } });
        return fetch.data;


    }

}
export default RequestParamsEndpoint;