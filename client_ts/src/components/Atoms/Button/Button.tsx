import React, { FC } from "react";
import scss from "./button.module.scss";

export const Button: FC<{
  style?: React.CSSProperties;
  children: React.ReactNode;
  variant?:
  "default" | "reset" | "circle_one_char" | "gradient"
  //? request colors
  | "get" | "post" | "put" | "patch" | "delete" | "middleware"
  ;
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
  padding?: React.CSSProperties["padding"];
  onClick?: () => void;
}> = ({ children, style = {}, variant = "index", onClick, width = "auto", height = "auto", padding = "auto" }) => {

  const notClonedList: string[] = ["circle_one_char"];
  const includeDefault = notClonedList.includes(variant);

  return (
    <button
      className={`${!includeDefault ? scss.default : ""} ${variant ? scss[variant] : ""}`}
      style={{ ...style, width, height, padding }}
      onClick={onClick}
    >

      {children}
    </button>
  );
};
