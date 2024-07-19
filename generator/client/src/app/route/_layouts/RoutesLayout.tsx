
import S from '@/services/all-services';
import { FC, ReactNode, useEffect } from 'react';
import { Interface } from 'readline';

interface IProps {
    children: ReactNode
}

export const RoutesLayout: FC<IProps> = ({ children }) => {


    return (
        <div className={"main_container"}>
            {children}
        </div>
    );
}
