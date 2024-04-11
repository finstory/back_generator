import React from "react";
import axios from "axios";
import { useRedux } from "../redux/reducer/useRedux";
import controller from './../../../api_ts/src/controllers/userControllers';

export const requestReducer = {
    bar_url: "/my_acount/:139?name:facu",

    endpoint_target: {
        id: "7Z2i38fAsbPT8Lfuf7iyF9",
        endpoint: "/jeje",
        description: "Get the user's account information from the database.",
        method: "get",
        nameController: "getProductJeje",
        middlewares: ["Token", "+"],
        params:
            { key: "id", value: "139" },
        query: [
            { key: "name", value: "facu" },
        ],
        body: [
            { key: "id", value: "139", type: "number", },
            { key: "name", value: "facu", type: "string", },
            { key: "user", value: "obect{}", type: "User", },
        ]
    },
};

export const useRequestServices = () => {
    const services = { ...useRedux("request") };
    const { request, setRequest } = services;

    // Add your services (or redux actions)...


    return services;
};
