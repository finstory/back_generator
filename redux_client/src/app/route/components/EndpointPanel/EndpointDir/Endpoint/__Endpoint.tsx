import React, { FC, useState } from 'react';
import { Text, Mark, IconButton } from '@components';
import EndpointEditor from './___EndpointEditor';
import AddEndpoint from './___AddEndpoint';
import S from '@/_common/services/main.service';
import { IRoute } from '@/app/module/_interfaces/module.interface';
import { routeSelector } from '@/integrations/redux/slices/route.slice';


interface IProps {
    _scss: CSSModuleClasses;
    route: IRoute;
    moduleName: string;
}

const Endpoint: FC<IProps> = ({ _scss, moduleName, route }) => {
    const { deleteRoute, selectRouteManager } = S.route;
    const routeId$ = routeSelector(route => route.routeManager.routeId);
    const [editModeActive, setEditModeActive] = useState<boolean>(false);
    // const { reloadRequestParams } = S.validation;

    //$MOSTRAR
    const toggleSelected = () => {
        if (routeId$ !== route.id)
            selectRouteManager(moduleName, route.id, route.controllerName);
        // reloadRequestParams(moduleName, route.controllerName);
    };

    return (
        <div key={route.id} className={_scss.endpoint}>
            {editModeActive
                ?
                <EndpointEditor _scss={_scss} moduleName={moduleName} route={route} active={setEditModeActive} />
                :
                <div className={_scss.wrap} onClick={toggleSelected} >
                    <Mark
                        className={_scss.mark}
                        variant={routeId$ === route.id ? 'rhombus' : 'bar'}
                        color={routeId$ === route.id ? 'primary' : 'base-off'}
                    />

                    <Text className={_scss.text} label="p"
                        color={routeId$ === route.id ? 'primary' : 'base-off'}
                    >
                        {route.endpointName.toUpperCase()} -

                        <Text className={_scss.text} label="span" color={route.requestType}> {route.requestType.toUpperCase()} </Text>

                    </Text>

                    <div className={_scss.wrap_editor}>
                        <IconButton icon="edit_primary" onClick={() => { setEditModeActive(true) }} />
                        <IconButton icon="delete_primary" onClick={() => { deleteRoute(moduleName, route) }} />
                    </div>

                </div>}

        </div>
    );
};

export default Endpoint;