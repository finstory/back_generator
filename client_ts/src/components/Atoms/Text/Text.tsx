import React, { FC } from 'react';
import scss from './text.module.scss';

const Text: FC<{
    style?: React.CSSProperties,
    //% custom types:
    children: React.ReactNode,
    label?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span",
    cursor?: React.CSSProperties["cursor"],
    color?: "base-off" | "base" | "primary" | "primary-hover" | "secondary" | "secondary-hover",
    family?: "primary" | "secondary",
    padding?: string,
    size?: "small" | "normal" | "large",

}> = ({ style = {},

    //% custom properties:
    label = "p",
    color = "base",
    size = "normal",
    family = "",
    padding,
    children,
}) => {
        return React.createElement(
            label,
            {
                className: `${scss.default} ${scss["color_" + color]} ${scss["size_" + size]} ${scss["family_" + family]}`,
                style: { ...style, padding },
            },
            children
        )

    }

export default Text;