import { useEffect, useState } from "react";
import { BehaviorSubject, observable, Subject } from 'rxjs';
import { setNewState } from "./utils/set-new-state";
import { createUpdateState } from "./utils/create-update-state";

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



// console.log(updateState.children.address.get())
// updateState.children.address.set({ street: "22 fals", number: 2 })
// console.log(updateState.children.address.get())
// updateState.children.address.set({ street: "32 fals" })
// console.log(updateState.children.address.get())

export class RXJS {

    private initialState: State = {
        name: "00facundo",
        lastName: "00garcia",
        other: {
            say: "00hello"
        },
        children: {
            name: "00facundo",
            lastName: "00garcia",
            address: {
                street: "00calle fals",
                number: 123000,
                height: 1.80000,
                oneMore: {
                    myStreet: "000calle fals"
                }
            },
        },
    };
    public subject = new BehaviorSubject<State>(this.initialState);
    public updateState = createUpdateState(this.initialState, this.subject);
}

const rx = new RXJS();
const userRx = rx.updateState;

export const useRx = <S extends State>() => {

    const [userRx$, setRx] = useState<S>(rx.subject.getValue() as S);

    useEffect(() => {
        console.log("se detecto un cambio")
        const subscription = rx.subject.subscribe((data: any) => {
            setRx(data);
        });
        return () => {
            subscription.unsubscribe();
        }
    }, [])


    return { userRx$, userRx: rx.updateState };
};

export default userRx;