import { useEffect, useState } from "react";
import { UpdateStateFunctions } from "../utils/create-update-state";
import RXJS from "../rx";


export const useRxState = <S, T extends string>(moduleName: T, rx: RXJS<S>) => {

    return () => {

        const [getRx$, setRx] = useState<S>(rx.subject.getValue() as S);

        useEffect(() => {
            console.log("se detecto un cambio")
            const subscription = rx.subject.subscribe((data: any) => {
                setRx(data);
            });
            return () => {
                subscription.unsubscribe();
            }
        }, [])

        return { [`${moduleName}Rx$`]: getRx$, [`${moduleName}Rx`]: rx.manageState } as { [K in `${T}Rx$`]: S } & { [K in `${T}Rx`]: UpdateStateFunctions<S> };
    };
};