import React, { FC, useState } from 'react';
import { IRoute } from '@/_modules/module/_interfaces/module.interface';
import { Text, Mark, IconButton } from '@components';
import EndpointEditor from './__EndpointEditor';


interface IProps {
    _scss: CSSModuleClasses;
    route: IRoute;
    moduleName: string;
}

const Endpoint: FC<IProps> = ({ _scss, moduleName, route }) => {
    const [editModeActive, setEditModeActive] = useState<boolean>(false);
    return (
        <div key={route.id} className={_scss.endpoint}>
            {editModeActive
                ?
                <EndpointEditor _scss={_scss} moduleName={moduleName} route={route} active={setEditModeActive} />
                :
                <div className={_scss.wrap}>
                    <Mark className={_scss.mark} variant="bar" />

                    <Text className={_scss.text} label="p" color="base-off" >
                        {route.endpointName.toUpperCase()} -

                        <Text className={_scss.text} label="span" color={route.requestType}> {route.requestType.toUpperCase()} </Text>

                    </Text>

                    <div className={_scss.wrap_editor}>
                        <IconButton icon="edit_primary" onClick={() => { setEditModeActive(true) }} />
                        <IconButton icon="delete_primary" />
                    </div>

                </div>}

        </div>
    );
};

export default Endpoint;