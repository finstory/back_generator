import React from "react";
import { BorderGradient } from "../../../utilities/BorderGradient";
import { useRequestServices } from "../../../services/useRequestServices";

export const RequestBar = ({ scss }) => {
  const {
    request: { bar_url },
  } = useRequestServices();
  return (
    <form className={scss.request_bar}>
      <div className={scss.search}>
        <input type="text" placeholder="Input your path..." value={bar_url} />
      </div>

      <BorderGradient
        className={scss.submit_btn}
        borderSize="2px"
        onClick={() => {}}
      >
        <p>SEND</p>
      </BorderGradient>
    </form>
  );
};
