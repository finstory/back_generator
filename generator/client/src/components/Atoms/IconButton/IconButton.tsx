import React, { FC } from "react";
import scss from "./icon_button.module.scss";

export type IconsName = "edit_primary" | "delete" | "edit_blue" | "delete_primary" | "add_primary";

const iconsUrls = {
  add_primary: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1720983995/Generator/Icons/Vector_11_wxqrum.png",
  edit_primary: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1718794655/Generator/Icons/Vector_1_txgh8i.png",
  edit: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1712557540/Generator/Icons/icons8-editar-100_1_fe45dg.png",
  delete_primary: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1718795186/Generator/Icons/Vector_8_lmu0sh.png",
  delete: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1712557494/Generator/Icons/icons8-basura-100_1_g7gkma.png",
};

export const IconButton: FC<{
  icon: IconsName,
  width?: React.CSSProperties["width"],
  height?: React.CSSProperties["height"],
  style?: React.CSSProperties;
  variant?: "default";
  onClick?: () => void;
}> = ({ style = {}, width = "2rem", height = "1.9rem", variant = "default", onClick, icon }) => {

  return (
    <button
      className={`${scss.default} ${variant ? scss[variant] : null}`}
      style={{ ...style, width, height }}
      onClick={onClick}
    >
      <img src={iconsUrls[icon]} alt="action_icon" />
    </button>
  );
};
