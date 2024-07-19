import React, { useCallback, useRef, useState } from "react";
import { useHomeServices } from "../../../../services/useHomeServices";
import { useStyleManager } from "../../../../hooks/useStyleManager";
import { MenuTitle } from "./MenuTitle";
import { Item } from "./Item";

export const SubMenu = ({ scss, switchMenu, slack }) => {
  const {
    home: {
      menu: { stack, sub_menu },
    },
  } = useHomeServices();
  const { setActiveStyle, getSizeOfElement } = useStyleManager();
  const { refCallback, elementSize } = getSizeOfElement();

  return (
    <ul
      onClick={() => {
        if (slack.subMenus.length <= 1)
          switchMenu(slack.id, slack.subMenus[0].id);
      }}
    >
      {/* MENU TITLE */}
      <MenuTitle
        scss={scss}
        slack={slack}
        stack={stack}
        switchMenu={switchMenu}
        setActiveStyle={setActiveStyle}
      />

      {/* LIST OF SUBMENU */}
      <div
        className={scss.sub_menu_container}
        style={{
          height: stack === slack.id ? elementSize.height : 0,
        }}
      >
        <div className={scss.wrap} ref={(node) => refCallback(node)}>
          {slack.subMenus.length > 1 &&
            slack.subMenus.map((subMenu) => (
              <Item
                key={subMenu.id}
                scss={scss}
                slack={slack}
                sub_menu={sub_menu}
                subMenu={subMenu}
                switchMenu={switchMenu}
              />
            ))}
        </div>
      </div>
    </ul>
  );
};
