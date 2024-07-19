import { FC, useEffect, useState } from "react";
import { Text, IText, DGBorder, Button, IDGBorder } from "@components";
import scss from "@route/_scss/manager_panel.module.scss";
import S from "@S";
import { Title } from "./Title/_Title";
import { Parameters } from "./Parameters/_Parameters";


export const ManagerPanel: FC = () => {
    const { removeModule } = S.module;

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
            </div>

        </DGBorder >
    )
};
