import React, { FC } from 'react';
import scss from './text.module.scss';
import { ColorStyle, FamilyStyle, FontWeightStyle, LabelStyle, SizeStyle } from '@/_common/interfaces/IStyles';

export interface IText {
    className?: string,
    style?: React.CSSProperties,
    //% custom types:
    children?: React.ReactNode,
    label: LabelStyle,
    title?: string,
    cursor?: React.CSSProperties["cursor"],
    color?: ColorStyle,
    family?: FamilyStyle,
    padding?: string,
    size?: SizeStyle,
    fontWeight?: FontWeightStyle,
    hoverColor?: ColorStyle,
    onClick?: () => void,
}

export const Text: FC<IText> = ({ style = {},
    children,
    //% custom properties:
    label,
    color = "base",
    size = "normal",
    family = "primary",
    title,
    cursor = "",
    padding = "0",
    fontWeight = "400",
    hoverColor = "none",
    onClick,
    className
}) => {
    return React.createElement(
        label,
        {
            className: `${className ? className : ""} ${scss.default} ${scss["color_" + color]} ${scss["size_" + size]} ${scss["family_" + family]}`,

            style: { ...style, padding, cursor, fontWeight },
            title,
            onClick,
        },
        children
    )

}
