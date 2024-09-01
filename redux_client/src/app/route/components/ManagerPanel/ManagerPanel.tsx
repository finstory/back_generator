import { FC, useEffect, useState } from "react";
import { Text, IText, DGBorder, Button, IDGBorder } from "@components";
import scss from "@route/_scss/manager_panel.module.scss";
import S from "@/services/main.service";
import { Title } from "./Title/_Title";
import { Parameters } from "./Parameters/_Parameters";
import RequestInput from "./RequestInput/_RequestInput";
import ParamsSelector from "./ParamsSelector/_ParamsSelector";
import PropertiesList from "./PropertiesList/_PropertiesList";

import { IRoute } from "@/modules/module/_interfaces/module.interface";


export const ManagerPanel: FC = () => {

    const { findRoute } = S.route;
    const { modulesList } = S.module.moduleState;
    const { routeManager: { moduleName, routeId, status } } = S.route.routeState;
    const [route, setRoute] = useState<IRoute>();

    useEffect(() => {
        if (routeId) setRoute(findRoute(moduleName, routeId));

    }, [routeId, modulesList])

    return (
        <DGBorder className={scss.endpoint_panel}
            effectHeight={"51rem"}
            effect={true}
            borderRadius={"2rem"}
            borderSize={"2px"}
            borderBetween={"3px"}
        >
            {
                route ?
                    <div className={scss.panel}>
                        <Title _scss={scss} moduleName={moduleName} endpointName={route.endpointName} />
                        <Parameters _scss={scss} route={route} requestParamsList={route.params} />
                        <RequestInput _scss={scss} />
                        <ParamsSelector _scss={scss} route={route} />
                        <PropertiesList _scss={scss} route={route} />
                    </div>
                    :
                    <div className={`${scss.panel} ${scss.disabled}`}
                        style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                    >
                        <Text label="h2" size="medium" fontWeight="300" title="MANAGER PANEL">PLEASE SELECT ONE ENDPOINT...</Text>
                    </div>

            }

        </DGBorder >
    )
};
