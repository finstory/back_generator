import React from "react";
import axios from "axios";
import { useRedux } from "../redux/reducer/useRedux";

export const homeReducer = {
  menu: {
    open: true,
    stack: "infraestructura",
    sub_menu: "climatización",
  },

};

export const useHomeServices = () => {
  const services = { ...useRedux("home") };
  const { home, setHome } = services;

  // Add your services (or redux actions)...

  services.removeHomePanel = (id) => {
    const { home: { homePanelsList } } = services;

    const result = homePanelsList.filter(panel => panel.homePanelId !== id);

    setHome({ homePanelsList: result }, "REMOVE_HOME_PANEL");
  };

  services.addHomePanel = (panel) => {
    const { home: { homePanelsList } } = services;
    const thisPanelExist = homePanelsList.find(this_panel => this_panel.homePanelId === panel.homePanelId);

    if (!thisPanelExist)
      setHome({ homePanelsList: [...homePanelsList, panel] }, "ADD_HOME_PANEL");

  };

  services.switchMenu = (stack, sub_menu) => {
    const { home: { menu } } = services;
    setHome({ menu: { ...menu, stack, sub_menu } }, "SWITCH_MENU");
  };

  services.openMenu = () => {
    const { home: { menu } } = services;
    setHome({ menu: { ...menu, open: !menu.open } }, "OPEN_MENU");
  };

  return services;
};
