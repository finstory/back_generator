import { FC, useEffect, useState } from "react";
import { Text, IText, DGBorder, Button, IDGBorder } from "@components";
import scss from "../../_scss/footer.module.scss";
import S from "@S";


export const Footer: FC = () => {

  const props = childrenProps({});

  return (
    <footer>

      <div className={scss.wrap}>
        <Text label="p" color="base-off">DEVELOPED BY : <span onClick={
          ()=>{window.open("https://www.linkedin.com/in/facundo-alvarez-full-stack/")}
        }>FACUNDO ALVAREZ</span> - GENERATOR @ ALL RIGHTS RESERVED 2024</Text>
      </div>

    </footer>
  )
};

const childrenProps = ({ }) => new class {

}
