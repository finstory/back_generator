import { Slice } from "@reduxjs/toolkit";
import { addProxySuffix, removeProxySuffix } from "./proxy-suffix.util";
import validateUniqueActions from "./validate-unique-actions";

export const setModularClass = <T extends object>(instance: T, suffix: string) => {
    return addProxySuffix(instance, suffix);
}

export const setActionsToModularClass = (slice: Slice, actionsList: object[], suffixList: string[]) => {
    validateUniqueActions(slice.name, actionsList);
    removeProxySuffix(slice.actions, suffixList);
}
