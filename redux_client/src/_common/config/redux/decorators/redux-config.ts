// import 'reflect-metadata';
// import { getObjState as state, setReducer, getState } from "@/_common/old_redux/hooks/useRedux";

// export type SetRedux = (data: object, actionName: string) => void;

// export function Redux(target: any, propertyKey: string) {
//     const reduxProperties = Reflect.getMetadata('reduxProperties', target) || [];
//     Reflect.defineMetadata('reduxProperties', [...reduxProperties, propertyKey], target);
// }


// export function ReduxConfig<T extends { new(...args: any[]): {} }>(constructor: T) {

//     return class extends constructor {
//         constructor(...args: any[]) {
//             super(...args);

//             const reduxProperties = Reflect.getMetadata('reduxProperties', this) || [];

//             for (const propGetting of reduxProperties) {
//                 const prop = propGetting.startsWith('_') ? propGetting.slice(1) : propGetting;

//                 if (prop.endsWith("State") && !propGetting.startsWith("_")) {
//                     const stateName = prop.replace("State", "");
//                     Object.defineProperty(this, propGetting, {
//                         get: function () {
//                             return getState(stateName);
//                         },
//                         enumerable: true,
//                         configurable: true
//                     });
//                     continue;
//                 }

//                 if (prop.startsWith("set")) {
//                     if (!propGetting.startsWith("_")) throw new Error("set method must be private, please add '_' before the method name.");

//                     const reducerName = prop.replace("set", "");
//                     if (reducerName.charAt(0) === reducerName.charAt(0).toUpperCase()) {

//                         Object.defineProperty(this, propGetting, {
//                             value: setReducer(reducerName.charAt(0).toLowerCase() + reducerName.slice(1)),
//                             writable: true,
//                             enumerable: false,
//                             configurable: true
//                         });

//                         continue;
//                     }
//                 }
//                 else {
//                     if (!propGetting.startsWith("_")) throw new Error("set method must be private, please add '_' before the method name.");
//                     const stateName = prop.replace("State", "");

//                     Object.defineProperty(this, propGetting, {
//                         get: function () {
//                             return state[stateName];
//                         },
//                         enumerable: false,
//                         configurable: true
//                     });

//                     continue;
//                 }

//             }

//         }
//     }
// }