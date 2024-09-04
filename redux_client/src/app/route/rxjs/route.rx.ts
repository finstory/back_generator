import { useRxState } from "@/_common/config/rxjs/hooks/useRxState";
import RXJS from "@/_common/config/rxjs/rx";

export default interface RouteRxState {
    endpointPanel: {
        moduleEditorOpen: boolean;
        moduleSelected: string;
    };
    routeManager: {
        status: "ok" | "loading";
        paramsSelected: "params" | "query" | "body" | "bodyResponse";
    };
};

const initialState: RouteRxState = {
    endpointPanel: {
        moduleEditorOpen: false,
        moduleSelected: "some",
    },
    routeManager: {
        status: "ok",
        paramsSelected: "params",
    },
}

const rx = new RXJS(initialState);
export const routeRx = rx.manageState;
export const useRouteRx = useRxState<RouteRxState, "route">("route", rx);
