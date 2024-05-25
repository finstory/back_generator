import errorWrapper from "@config/server/response/errors/throw-error-wrapper.response";

type MiddlewareOptions = { error_wrapper: boolean };

const controllerMiddlewares = async (controllers: any, middlewareOptions: MiddlewareOptions) => {
    for (const key in controllers) {

        if (middlewareOptions.error_wrapper)
            controllers[key] = errorWrapper((controllers[key]));


    }
    return controllers;
}
export default controllerMiddlewares;