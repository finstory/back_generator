import printAlert from "@/_common/_plugins/toast-alerts";
import payloadToString from "../utils/payload-to-string.util";

export function PrintError(target: any, propertyKey: string) {
    const existingPrintErrors = Reflect.getMetadata('printError', target) || [];
    Reflect.defineMetadata('printError', [...existingPrintErrors, propertyKey], target);
}


export function PrintErrRes<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        constructor(...args: any[]) {
            super(...args);
            const printErrorMethods = Reflect.getMetadata('printError', this) || [];
            for (const method of printErrorMethods) {
                const originalMethod = this[method];
                this[method] = async (...args: any[]) => {
                    try {
                        await originalMethod.apply(this, args);
                    } catch (error) {
                        console.error(payloadToString(error));
                        printAlert(payloadToString(error), "error");
                    }
                }
            }
        }
    }
}