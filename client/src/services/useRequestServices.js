import React from "react";
import axios from "axios";
import { useRedux } from "../redux/reducer/useRedux";

export const requestReducer = {
    bar_url: "/my_acount/:139?name:facu",
    route_module_target: "user",
    endpoint_target: {
        id: "7Z2i38fAsbPT8Lfuf7iyF9",
        endpoint: "/",
        description: "Get the user's account information from the database.",
        method: "get",
        controllerName: "getProductJeje",
        middlewares: ["Token", "+"],
        params: [],
        query: [],
        body: [],
    },
};

export const useRequestServices = () => {
    const services = { ...useRedux("request") };
    const { request, setRequest } = services;

    // Add your services (or redux actions)...
    // module_target

    services.setRouteModuleTarget = (routeModule) => {
        setRequest({ route_module_target: routeModule }, "SET_ROUTE_TARGET");
    };

    services.setEndpointTarget = (item) => {
        setRequest({ endpoint_target: item }, "SET_ENDPOINT_TARGET");
    };

    return services;
};
