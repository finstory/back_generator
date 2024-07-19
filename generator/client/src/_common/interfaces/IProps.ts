import React, { MutableRefObject } from "react";

export type Div = React.HTMLAttributes<HTMLDivElement> & {
    ref?: MutableRefObject<any>;
};

export type Input = React.InputHTMLAttributes<HTMLInputElement> & {
    ref?: MutableRefObject<any>;
}

export interface InputOn extends Input {
    onChange: () => void;
    onClick: () => void;
}