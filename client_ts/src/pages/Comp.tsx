import React from "react";

interface Props {
  className?: string;
  scss: CSSModuleClasses;
  text: string;
}

export const Comp = ({ text, className, scss }: Props) => {
  return (
    <div
      className={scss.comp}
      onClick={() => {
        console.log("start comp");
      }}
    >
      {text}
    </div>
  );
};
