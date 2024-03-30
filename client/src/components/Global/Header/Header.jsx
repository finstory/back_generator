//? NO LISTO PARA DOC.

import { useState } from "react";
import scss from "../../../assets/sass/components/global/header.module.scss";
import { useHomeServices } from "../../../services/useHomeServices";

const assets = {
  sun: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1709642301/Agro/sun_o7y0ot.svg",
  moon: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1709643382/Agro/Frame_20_q5tep5.png",
}

export const Header = () => {

  const { home: { menu: { open } }, openMenu } = useHomeServices();

  const [darkMode, setDarkMode] = useState(true);

  return (
    <header className={scss.header}
      style={open ? {} : { width: "100%" }}
    >
      <nav>
        {/* OPEN MENU */}
        <ul>
          <li>
            <div className={scss.icon}
              onClick={() => { openMenu() }}
            >
              <img
                src={
                  "https://res.cloudinary.com/dz9smi3nc/image/upload/v1709024128/Agro/Vector_19_tx3nbe.png"
                }
                alt="logo"
              />
            </div>
          </li>
        </ul>
        {/* CONJUNTO DE BOTONES DERECHA */}
        <ul>

          <li>
            <div className={scss.switch_dark_mode}
              onClick={() => { setDarkMode(!darkMode) }}
              style={{
                padding: darkMode ? "0 2.2rem 0 0" : "0 0 0 2.2rem"
              }}
            >
              <div className={scss.circle}>
                <img src={darkMode ? assets.sun : assets.moon} alt="dark_mode" />
              </div>
              {/* <img
                src={
                  "https://res.cloudinary.com/dz9smi3nc/image/upload/v1709022759/Agro/Label_relative_bhlapm.png"
                }
                alt="logo"
              /> */}
            </div>
          </li>

          <li>
            <div className={scss.icon}>
              <img
                src={
                  "https://res.cloudinary.com/dz9smi3nc/image/upload/v1709023210/Agro/Link_relative_rajpm5.png"
                }
                alt="logo"
              />
            </div>
          </li>
          <li>
            <div className={scss.user_info}>
              <p>Alejandro Degano</p>
              <p>Ingeniero</p>
            </div>

            <div className={scss.photo}>
              <img
                src={
                  "https://res.cloudinary.com/dz9smi3nc/image/upload/v1709024016/Agro/image_qqxri8.png"
                }
                alt="logo"
              />
            </div>

            <div className={scss.arrow}>
              <img
                src={
                  "https://res.cloudinary.com/dz9smi3nc/image/upload/v1709023282/Agro/Vector_17_tgeeub.png"
                }
                alt="arrow"
              />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};
