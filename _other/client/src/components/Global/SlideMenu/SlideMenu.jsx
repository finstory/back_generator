import React from "react";
import { NavLink } from "react-router-dom";
import scss from "../../../assets/sass/components/global/slide_bar.module.scss";
import logo from "../../../assets/images/logo.png";
import { SubMenu } from "./SubMenu/SubMenu";
import { useHomeServices } from "../../../services/useHomeServices";
import { HelpAlert } from "./HelpAlert";
import MenuData from "../../../data/MenuData";
import { useAuthServices } from "../../../services/useAuthServices";

export const SlideMenu = () => {
  const { home: { menu: { open } }, switchMenu } = useHomeServices();
  const { logout } = useAuthServices();
  return (
    <div className={scss.slide_bar_container}
      style={{
        transform: open ? "" : "translateX(-29rem)"
      }}
    >

      <aside className={scss.slide_bar}>

        <div className={scss.top}>
          <div className={scss.logo}>
            <img src={logo} alt="logo" />
          </div>
          <p>GLOVAL GROUP</p>
        </div>

        <div className={scss.title_slide}>MENU</div>

        <nav>
          {MenuData.map((slack) => (
            <SubMenu
              key={slack.id}
              scss={scss}
              switchMenu={switchMenu}
              slack={slack}
            />
          ))}
        </nav>

        <HelpAlert scss={scss} />

      </aside>

      <div className={scss.bottom}>
        <div className={scss.icon}
          onClick={() => { logout() }}
        >
          <img
            src={
              "https://res.cloudinary.com/dz9smi3nc/image/upload/v1709013352/Agro/Vector_lj14ke.png"
            }
            alt="logo"
          />
        </div>
        <div className={scss.icon}>
          <img
            src={
              "https://res.cloudinary.com/dz9smi3nc/image/upload/v1708851101/Agro/Vector_11_isegm2.png"
            }
            alt="logo"
          />
        </div>
        <div className={scss.icon}>
          <img
            src={
              "https://res.cloudinary.com/dz9smi3nc/image/upload/v1708851124/Agro/Vector_12_tgvc8j.png"
            }
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
};
