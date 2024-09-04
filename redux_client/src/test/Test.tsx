
import { useEffect, useState } from "react";
import S from "@/_common/services/main.service";
import { useRouteRx } from "@/app/route/rxjs/route.rx";
import { selectUser, userActions, userSelector } from "@redux";

export const Test = () => {
    const { routeRx, routeRx$ } = useRouteRx();
    const { someMethod } = S.user;

    const users = userSelector(user => user.users);
    const { increment } = userActions();
    // increment()
    useEffect(() => {
        someMethod()
        // routeRx.lastName.set([])
        console.log(routeRx$.lastName)
    }, [JSON.stringify(routeRx$.lastName)])


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
                backgroundColor: 'purple',
            }}

        >
            <button
                onClick={() => {
                    routeRx.lastName.set([...routeRx.lastName.get(), { name: 'me', active: false }])
                    // console.log(routeRx.lastName.get())
                }}
                style={{
                    padding: '2rem',
                    fontSize: '1rem',
                    backgroundColor: '#3b407b',
                    color: 'white'
                }}>OTHER</button>
            <button
                onClick={() => {
                    routeRx.name.set("FACCsdsdU")
                }}
                style={{
                    padding: '2rem',
                    fontSize: '1rem',
                    backgroundColor: '#3b407b',
                    color: 'white'
                }}
            >name</button>

        </div>
    )
}
