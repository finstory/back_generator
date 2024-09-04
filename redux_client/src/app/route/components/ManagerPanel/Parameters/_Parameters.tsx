
import { IRoute } from '@/app/module/_interfaces/module.interface';
import { Button, Text, Mark } from '@/components';
import React, { FC } from 'react';

interface IProps {
    _scss: CSSModuleClasses;
    route: IRoute;
    requestParamsList: any;
}

export const Parameters: FC<IProps> = ({ _scss, route }) => {
    const { description, requestType, controllerName } = route;
    return (
        <div className={_scss.parameters}>

            <div className={_scss.options_list}>
                <Button variant={route.requestType} title='Request Type'>{requestType.toUpperCase()}</Button>
                <Button variant='controller' title='Controller'>{controllerName}</Button>
                <Button variant='middleware' title='Middleware'>Token</Button>
                {/* <Button variant='middleware' title='Add Middleware'>+</Button> */}
            </div>
            {/* <div className={_scss.description}>

                <Mark className={_scss.mark} variant='bar' />

                <textarea >
                    {description ? description : ' + Añade una descripción...'}
                </textarea>
            </div> */}

        </div>
    );
};
