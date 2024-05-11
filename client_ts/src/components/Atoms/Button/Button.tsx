import React, { FC } from "react";
import scss from "./button.module.scss";

const Button: FC<{
  style?: React.CSSProperties;
  children: React.ReactNode;
  variant?:
  "default" | "reset" | "circle_one_char"
  //? request colors
  | "get" | "post" | "put" | "patch" | "delete" | "middleware"
  ;
  onClick?: () => void;
}> = ({ children, style = {}, variant = "index", onClick }) => {

  const notClonedList: string[] = ["circle_one_char"];
  const includeDefault = notClonedList.includes(variant);

  return (
    <button
      className={`${!includeDefault ? scss.default : null} ${variant ? scss[variant] : null}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
