import React, { useEffect } from 'react'
import S from '@S';

export const Other = () => {
    const { testAuth, authState: { user: { name } } } = S.auth;
    const { listProduct } = S.product;
    // const { testAuth } = S.auth;
    // const { authState: { name } } = S.auth;
    const test = () => {
        testAuth();
    }

    useEffect(() => {

        console.log(name)
    }, [name]);
    return (
        <div>Other</div>
    )
}
