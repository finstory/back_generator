
import S from '@/services/all-services';
import { FC, ReactNode, useEffect } from 'react';
import { Interface } from 'readline';

interface IProps {
    children: ReactNode
}

export const RoutesLayout: FC<IProps> = ({ children }) => {
    const { testAuth, authState: { name } } = S.auth;
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
        <div className={"main_container"}>
            {children}
        </div>
    );
}
