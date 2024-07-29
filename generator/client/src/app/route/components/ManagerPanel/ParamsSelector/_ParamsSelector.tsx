import { Text } from "@/components";
import React, { FC, useState } from "react";
import S from "@S";
import { IRoute } from "@/modules/module/_interfaces/module.interface";
import { underscoreToClassName, upFirst } from "@/_common/helpers/wordsManager";

interface IProps {
    _scss: CSSModuleClasses;
    route: IRoute;
}

type paramsOptions = {
    name: "params" | "query" | "body" | "body_response";
    color: "primary" | "base-off";
    isNull: boolean;
};

const ParamsSelector: FC<IProps> = ({ _scss, route }) => {
    const { toggleParamsSelector } = S.route;
    const { routeManager: { paramsSelected } } = S.route.routeState;
    // const [paramsOptions, setParamsOptions] = useState<paramsOptions[]>([
    //     {
    //         name: "PARAMS",
    //         color: "primary",
    //         isNull: false,
    //     },
    //     {
    //         name: "QUERY",
    //         color: "base-off",
    //         isNull: true,
    //     },
    //     {
    //         name: "BODY",
    //         color: "base-off",
    //         isNull: true,
    //     },
    //     {
    //         name: "RESPONSE",
    //         color: "base-off",
    //         isNull: true,
    //     }
    // ]);

    const nullElement = (
        <div className={_scss.null}>
            <Text label="span" fontWeight="700" color="tertiary" size="extra-small">
                NULL
            </Text>
        </div>
    );

    const selectOption = (optionName: string) => {
        toggleParamsSelector(optionName);
        // let newParamsOptions = paramsOptions.map((option) => {
        //     if (option.name === optionName)
        //         return { ...option, color: "primary" } as paramsOptions;
        //     else
        //         return { ...option, color: "base-off", } as paramsOptions;
        // });

        // setParamsOptions(newParamsOptions);
    }

    return (
        <div className={_scss.params_selector}>
            <nav>
                {["params", "query", "body", "responseBody"].map((option) => (
                    <ul key={option}>

                        {route[option] && route[option].length === 0 && nullElement}

                        <Text
                            label="p"
                            color={paramsSelected === option ? "primary" : "base-off"}
                            onClick={() => { selectOption(option) }}>
                            {option === "responseBody" ? "Response" : upFirst(option)}
                        </Text>
                    </ul>
                ))}
            </nav>
        </div>
    );
};

export default ParamsSelector;
