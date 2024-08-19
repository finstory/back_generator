import { useEffect, useState } from "react";
import { BehaviorSubject, observable, Subject } from 'rxjs';

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

const sharedSubject = new BehaviorSubject<State>({
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
});

export const getObs = () => {
    return sharedSubject.getValue();
}

export const enviarDatos = (data: State) => {
    sharedSubject.next(data);
};

export class RXJS {
    private subject = new BehaviorSubject<State>(
        { name: "00facundo", lastName: "00garcia", other: { say: "00hello" }, children: { name: "00facundo", lastName: "00garcia", address: { street: "00calle fals", number: 123000, height: 1.80000, oneMore: { myStreet: "000calle fals" } } } });
    private subscription = this.subject.subscribe((data) => {
        console.log(data)
    });

    public getObs = () => {
        return this.subject.getValue();
    }

    public enviarDatos = (data: State) => {
        this.subject.next(data);
    };

    public unsubscribe = () => {
        this.subscription.unsubscribe();
    }
}

// export const rx = () => {

//     const [$obs, setObs] = useState<Msg>({ name: '', value: 0 });

//     useEffect(() => {
//         console.log("se detecto un cambio")
//         const subscription = sharedSubject.subscribe((data) => {
//             console.log(data)
//             setObs(data);
//         });
//         return () => {
//             subscription.unsubscribe();
//         }
//     }, [])


//     const enviarDatos = (data: Msg) => {
//         sharedSubject.next(data);
//     };

//     const getObs = () => {
//         return sharedSubject.getValue();
//     }

//     // subscription.unsubscribe();

//     return { $obs, enviarDatos, getObs };
// };
