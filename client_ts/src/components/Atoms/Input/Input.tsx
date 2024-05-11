import React, { FC } from 'react';
import scss from './input.module.scss';

const Input: FC<{
    style?: React.CSSProperties,
    variant?: "default" | "request" | "reset",

    //% custom types:
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string,
    type?: string,
    width?: string,
    height?: string,
    color?: string

}> = ({ style = {}, variant = "index",

    //% custom properties:
    onChange,
    placeholder = "text here",
    type = "text",
    width = "100%",
    height = "auto",
    color

}) => {
        return (
            <div className={scss.wrapper}
                style={{ width, height }}
            >
                <input
                    className={`${scss.default} ${variant ? scss[variant] : null}`}
                    style={{ ...style, color: color ? color : null }}
                    type={type}
                    placeholder={placeholder}
                    onChange={onChange}
                />
            </div>
        )
    }

export default Input;