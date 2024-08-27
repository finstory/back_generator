import { userFilteredSelector, userActions, userSelector } from "@/integrations/redux";
import { useEffect, useState } from "react";

import S from "@S";
import { useRouteRx } from "@/app/route/rxjs/route.rx";
import { useSelector } from "react-redux";

export const Test = () => {
    const { routeRx, routeRx$ } = useRouteRx();
    const userList = userFilteredSelector("admin");
    useEffect(() => {
        console.log(userList)
        // routeRx.lastName.set([])
        // console.log(routeRx.lastName.get())
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
