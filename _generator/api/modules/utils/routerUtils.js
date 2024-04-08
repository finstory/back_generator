const { underscoreToUpperCase } = require("../helpers/wordsManager");

const getEndpointNames = (endpoint, underscore = false) => {
    const parts = endpoint.split("/");
    let endpointList = [];
    let params = "";
    
    if (endpoint === "/") return { endpointList, params };

    for (let i = 1; i < parts.length; i++) {
        if (parts[i].startsWith(":")) {
            params = parts[i].substring(1);
        } else {
            if (underscore) endpointList.push(underscoreToUpperCase(parts[i]));
            else endpointList.push(parts[i]);
        }
    }
    if (endpointList.length === 0 || endpointList[0] === "") endpointList = undefined;
    if (params === "") params = undefined;

    return { endpointList, params };
};



module.exports = { getEndpointNames };