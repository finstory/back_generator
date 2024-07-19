import { Text } from "@/components";
import React, { FC, useState } from "react";

interface IProps {
    _scss: CSSModuleClasses;
}

type paramsOptions = {
    name: string;
    color: "primary" | "base-off";
    isNull: boolean;
};

const ParamsSelector: FC<IProps> = ({ _scss }) => {

    const [paramsOptions, setParamsOptions] = useState<paramsOptions[]>([
        {
            name: "PARAMS",
            color: "primary",
            isNull: true,
        },
        {
            name: "QUERY",
            color: "base-off",
            isNull: true,
        },
        {
            name: "BODY",
            color: "base-off",
            isNull: true,
        },
        {
            name: "RESPONSE",
            color: "base-off",
            isNull: true,
        }
    ]);

    const nullElement = (
        <div className={_scss.null}>
            <Text label="span" fontWeight="700" color="tertiary" size="extra-small">
                NULL
            </Text>
        </div>
    );

    const selectOption = (optionName: string) => {
        let newParamsOptions = paramsOptions.map((option) => {
            if (option.name === optionName)
                return { ...option, color: "primary" } as paramsOptions;
            else
                return { ...option, color: "base-off", } as paramsOptions;
        });

        setParamsOptions(newParamsOptions);
    }

    return (
        <div className={_scss.params_selector}>
            <nav>
                {paramsOptions.map((option) => (
                    <ul key={option.name}>
                        {option.isNull && nullElement}
                        <Text label="p" color={option.color} onClick={() => { selectOption(option.name) }}>
                            {option.name}
                        </Text>
                    </ul>
                ))}
            </nav>
        </div>
    );
};

export default ParamsSelector;
