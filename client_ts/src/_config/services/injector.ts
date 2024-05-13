
const Injector = {
    user: {} as any,
    auth: {} as any,
    add: (name, services) => {
        Injector[name] = services;
    },
};

export default Injector;