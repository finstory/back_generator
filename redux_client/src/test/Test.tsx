import { createNestedTypedSelector, createTypedSelector, useAppDispatch, useSelector } from "@/_common/config/redux/hooks/redux";
import { userActions, userSelector } from "@/_common/redux";
import { RootState } from "@/_common/redux/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { bindActionCreators, ActionCreatorsMapObject } from '@reduxjs/toolkit';

import S from "@S";

export const useActions = <T extends ActionCreatorsMapObject>(actions: T) => {
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch);
};
export const Test = () => {
    const { otherMethod } = S.other;
    const { someMethod } = S.user;
    const selector = userSelector(user => user.value);
    useEffect(() => {
        console.log(selector);
    }, [selector])
    useEffect(() => {
        console.log("siiiiiii")
        someMethod();
    }, [])

    return (
        <div
            onClick={() => otherMethod()}
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
        >{"selector"}</div>
    )
}
