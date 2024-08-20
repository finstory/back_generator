import { useEffect, useState } from "react";
import { BehaviorSubject, observable, Subject } from 'rxjs';
import { setNewState } from "./utils/set-new-state";
import { createUpdateState, UpdateStateFunctions } from "./utils/create-update-state";
import { useRxState } from "./hooks/useRxState";

export class RXJS<S> {

    private initialState: S;
    public subject: BehaviorSubject<S>;
    public manageState: UpdateStateFunctions<S>;
    constructor(initialState: S) {
        this.initialState = initialState;
        this.subject = new BehaviorSubject<S>(this.initialState);
        this.manageState = createUpdateState(this.initialState, this.subject);
    }

}


interface State {
    name: string;
    lastName: string;
    other: {
        say: string;
    };
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

const initialState: State = {
    name: "Juan",
    lastName: "Perez",
    other: {
        say: "hola"
    },
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
export const userRx = rx.manageState;
export const useUserRx = useRxState<State, "user">("user", rx);


// export const useRx = <S extends State>() => {

//     const [userRx$, setRx] = useState<S>(rx.subject.getValue() as S);

//     useEffect(() => {
//         console.log("se detecto un cambio")
//         const subscription = rx.subject.subscribe((data: any) => {
//             setRx(data);
//         });
//         return () => {
//             subscription.unsubscribe();
//         }
//     }, [])


//     return { userRx$, userRx: rx.updateState };
// };

export default userRx;