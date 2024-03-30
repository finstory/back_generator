import React from "react";
import axios from "axios";
import { useRedux } from "../redux/reducer/useRedux";

export const homeReducer = {
  menu: {
    open: true,
    stack: "infraestructura",
    sub_menu: "climatización",
  },
  homePanelsList: [
    // {
    //   panelId: 2,
    //   homePanelId: "154",
    //   size: "semi_large",
    //   title: "",
    //   subtitle: "",
    //   description: "",
    //   optionsList: [],
    //   contentList: [
    //     {
    //       id: 1231234545,
    //       childrenLayoutStyle: "semi_large_wrap",
    //       wrapList: [
    //         {
    //           id: 3736,
    //           type: "realtime_small",
    //           compList: [
    //             {
    //               id: 21212,
    //               title: "Temperatura Actual",
    //               value: 24,
    //               measure: "° C",
    //               icon: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1709905170/Agro/Panel/small/Frame_29_c6js2u.svg",
    //             },
    //             {
    //               id: 958261212,
    //               title: "Temperatura Galpón",
    //               value: 22,
    //               measure: "° C",
    //               icon: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1709906446/Agro/Panel/small/Frame_29_1_x9ezcq.svg",
    //             },
    //             {
    //               id: 954328765123,
    //               title: "Humedad",
    //               value: 74,
    //               measure: "%",
    //               icon: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1709906449/Agro/Panel/small/Frame_29_2_wltw59.svg",
    //             },
    //             {
    //               id: 86312378903,
    //               title: "El Tiempo Ahora",
    //               value: "Ola de Calor",
    //               measure: "",
    //               icon: "https://res.cloudinary.com/dz9smi3nc/image/upload/v1709906484/Agro/Panel/small/Frame_29_3_rmqxse.svg",
    //             },
    //           ],
    //         },
    //       ],
    //     },
    //   ],
    // },
  ],


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
