import React from "react";
import axios from "axios";
import { useRedux } from "../redux/reducer/useRedux";
import api from './../../helpers/axios';

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

    services.editControllerTypes = async (routeModule, targetSelected, item, newType, propToEdit) => {

        const newTypesList = { params: item.params, query: item.query, body: item.body, response_body: item.response_body };

        for (const key in item)
            if (key === targetSelected)
                newTypesList[key].map(obj => {
                    if (obj.key === newType.key) {
                        if (propToEdit === "key") obj.key = newType.value;
                        if (propToEdit === "value") obj.value = newType.value;
                    }
                })

        const response = await api.post("controller/types", { routeModule, controllerName: item.controllerName, newTypesList });
        return response.data.lineIndex;
    }

    return services;
};
