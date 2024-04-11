import React from "react";
import { useManagerText } from "../../../hooks/useManagerText";

export const EndpointProperties = ({ scss, item }) => {
  const { firsUpperCase } = useManagerText();
  return (
    <div className={scss.props_list}>
      <button className={`${scss.prop} ${scss.request_type}`}>
        <p>{firsUpperCase(item.method)}</p>
      </button>

      <button className={`${scss.prop} ${scss.controller}`}>
        <p>{firsUpperCase(item.nameController)}</p>
      </button>

      <button className={`${scss.prop} ${scss.middleware}`}>
        <p>{firsUpperCase(item.middlewares[0])}</p>
      </button>

      <button className={`${scss.prop} ${scss.middleware}`}>
        <p>{firsUpperCase(item.middlewares[1])}</p>
      </button>
      <div className={scss.description}>
        <p>{item.description}</p>
      </div>
    </div>
  );
};
