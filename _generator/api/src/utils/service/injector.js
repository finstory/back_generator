
const S = {
    ast: {
        getPosComment: (textCode, comment) => { },
        editImport: (textCode, importName, newImportName, newImportPath) => { },
        getPosImport: (textCode, importName) => { },
        replaceCompilerBody: (textCode, name, newPropsList = []) => { },
        editFunctionProperty: (textCode, compilerName, propName, newPropName) => { },
        getPosFunctionProperty: (textCode, compilerName, propName) => { },
        editClassMethod: (textCode, className, methodName, newMethodName, argsList) => { },
        getPosClassMethod: (textCode, className, methodName) => { }
    },
    fs: {
        getFile: async (filePath, jsonFormat = true) => { },
        createFile: async (filePath, code = "") => { },
        createFolder: async (folderPath) => { },
        replaceFile: async (filePath, code = "") => { },
        renameFile: async (oldName, newName, directory = "", type = "ts") => { },
        deleteFile: async (filePath) => { },
        deleteFolder: async (folderPath) => { },
    },
    generator: {
        getLineFunctionProperty: async (filePath, compilerName, controllerName) => { },
        renameClassMethod: async (filePath, className, methodName, newMethodName, argsList) => { },
        renameFunctionProperty: async (filePath, compilerName, propName, newPropName) => { },
        renameImport: async (filePath, importName, newImportName, newImportPath) => { },
        addCodeAfterTag: async (filePath, tagName, codeToAdd, addSpace = false) => { },
        removeFunctionProperty: async (filePath, compilerName, propName) => { },
        removeImport: async (filePath, importName) => { },
        removeClassMethod : async (filePath, className, methodName) => { },
        replaceCompiledImport: async (filePath, importName, importList) => { },
    },
    route: {
        getAllRoutes: async () => { },
        createRouteModule: async (routeModule) => { },
        createRoute: async (routeModule, endpoint, method, controllerName) => { },
        editRouteModule: async (routeModule, newRouteModule) => { },
        editRoute: async (id, routeModule, newEndpoint, newMethod, newControllerName) => { },
        deleteRoute: async (id, routeModule) => { },
        deleteRouteModule: async (routeModule) => { },
        editRouteTypes: async (routeModule, controllerName, newTypesList) => { },
        generateControllerName: (routeModule, endpoint, method) => { }
    },
    controller: {
        createControllerFile: async (routeModule) => { },
        deleteControllerFile: async (routeModule) => { },
        addController: async (routeModule, controllerName) => { },
        renameController: async (routeModule, controllerName, newControllerName) => { },
        deleteController: async (routeModule, controllerName) => { },
        getPosController: async (routeModule, controllerName) => { },
        reloadIndexController: async () => { },
    },
    add: (name, services) => {
        S[name] = services;
    },
};


module.exports = S;