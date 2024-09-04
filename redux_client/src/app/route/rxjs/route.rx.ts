import { useRxState } from "@/_common/config/rxjs/hooks/useRxState";
import RXJS from "@/_common/config/rxjs/rx";

interface RouteRxState {
    name: string;
    lastName: { name: string, active: boolean }[],
    other: {
        say: string;
    };
    activeMenuModal: boolean;
    children: {
        name: string;
        lastName: string;
        address: {
            street: string;
            number: number;
            height: number;
            oneMore: {
                myStreet: string;
            }
        };
    };
};

const initialState: RouteRxState = {
    name: "Juan",
    lastName: [{ name: "Perez", active: true }],
    other: {
        say: "hola"
    },
    activeMenuModal: false,
    children: {
        name: "juanito",
        lastName: "perez",
        address: {
            street: "falsa",
            number: 123,
            height: 2,
            oneMore: {
                myStreet: "falsa"
            }
        }
    }
}

const rx = new RXJS(initialState);
export const routeRx = rx.manageState;
export const useRouteRx = useRxState<RouteRxState, "route">("route", rx);
