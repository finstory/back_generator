import { FC, useEffect, useState } from "react";
import { Text, IText, DGBorder, Button, IDGBorder } from "@components";
import scss from "@route/_scss/manager_panel.module.scss";
import S from "@S";
import { Title } from "./Title/_Title";
import { Parameters } from "./Parameters/_Parameters";
import RequestInput from "./RequestInput/_RequestInput";
import ParamsSelector from "./ParamsSelector/_ParamsSelector";
import PropertiesList from "./PropertiesList/_PropertiesList";
import { rest_api } from "@/_common/api/rest";


export const ManagerPanel: FC = () => {
    const { removeModule } = S.module;
    
    rest_api.endpoint.postEndpoint({ route: { endpointName: "2323", requestType: "GET" } , moduleName: "test"})
    return (
        <DGBorder className={scss.endpoint_panel}
            effectHeight={"51rem"}
            effect={true}
            borderRadius={"2rem"}
            borderSize={"2px"}
            borderBetween={"3px"}
        >

            <div className={scss.panel}>
                <Title _scss={scss} />
                <Parameters _scss={scss} />
                <RequestInput _scss={scss} />
                <ParamsSelector _scss={scss} />
                <PropertiesList _scss={scss} />
            </div>

        </DGBorder >
    )
};
