import axios from 'axios';

import EndpointEndpoint from './endpoints/enpoint/endpoint.endpoint';
import RequestParamsEndpoint from './endpoints/request-params/request-params.endpoint';
import ModuleEndpoint from './endpoints/module/module.endpoint';

const BASE_URL = "http://localhost:3002";

class RestApi {
    protected readonly api = axios.create({ baseURL: BASE_URL });
    protected readonly delayToResend = 1000;

    protected readonly awaitRequest = true;
    protected readonly toggleRequest = false;

    //<Endpoints>
    public readonly module: ModuleEndpoint;
    public readonly endpoint: EndpointEndpoint;
    public readonly requestParams: RequestParamsEndpoint;

    constructor() {

        this.module = new ModuleEndpoint(this.api, this.awaitRequest);
        this.endpoint = new EndpointEndpoint(this.api, this.awaitRequest);
        this.requestParams = new RequestParamsEndpoint(this.api);
        
    }
}

export const rest_api = new RestApi();
export default RestApi;