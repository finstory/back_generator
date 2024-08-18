import { userActions, userSelector } from "@/integrations/redux";
import { useEffect } from "react";

import S from "@S";
import { rx } from "./rx";

export const Test = () => {
    const { someMethod, view, change } = S.user;
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
                    view();
                }}
                style={{
                    padding: '2rem',
                    fontSize: '1rem',
                    backgroundColor: '#3b407b',
                    color: 'white'
                }}>OTHER</button>
            <button
                onClick={() => {
                    change();
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
