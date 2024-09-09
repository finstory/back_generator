import React, { FC, ChangeEvent, CSSProperties } from 'react';
import scss from './input.module.scss';

export interface IInput {
    style?: CSSProperties;
    variant?: "default" | "off" | "reset";
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    borderColor?: string;
    defaultValue?: string;
    readOnly?: boolean;
    value?: string;
    name?: string;
    type?: string;
    width?: string;
    height?: string;
    color?: string;
}

export const Input: FC<IInput> = ({
    style = {},
    variant = "index",
    onChange,
    readOnly = false,
    placeholder = "text here",
    defaultValue,
    borderColor,
    value,
    name,
    type = "text",
    width = "100%",
    height = "3.6rem",
    color
}) => {
    return (
        <div className={scss.wrapper} style={{ width, height }}>
            <input
                className={`${scss.default} ${variant ? scss[variant] : null}`}
                style={{ ...style, ...(color && { color }) }}
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                defaultValue={defaultValue}
                value={value}
                readOnly={readOnly}
            />
        </div>
    );
};
