import errorWrapper from "@config/server/request-api/throw-error-wrapper";

type MiddlewareOptions = { error_wrapper: boolean };

const defaultOptions = { error_wrapper: true };

const controllerSettings = (controllers: any, middlewareOptions: MiddlewareOptions = defaultOptions) => {
    for (const key in controllers) {

        if (middlewareOptions.error_wrapper)
            controllers[key] = errorWrapper((controllers[key]));


    }
    return controllers;
}
export default controllerSettings;