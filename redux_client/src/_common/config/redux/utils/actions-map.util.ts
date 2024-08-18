import * as Redux from "@/integrations/redux";

export type ActionsMap = {
    [K in keyof typeof Redux as K extends `${infer Prefix}Actions` ? Uncapitalize<Prefix> : never]: ReturnType<typeof Redux[K]>;
};

export function getAllActions(): ActionsMap {
    const actionsMap: { [key: string]: any } = {};

    for (const key in Redux) {
        if (key.endsWith('Actions') && typeof Redux[key] === 'function') {
            const sliceName = key.replace('Actions', '');
            actionsMap[sliceName] = Redux[key]();
        }
    }

    return actionsMap as ActionsMap;
}