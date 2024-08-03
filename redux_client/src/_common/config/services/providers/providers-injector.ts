import { useServices } from "@/_common/config/services/providers/ServicesProvider";

const servicesList: string[] = [];

/**
 * [🇺🇸] Add a primary service so it can be accessed from the 'ServicesProvider' provider. The 'S' class will automatically create the context of the marked service.
 * 
 * [🇪🇸] Agrega un servicio primario para que pueda accederse desde el provedor 'ServicesProvider'. La clase 'S' creará automaticamente el context del servicio marcado.
 * 
 * Example :
 * 
 * '@PrimaryService product = new ProductService()' 
 * 
 * // You can access to product service in any component using :
 * 
 * import S from "@services/all-services";
 * 
 *   const product = S.product;
 */
export function PrimaryService(target: any, propertyKey: string) {
    servicesList.push(propertyKey);
}

function autoGenerateGetters(instance: any) {
    for (const key of servicesList) {
        Object.defineProperty(instance, key, {
            get() {
                return useServices()[key];
            },
            enumerable: true,
            configurable: true,
        });
    }
};

export default class S { constructor() { autoGenerateGetters(this) } };