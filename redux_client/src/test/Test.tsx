import { userActions, userSelector } from "@/integrations/redux";
import { useEffect } from "react";

import S from "@S";
import userRx from "@/integrations/rxjs/rx";


export const Test = () => {
    // const { userRx } = useRx();

    // useEffect(() => {
    //     if (userRx$) {
    //         console.log(userRx$.children.address);
    //     }
    // }, [userRx$.children.address])
    useEffect(() => {
        console.log(userRx.children.address.get())
    }, [])

    const { someMethod } = S.user;
    // const { $obs, enviarDatos, getObs } = rx();
    const selector = userSelector(user => user.children.name);
    // useEffect(() => {
    //     console.log($obs)
    // }, [$obs]);
    return (
        <div

            style={{
                position: 'absolute',
                top: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontSize: '2rem',
                padding: '1rem',
                backgroundColor: 'purple'
            }}
        >
            <button
                onClick={() => {
                    setRx.children.address.set({ street: "22 fals", number: 2 })
                }}
                style={{
                    padding: '2rem',
                    fontSize: '1rem',
                    backgroundColor: '#3b407b',
                    color: 'white'
                }}>OTHER</button>
            <button
                onClick={() => {
                    console.log(setRx.children.address.get())
                    // enviarDatos({ ...getObs(), name: 'hola', value: 2 })
                    // enviarDatos({ ...getObs(), name: 'chau' })
                }}
                style={{
                    padding: '2rem',
                    fontSize: '1rem',
                    backgroundColor: '#3b407b',
                    color: 'white'
                }}
            >Services</button>
            {selector}
        </div>
    )
}
