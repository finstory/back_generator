import React from "react";
import axios from "axios";
import { useRedux } from "../redux/reducer/useRedux";
import api from './../../helpers/axios';
import useToast from "../hooks/useToast";

export const requestReducer = {
    openEditor: false,
    editor: {
        name: "",
        value: "",
    },
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
    const { printAlert, alertConfirm } = useToast();
    const services = { ...useRedux("request") };
    const { request, setRequest } = services;

    // Add your services (or redux actions)...
    // module_target

    services.setDataToEdit = (name, value) => {
        setRequest({ editor: { name, value } }, "SET_DATA_TO_EDIT");
    };

    services.switchEditorModal = (option) => {
        setRequest({ openEditor: option }, "SWITCH_EDITOR_MODAL");
    }

    services.setRouteModuleTarget = (routeModule) => {
        setRequest({ route_module_target: routeModule }, "SET_ROUTE_TARGET");
    };

    services.setEndpointTarget = (item) => {
        setRequest({ endpoint_target: item }, "SET_ENDPOINT_TARGET");
    };

    services.addControllerTypes = async (routeModule, controllerName, requestType, newType) => {
        try {
            if (!routeModule && !controllerName && !requestType) return;

            const response = await api.post("controller/types", { routeModule, controllerName, requestType, newType });
            if (response) printAlert(response.data);
        } catch (error) {
            printAlert(error.response.data.payload || error.massage, "error");
        }
    }

    services.editControllerTypes = async (routeModule, controllerName, requestType, newType) => {
        try {
            const response = await api.patch("controller/types", { routeModule, controllerName, requestType, newType });

            if (response) printAlert(response.data);
            
        } catch (error) {
            printAlert(error.response.data.payload || error.massage, "error");
        }
    }

    services.deleteControllerTypes = async (routeModule, controllerName, requestType, key) => {
        try {
            const response = await api.delete("controller/types", { data: { routeModule, controllerName, requestType, key } });
            if (response) printAlert(response.data);
        } catch (error) {
            printAlert(error.response.data.payload || error.massage, "error");
        }
    }

    return services;
};
