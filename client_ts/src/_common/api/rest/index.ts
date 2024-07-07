import axios from 'axios';
import ModuleEndpoint from "./endpoints/module.endpoint";
import EndpointEndpoint from './endpoints/endpoint.endpoint';

const BASE_URL = "http://localhost:3002";

class RestApi {
    protected readonly api = axios.create({ baseURL: BASE_URL });
    protected readonly delayToResend = 1000;

    protected readonly awaitRequest = true;
    protected readonly toggleRequest = false;

    public readonly module!: ModuleEndpoint;
    public readonly endpoint!: EndpointEndpoint;

    constructor() {

        this.module = new ModuleEndpoint(this.api, this.awaitRequest);
        this.endpoint = new EndpointEndpoint(this.api, this.awaitRequest);
    }
}

export const rest_api = new RestApi();
export default RestApi;