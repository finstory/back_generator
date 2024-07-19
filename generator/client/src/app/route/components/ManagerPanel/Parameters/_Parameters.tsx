
import { Button, Text, Mark } from '@/components';
import React, { FC } from 'react';

interface IProps {
    _scss: CSSModuleClasses;
}

export const Parameters: FC<IProps> = ({ _scss }) => {
    return (
        <div className={_scss.parameters}>

            <div className={_scss.options_list}>
                <Button variant='get' title='Request Type'>Get</Button>
                <Button variant='controller' title='Controller'>GetUserById</Button>
                <Button variant='middleware' title='Middleware'>Token</Button>
                <Button variant='middleware' title='Add Middleware'>+</Button>
            </div>
            <div className={_scss.description}>

                <Mark className={_scss.mark} variant='bar' />

                <Text label='p' color='base-off'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </Text>
            </div>

        </div>
    );
};
