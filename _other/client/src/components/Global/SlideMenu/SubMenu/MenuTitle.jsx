import React from "react";

const images = {
  arrow:
    "https://res.cloudinary.com/dz9smi3nc/image/upload/v1708845828/Agro/Vector_10_dpdwk1.png",
};

export const MenuTitle = ({
  scss,
  slack,
  stack,
  setActiveStyle,
  switchMenu,
}) => {
  const handleClickMenu = () => {
    if (slack.id !== stack) switchMenu(slack.id, slack.subMenus[0].id);
    else switchMenu("", slack.subMenus[0].id);
  };

  return (
    <div
      className={setActiveStyle(slack.id === stack, scss.title, scss._active)}
      onClick={handleClickMenu}
    >
      <div className={scss.wrap}>
        <div className={scss.icon}>
          <img src={slack.icon} alt="icon" />
        </div>
        <p>{slack.title}</p>
      </div>
      <div
        className={setActiveStyle(slack.id === stack, scss.arrow, scss._rotate)}
      >
        {slack.subMenus.length > 1 && <img src={images.arrow} alt="arrow" />}
      </div>
    </div>
  );
};
