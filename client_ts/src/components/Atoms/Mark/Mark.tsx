import React, { FC, ChangeEvent, CSSProperties } from 'react';
import scss from './mark.module.scss';
import { ColorStyle } from '@/interfaces/IStyles';

export interface IMark {
    className?: string;
    style?: CSSProperties;
    variant?: "circle" | "rhombus" | "triangle";
    onClick?: () => void;
    width?: string;
    height?: string;
    cursor?: "pointer" | "default";
    color?: ColorStyle,
    hoverColor?: ColorStyle,
}

export const Mark: FC<IMark> = ({
    className,
    style = {},
    variant = "circle",
    onClick,
    color,
    width,
    height,
    cursor = "",
    hoverColor
}) => {
    return (
        <div className={`${className} ${variant ? scss[variant] : null} ${scss["color_" + color]}  ${scss["hover_" + hoverColor]}`}
            style={{ ...style, ...{ width, height, cursor } }}
            onClick={onClick}
        />

    );
};
