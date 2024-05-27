import React, { FC } from 'react';
import scss from './text.module.scss';
import { ColorStyle, FamilyStyle, FontWeightStyle, LabelStyle, SizeStyle } from '@/interfaces/IStyles';

export interface IText {
    className?: string,
    style?: React.CSSProperties,
    //% custom types:
    children?: React.ReactNode,
    label: LabelStyle,
    cursor?: React.CSSProperties["cursor"],
    color?: ColorStyle,
    family?: FamilyStyle,
    padding?: string,
    size?: SizeStyle,
    fontWeight?: FontWeightStyle,
    hoverColor?: ColorStyle,
}

export const Text: FC<IText> = ({ style = {},
    children,
    //% custom properties:
    label,
    color = "base",
    size = "normal",
    family = "primary",
    cursor = "",
    padding = "0",
    fontWeight = "400",
    hoverColor = "none",
    className
}) => {
    return React.createElement(
        label,
        {
            className: `
            ${className}
            ${scss.default} 
            ${scss["color_" + color]} 
            ${scss["size_" + size]} 
            ${scss["family_" + family]}
            ${scss["hover_" + hoverColor]}`,

            style: { ...style, padding, cursor, fontWeight },
        },
        children
    )

}
