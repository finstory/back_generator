import React, { JSXElementConstructor, useEffect, useRef } from "react";
import { Div, Input, InputOn } from "../interfaces/IProps";
import scss from "../assets/sass/pages/test.module.scss";

import { Comp } from "./Comp";
import { DoubleBorderGradient } from "../utilities/components/DoubleBorderGradient";

export const TestPage = () => {
    const onClickSubmit = () => {
        console.log("start");
    };

    const main_ref = useRef<Div>();
    const main_input_ref = useRef<Input>();

    useEffect(() => {
        if (main_ref.current) {
            main_ref.current.className = scss.main;
        }
    }, [main_ref.current]);

    const props = childrenProps({ onClickSubmit, main_ref, scss });

    return (
        <div className={scss.main} {...props.div_main}>

            <input className={scss.input} {...props.input} />
            <input className={scss.input} {...props.input_name} />

            <div className={scss.input}>
                <p>Hello</p>
            </div>
            <input className={scss.input} {...props.input} />

            <DoubleBorderGradient className="hello" {...props.main}>

                <div className={scss.input}>texto</div>

            </DoubleBorderGradient>

            <Comp className={scss.comp} {...props.comp} />
            <p className={scss.hello}>hello</p>
        </div>
    );
};

const childrenProps = ({ onClickSubmit, main_ref, scss }) => {
    return {
        img: {},
        main: {
            border: "1px solid black",
        },
        input: {
            name: "name",
            type: "text",
            placeholder: "name",
            onChange: onClickSubmit,
            onFocus: onClickSubmit,
            onClick: onClickSubmit,
        } as InputOn,

        input_name: {
            type: "text",
            placeholder: "jejej",
            onChange: onClickSubmit,
            onFocus: onClickSubmit,
            onClick: onClickSubmit,
        } as InputOn,

        div_main: {
            ref: main_ref,
            onClick: onClickSubmit,
        } as Div,

        comp: {
            text: "hello",
            className: scss.comp,
            scss,
        },
    };
};
