import React, { useEffect, useState } from 'react'
import { Ejemplo, Params } from './Params';
import parametersValidator from '@/_common/config/validations';
import { rest_api } from '@/_common/api/rest';
import S from "@S";
export const Test = () => {
    const { addModule } = S.module;

    const [first, setfirst] = useState<any>({})
    const testing =  () => {
    }

    useEffect(() => {
    }, []);

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
        >{JSON.stringify(first, null, 4)}</div>
    )
}
