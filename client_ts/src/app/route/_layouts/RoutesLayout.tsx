import { FC, ReactNode } from 'react';
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
