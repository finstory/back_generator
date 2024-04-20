const S = {
    generator: {},
    ast: {},
};

const getServices = (name) => {
    return S[name];
};

const addServices = (name, services) => {
    S[name] = services;
};

module.exports = { S, getServices, addServices };