import React from "react";

export const Properties = ({ scss, item }) => {
  return (
    <div className={scss.properties}>
      <div className={scss.header}>
        <p>KEY</p>
        <p>VALUE</p>
        <p>TYPE</p>
      </div>

      <div className={scss.prop}>
        <div className={scss.mark} />
        <p>id_team</p>
        <p>139</p>
        <p>number</p>
      </div>

      <div className={scss.prop}>
        <div className={scss.mark} />
        <p>name</p>
        <p>facu</p>
        <p>string</p>
      </div>
    </div>
  );
};
