import React, { useEffect, useState } from "react";
import { Panel } from "../Panels/Panel";
import { useHomeServices } from "../../../services/useHomeServices";
import { Guide } from "./Guide";

export const Home = () => {
  const {
    home: { homePanelsList },
  } = useHomeServices();

  // const [contentList, setContentList] = useState([
  //   {
  //     homePanelId: "23",
  //     size: "normal",
  //     panelId: 2,
  //     childrenList: []
  //   },
  //   {
  //     homePanelId: "26",
  //     size: "normal",
  //     panelId: 3,
  //     childrenList: []
  //   },
  // ])

  const [panelsListResized, setPanelsListResized] = useState(homePanelsList);

  const autoResizePanel = () => {
    const result = [];
    let listLength = homePanelsList.length;
    const semiLargeExist = homePanelsList.filter(
      (panel) => panel.size === "semi_large"
    );
    let removeSemiLarge = semiLargeExist.length;
    let isPar = (listLength + removeSemiLarge) % 2 === 0 ? true : false;

    if (isPar) {
      homePanelsList.forEach((panel) => {
        if (panel.size === "normal") result.push(panel);
        else if (panel.size === "large")
          result.push({ ...panel, size: "normal" });
      });
    } else {
      homePanelsList.forEach((panel, index) => {
        if (index + 1 === listLength) {
          result.push({ ...panel, size: "large" });
        } else
          switch (panel.size) {
            case "semi_large":
              break;
            case "normal":
              result.push(panel);
              break;
            case "large":
              result.push({ ...panel, size: "normal" });
              break;
          }
      });
    }
    // result.unshift(panel);
    setPanelsListResized([...semiLargeExist, ...result]);
  };
  useEffect(() => {
    autoResizePanel();
  }, [JSON.stringify(homePanelsList)]);

  return (
    <>
      {panelsListResized.length > 0 ? (
        homePanelsList.map((panel) => (
          <Panel key={panel.homePanelId} {...panel} />
        ))
      ) : (
        <Guide />
      )}
    </>
  );
};
