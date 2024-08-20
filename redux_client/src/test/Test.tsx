import { userActions, userSelector } from "@/integrations/redux";
import { useEffect, useState } from "react";

import S from "@S";
import { useUserRx } from "@/integrations/rxjs/rx";


export const Test = () => {
    const { userRx$, userRx } = useUserRx();
    useEffect(() => {
        console.log(userRx.name.get())
        userRx.name.set('hola')
        console.log(userRx.name.get())
    }, [])


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

                }}
                style={{
                    padding: '2rem',
                    fontSize: '1rem',
                    backgroundColor: '#3b407b',
                    color: 'white'
                }}>OTHER</button>
            <button
                onClick={() => {
                    // console.log(setRx.children.address.get())
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

        </div>
    )
}
