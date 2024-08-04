import { userSelector } from "@/_common/redux/_index";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { bindActionCreators, ActionCreatorsMapObject } from '@reduxjs/toolkit';
import S from "@S";

export const Test = () => {
    // const { otherMethod } = S.other;
    const { someMethod } = S.user;
    const selector = userSelector(user => user.name);

    useEffect(() => {
        console.log(selector);
    }, [selector])

    useEffect(() => {
        someMethod();
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
                style={{
                    padding: '2rem',
                    fontSize: '1rem',
                    backgroundColor: '#3b407b',
                    color: 'white'
                }}
                onClick={someMethod}>Services</button>
            {selector}
        </div>
    )
}
