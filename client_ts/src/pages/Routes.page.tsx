import { useEffect, useState } from "react";
import { EndpointPanel } from "../components/Routes/EndpointPanel";
import { RequestPanel } from "../components/Routes/RequestPanel";
import { ManagerPanel } from "../components/Routes/ManagerPanel";

export const RoutesPage = () => {

  return (
    <div className={"main_container"}>
      <EndpointPanel />
      {/* <RequestPanel />
      <ManagerPanel /> */}
    </div>
  );
};
