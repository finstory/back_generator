import { IRoute } from '@/app/module/_interfaces/module.interface';
import { InitializeSlice, ReduxSlice } from '@config/redux/decorators/redux-slice';
import { SliceSelector } from '@config/redux/decorators/slice-selectors';
import { prepareSlice, setSelector } from '@config/redux/utils';
import { PayloadAction as PA, Reducer } from '@reduxjs/toolkit';


export default interface RouteState {
    routeManager: {
        moduleName: string;
        routeId: string;
    };
}

@SliceSelector
@InitializeSlice
class RouteSlice extends ReduxSlice<RouteSlice> {

    initialState: RouteState = {
        routeManager: {
            moduleName: "",
            routeId: "",
        }
    };

    // % Actions:

    setRouteManager = (state: RouteState, { payload }: PA<RouteState["routeManager"]>) => {
        state.routeManager = payload;
    };

    //% Selectors:

    findRouteSelector = () => {
        return setSelector(

            [({ route }) => route.routeManager, ({ module }) => module.modulesList],
            (routeManager, modulesList) => {

                const { moduleName, routeId } = routeManager;
                const module = modulesList.find((module) => module.name === moduleName);

                if (!module) return null;

                const route = module.routes.find((route) => route.id === routeId);

                if (!route) return null;

                return route;
            }
        );
    }

    findRouteByIdSelector = () => {
        return setSelector(
            [({ module }) => module.modulesList],
            (modulesList) => (routeId: string) => {
                for (let module of modulesList) {
                    const route = module.routes.find((route) => route.id === routeId);
                    if (route) return route;
                }
                return null;
            }
        );
    }

}


//% Exports:
const slice = new RouteSlice();
const { selector, actions, reducers, allSelectors } = prepareSlice<RouteSlice, "route">(slice);

export const routeReducers = reducers as Reducer<RouteState>;
export const routeSelector = selector;
export const routeActions = actions;
export const selectRoute = allSelectors;