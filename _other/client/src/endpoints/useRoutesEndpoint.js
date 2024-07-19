import { useEffect } from "react";
import api from "../../helpers/axios";
import useToast from "../hooks/useToast";


const useRoutesEndpoints = () => {
    const { printAlert, alertConfirm } = useToast();
    const endpoints = {
        getAllRoutes: async () => { },
        postRoute: async (routeModule, endpoint, method) => { },
        postRouteModule: async (routeModule) => { },
        patchRouteModule: async (routeModule, newRouteModule) => { },
        patchRoute: async (id, routeModule, newEndpoint, newMethod, controllerName) => { },
        deleteRoute: async (routeModule, controllerName, id, includeController = false) => { },
        deleteRouteModule: async (routeModule) => { },
    };

    const basePath = "endpoint/";

    endpoints.getAllRoutes = async () => {
        try {
            const response = await api.get(basePath + "all");
            return response.data;
        } catch (error) {
            throw new Error(error.response.data.payload || error.message);
        }
    }

    endpoints.postRoute = async (routeModule, endpoint, method) => {
        try {
            const response = await api.post(basePath, {
                routeModule,
                endpoint,
                method,
            });
            return response.data;
        } catch (error) {
            throw new Error(error.response.data.payload || error.message);
        }
    }

    endpoints.postRouteModule = async (routeModule) => {
        try {
            const response = await api.post(basePath + "module", {
                routeModule,
            });
            return response.data;
        } catch (error) {
            throw new Error(error.response.data.payload || error.message);
        }
    }

    endpoints.patchRouteModule = async (routeModule, newRouteModule) => {
        try {
            const response = await api.patch(basePath + "module", {
                routeModule,
                newRouteModule,
            });
            return response.data;
        } catch (error) {
            throw new Error(error.response.data.payload || error.message);
        }
    }

    endpoints.patchRoute = async (id, routeModule, newEndpoint, newMethod, controllerName) => {
        try {
            const response = await api.patch(basePath, {
                id,
                routeModule,
                endpoint: newEndpoint,
                method: newMethod,
                controllerName,
            });
            return response.data;
        } catch (error) {
            throw new Error(error.response.data.payload || error.message);
        }
    }

    endpoints.deleteRoute = async (routeModule, controllerName, id, includeController = false) => {
        try {
            const response = await api.delete(basePath, {
                data: {
                    id,
                    routeModule,
                    controllerName,
                    includeController,
                },
            });
            return response.data;
        } catch (error) {
            throw new Error(error.response.data.payload || error.message);
        }
    }

    endpoints.deleteRouteModule = async (routeModule) => {
        try {
            const response = await api.delete(basePath + "module", { data: { routeModule } });
            return response.data;
        } catch (error) {
            throw new Error(error.response.data.payload || error.message);
        }
    }



    endpoints.test = () => {
        console.log("test")
        printAlert("test");
    }

    return endpoints;
}

export default useRoutesEndpoints();