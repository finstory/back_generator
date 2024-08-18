import { useEffect, useState } from "react";
import { BehaviorSubject, observable, Subject } from 'rxjs';

const sharedSubject = new BehaviorSubject<Msg>({ name: '', value: 0 });
interface Msg {
    name?: string;
    value?: number;
}

export const getObs = () => {
    return sharedSubject.getValue();
}

export const enviarDatos = (data: Msg) => {
    sharedSubject.next(data);
};

export const rx = () => {

    const [$obs, setObs] = useState<Msg>({ name: '', value: 0 });

    useEffect(() => {
        console.log("se detecto un cambio")
        const subscription = sharedSubject.subscribe((data) => {
            console.log(data)
            setObs(data);
        });
        return () => {
            subscription.unsubscribe();
        }
    }, [])


    const enviarDatos = (data: Msg) => {
        sharedSubject.next(data);
    };

    const getObs = () => {
        return sharedSubject.getValue();
    }

    // subscription.unsubscribe();

    return { $obs, enviarDatos, getObs };
};
